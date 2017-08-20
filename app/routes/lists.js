import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel() {
    // Don't persist
    localStorage.clear();
  },

  model() {
    const defaultList = this.createDefaultList();
    return defaultList.save().then(() => {
      return this.store.query('list', { });
    });
  },

  setupController(controller, model) {
    const lists = model.toArray();

    controller.set('model', lists);
  },

  createDefaultList() {
    return this.store.createRecord('list', {
      title : 'Default List'
    });
  }

});
