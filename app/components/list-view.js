import Ember from 'ember';

export default Ember.Component.extend({

  list: null,
  
  actions: {

    resetAddNewItem() {
      this.$('.add-item.btn').removeClass('hide');
      this.$('.new-item-form').removeClass('show');
    },

    saveNewTitle(title) {
      const list = this.get('list');

      list.set('title', title);
      list.save();
    },

    showAddItem() {
      this.$('.add-item.btn').addClass('hide');
      this.$('.new-item-form').addClass('show');
    },

  }
});
