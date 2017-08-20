import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['new-item-form'],

  store: Ember.inject.service(),

  list: null,

  newItemTitle: null,
  newItemDescription: null,
  newItemTitleIsEmpty: Ember.computed.empty('newItemTitle'),
  newItemDescriptionIsEmpty: Ember.computed.empty('newItemDescription'),
  
  // Disable save button when either title and description are empty
  disableSaveButton: Ember.computed.or('newItemTitleIsEmpty', 'newItemDescriptionIsEmpty'),

  selectedColor: 'orange',
  selectedOrange: Ember.computed.equal('selectedColor', 'orange'),
  selectedGreen: Ember.computed.equal('selectedColor', 'green'),
  selectedRed: Ember.computed.equal('selectedColor', 'red'),

  actions: {

    // Save new item
    saveNewItem() {
      if (this.get('disableSaveButton')) {
        return;
      }

      const list    = this.get('list');
      const newItem = this.get('store').createRecord('item', {
        list,
        title       : this.get('newItemTitle'),
        description : this.get('newItemDescription'),
        color       : this.get('selectedColor')
      });

      // Persist to local storage
      newItem.save();

      // onSave callback
      if (this.attrs.onSaveNewItem) {
        this.attrs.onSaveNewItem();
      }

      this.send('resetProperties');
    },

    // Toggle color
    toggleColor(color) {
      this.set('selectedColor', color);
    },

    resetAddNewItem() {
      this.send('resetProperties');

      if (this.attrs.onCancelNewItem) {
        this.attrs.onCancelNewItem();
      }
    },

    resetProperties() {
      this.setProperties({
        newItemTitle       : null,
        newItemDescription : null,
        selectedColor      : 'orange'
      });
    }

  }
});
