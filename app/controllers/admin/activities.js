import Ember from 'ember';

export default Ember.Controller.extend({
  activityTitle: 'Activities',

  actions: {
    setActivityTitle(activity) {
      this.set('activityTitle', activity);
    },
    
  }
});
