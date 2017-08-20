import Ember from 'ember';

export default Ember.Component.extend({

  modalService: Ember.inject.service(),

  item: null,

  actions: {

    // Show item-viewer modal via modal service
    showModalItemView() {
      this.get('modalService').showModal('item-viewer', {
        item : this.get('item')
      })
    }

  }

});
