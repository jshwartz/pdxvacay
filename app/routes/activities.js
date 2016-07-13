import Ember from 'ember';
import ResetScrollPositionMixin from '../mixins/reset-scroll-position';


export default Ember.Route.extend(ResetScrollPositionMixin, {
  model: function() {
    return this.store.findAll('activity');
  },
});
