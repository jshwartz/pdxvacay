import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('list', params.id);
  },
  actions: {
    createListItem: function(item) {
      var controller = this.get('controller'),
          model = controller.get('model');
      model.get('activities').pushObject(item);
      model.save();
    },
    removeItem: function(item) {
      var controller = this.get('controller'),
          model = controller.get('model');
      model.get('activities').removeObject(item);
      model.save();
    },
    destroyList: function() {
      var controller = this.get('controller'),
          model = controller.get('model');
      model.destroyRecord();

    },

  }
});
