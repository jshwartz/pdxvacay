import Ember from 'ember';
import ResetScrollPositionMixin from '../../mixins/reset-scroll-position';


export default Ember.Route.extend(ResetScrollPositionMixin, {
  model: function(params) {
    return this.store.findRecord('activity', params.id);
  },
  renderTemplate: function() {
    this.render('activities/activity', { into: 'application' });
}
});
