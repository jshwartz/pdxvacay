import Ember from 'ember';

export default Ember.Component.extend({

  color: Ember.computed('catagory', function() {
    var catagory = this.get('catagory');
    if (catagory === "Food & Cafes") {
      return "purple";
    } else if (catagory === "Outdoors") {
      return "green";
    } else if (catagory === "Breweries") {
      return "brown"
    }

  }),


});
