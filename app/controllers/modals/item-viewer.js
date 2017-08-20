import Ember from 'ember';

export default Ember.Controller.extend({
  modalService: Ember.inject.service(),

  item: Ember.computed.alias('content.item'),
  isDeleting: false,

  actions: {

    // Close item viewer modal
    closeModal() {
      this.get('modalService').closeModal();
    },

    // Delete item & then close modal
    delete() {
      // Pop up confirm modal
      if (confirm('Are you sure?')) {
        const item = this.get('item');

        // Womp ember data doesn't update hasMany or belongsTo relationships
        // https://stackoverflow.com/questions/18806533/deleterecord-does-not-remove-record-from-hasmany?rq=1
        item.eachRelationship(function(name, relationship){
          if (relationship.kind === 'belongsTo') {
            let inverse = relationship.parentType.inverseFor(name);
            let parent  = item.get(name);
            if (inverse && parent) {
              parent.get(inverse.name).removeObject(item);
            }
          }
        });

        this.store.deleteRecord(this.get('item'));
        this.send('closeModal');
      }
    },

    // Save title
    saveTitle(title) {
      const item = this.get('item');
      item.set('title', title);
      item.save();
    },

    // Save description
    saveDescription(description) {
      const item = this.get('item');
      item.set('description', description);
      item.save();
    },

  }

});
