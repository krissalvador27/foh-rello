import Ember from 'ember';

export default Ember.Route.extend({

  modalService: Ember.inject.service(),

  // Init services on application's init hook
  init() {
    this.set('modalService.applicationContext', this);
  },

  actions: {

    // Opens modal given controllerName and any
    // content you'd like to pass into the content
    openModal(controllerName, content) {
      this.controllerFor(controllerName).set('content', content);
      this.render(controllerName, {
        into   : 'application',
        outlet : 'modal-outlet'
      });
    },

    // Close modal
    closeModal() {
      // Proper way to disconnect modals (until ember fixes it)
      // https://github.com/emberjs/ember-inspector/issues/625
      this.render('modals/empty', {
        outlet     : 'modal-outlet',
        into       : 'application',
        controller : 'application'
      });
    }

  }
});
