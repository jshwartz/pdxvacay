import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('activity', params.id);
  },

  actions: {
    deleteActivity: function(activity) {
      var addressId = activity.get('address').get('id'),
          address = this.store.peekRecord('address', addressId),
          confirmDelete = window.confirm("Yo, you sure about this??");
      if (confirmDelete) {
        address.destroyRecord();
        activity.destroyRecord();
        this.transitionTo('admin.activities');
      }
    }

  }
});
