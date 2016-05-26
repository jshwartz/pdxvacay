import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteActivity: function(activity) {
      var addressId = activity.get('address').get('id'),
          address = this.store.findRecord('address', addressId),
          confirmDelete = window.confirm("Yo, you sure about this??");
      if (confirmDelete) {
        debugger;
        activity.destroyRecord();
        address.destroyRecord();
      }
    },
  }
});
