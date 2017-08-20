import Ember from 'ember';

export default Ember.Component.extend({

    didInsertElement() {
      this._super(...arguments);

      const progress   = this.$('.bar-container');
      const percentage = 100;

      // Animate starting from 0
      this.$({ countNum: 0 }).animate({ countNum: percentage }, {
        duration: 3750,
        easing:'linear',
        step: function() {
          this.countNum += 1;
          let pct = this.countNum;
          progress.children().css('width', pct + '%');
        },
        complete: () => {
          this.sendAction('onLoad');
        }
      });
    }
    
});
