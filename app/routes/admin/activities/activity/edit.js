import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function() {
    this.render('admin/activities/activity/edit', { into: 'admin' });
  },

  actions: {
    updateActivity: function() {
      var controller = this.get('controller');

      var address = this.store.createRecord('address', controller.getProperties('address1', 'city', 'state', 'zip'));
      var activity = this.store.createRecord('activity', controller.getProperties('title', 'catagory', 'rating', 'tileDetails', 'zone', 'duration', 'price', 'description'));
      address.save().then(function() {
        address.set('activity', activity);
        activity.set('address', address);
        address.save();
        activity.save();

      });
      this.transitionTo('admin.activities');
    },

  }

});
