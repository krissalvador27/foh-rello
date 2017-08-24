import Ember from 'ember';

export default Ember.Controller.extend({

  lists: Ember.computed.alias('model'),
  
  actions: {

    createList() {
      const newList = this.store.createRecord('list', {
        title : 'My New List'
      });

      this.get('lists').pushObject(newList);
      newList.save();
    }

  }

});
