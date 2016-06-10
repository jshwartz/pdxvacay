import Ember from 'ember';

export default Ember.Component.extend({

  color: Ember.computed('catagory', function() {
    var catagory = this.get('catagory');
    if (catagory === "Inside") {
      return "red";
    } else if (catagory === "Outside") {
      return "green";
    } else if (catagory === "Drinks") {
      return "orange";
    } else if (catagory === "Kids") {
      return "yellow";
    } else if (catagory === "Food") {
      return "blue";
    }

  }),


});
