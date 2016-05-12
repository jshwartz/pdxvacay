import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('activity', params.id);
  },
  renderTemplate: function() {
    this.render('activities/activity', { into: 'activities' });
}
});
