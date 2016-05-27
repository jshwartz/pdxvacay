import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('activity');
  },

  actions: {
    createActivity: function() {
      var controller = this.get('controller');

      var address = this.store.createRecord('address', controller.getProperties('address1', 'city', 'state', 'zip'));
      var activity = this.store.createRecord('activity', controller.getProperties('title', 'catagory', 'rating', 'tileDetails', 'zone', 'duration', 'price', 'description'));
      address.save().then(function() {
        address.set('activity', activity);
        activity.set('address', address);
        address.save();
        activity.save();

      });
      this.transitionTo('admin.activities.activity.meta', activity );
    },
    deleteActivity: function(activity) {
      var controller = this.get('controller'),
          addressId = activity.get('address').get('id'),

          confirmDelete = window.confirm("Yo, you sure about this??");
      if (confirmDelete) {
        controller.store.findRecord('address', addressId).then(function(address) {
          address.destroyRecord();
          activity.destroyRecord();
        });

      }
    },
  }

});
