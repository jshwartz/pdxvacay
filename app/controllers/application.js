import Ember from 'ember';


export default Ember.Controller.extend({
  expandNav: false,
  actions: {
    toggleNav: function() {
      this.toggleProperty('expandNav');
    }
  }
});
