import Ember from 'ember';

export default Ember.Controller.extend({
  color: Ember.computed('model.catagory', function() {
    var catagory = this.get('model.catagory');
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
