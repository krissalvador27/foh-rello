import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel() {
    // Comment this code out if you'd like some persistence!
    localStorage.clear();
  },

  // model hook
  model() {
    // Comment this code out if you'd like some persistence!
    const defaultList = this.createDefaultList();
    return defaultList.save().then(() => {
      return this.store.query('list', { });
    });

    // Uncomment this code if you'd like some persistence!
    // return this.store.query('list', { });
  },

  // setupController hook
  setupController(controller, model) {
    const lists = model.toArray();

    // set model on controller
    controller.set('model', lists);
  },

  // Create default list
  createDefaultList() {
    return this.store.createRecord('list', {
      title : 'Default List'
    });
  }

});
