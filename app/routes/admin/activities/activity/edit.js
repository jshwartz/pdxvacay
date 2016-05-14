import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.modelFor('admin.activities.activity');
  },
  renderTemplate: function() {
    this.render('admin/activities/activity/edit', { into: 'admin' });
  },

  actions: {
    updateActivity: function() {
      var controller = this.get('controller'),
          model = controller.get('model'),
          addressId = model.get('address').get('id'),
          address = controller.store.peekRecord('address', addressId);
      model.save();
      address.save();
      this.transitionTo('admin.activities');
    },
    willTransition: function(transition) {
      var controller = this.get('controller'),
          leave = window.confirm("You have unsaved changes. Are you sure you want to leave?");
      if (leave) {  
      } else {
        transition.abort();
      }
    },

  }

});
