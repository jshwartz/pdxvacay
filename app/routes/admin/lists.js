import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('list');  
  },
  actions: {
    createList: function(title, description) {
      var list = this.store.createRecord('list', {
        title: title,
        description: description,
      });
      list.save();
    }
  }
});
