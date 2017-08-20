import Ember from 'ember';

export default Ember.Component.extend({

  maxLength: 50,
  value: null,
  type: 'input',

  // Types of inline editors
  isInput: Ember.computed.equal('type', 'input'),
  isTextarea: Ember.computed.equal('type', 'textarea'),

  emptyValue: Ember.computed.empty('value'),

  // Disable save button if no change has occured
  disableSaveButton: Ember.computed.or('noChange', 'emptyValue'),

  // edit flag
  editing: false,

  // Copy of value passed in since
  // we never want to truly edit original
  editableValue: Ember.computed('value', function() {
    return this.get('value');
  }),

  // Property to check if value === editableValue
  // signifying user hasn't changed the orig value
  noChange: Ember.computed('value', 'editableValue', function() {
    return this.get('value') === this.get('editableValue');
  }),

  actions: {

    // Cancel edit and reset editable value
    cancel() {
      this.send('toggleEdit');
      this.set('editableValue', this.get('value'));
    },

    // Toggle editing flag
    toggleEdit() {
     this.toggleProperty('editing');
    },

    // With passed in onSave, propagate new value to parent context
    save() {
      if (this.get('disableSaveButton')) {
        return;
      }

      if (this.attrs.onSave) {
        this.attrs.onSave(this.get('editableValue'));
      }

      this.send('toggleEdit');
    }

  }
});
