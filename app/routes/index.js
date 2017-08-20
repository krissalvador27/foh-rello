import Ember from 'ember';

export default Ember.Route.extend({

    actions: {
      
      onLoad() {
        this.transitionTo('lists');
      }

    }
});
