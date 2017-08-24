import Ember from 'ember';

export default Ember.Component.extend({

  list: null,

  actions: {

    // On drop of item onto this list
    onDrop(item) {
      // If on same list don't do anything
      if (item.get('list.id') === this.get('list.id')) {
        return;
      }

      // Remove from old list
      const oldList = item.get('list');
      oldList.get('items').removeObject(item);

      // Add to this list
      const currList = this.get('list');
      currList.get('items').pushObject(item);
      item.save();
    },

    // Save list
    saveList() {
      this.get('list').save();
      this.send('resetAddNewItem');
    },

    // Reset add new item classes
    resetAddNewItem() {
      this.$('.add-item.btn').removeClass('hide');
      this.$('.new-item-form').removeClass('show');
    },

    // Save new title on list and persist on model
    saveNewTitle(title) {
      const list = this.get('list');

      list.set('title', title);
      list.save();
    },

    // Show item add via new item classes
    showAddItem() {
      this.$('.add-item.btn').addClass('hide');
      this.$('.new-item-form').addClass('show');
    },

  }
});
