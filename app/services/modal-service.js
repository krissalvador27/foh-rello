import Ember from 'ember';

export default Ember.Service.extend({

  applicationContext: null,

  // Show modal via application context
  showModal(controllerName, content) {
    if (!this.get('applicationContext')) {
      return;
    }

    // All modals must be namespaced until modals/
    this.get('applicationContext').send('openModal', 'modals/' + controllerName, content);
  },

  // Close modal via application context
  closeModal() {
    if (!this.get('applicationContext')) {
      return;
    }

    // All modals must be namespaced until modals/
    this.get('applicationContext').send('closeModal');
  }

});
