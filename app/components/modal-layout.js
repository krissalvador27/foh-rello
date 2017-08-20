import Ember from 'ember';

export default Ember.Component.extend({

  modalService: Ember.inject.service(),

  rendered: false,

  // didRender hook
  didRender() {
    // Run later to handle animation
    // https://discuss.emberjs.com/t/add-class-after-didrender/9544/3
    Ember.run.next(() => {
      this.set('rendered', true);
    }, 500);
  },

  // willDestroyElement hook
  willDestroyElement() {
    this.set('rendered', false);
  },

  actions: {

    // Close modal
    closeModal() {
      this.get('modalService').closeModal();
    }
    
  }

});
