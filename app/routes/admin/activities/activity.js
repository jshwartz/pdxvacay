import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('activity', params.id);
  },

  actions: {

    updateActivity: function() {
      var controller = this.get('controller'),
          model = controller.get('model'),
          addressId = model.get('address').get('id'),
          address = controller.store.peekRecord('address', addressId);
      model.save();
      address.save();
    },
    saveImage: function(newImg) {
      newImg.save();
      var controller = this.get('controller'),
          model = controller.get('model');
      model.save();
    },

  }
});
