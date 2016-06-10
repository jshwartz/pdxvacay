import Ember from 'ember';

export default Ember.Component.extend({

  price3: Ember.computed('price', function() {
    var price = this.get('price');
    if (price === 3) {
      return true;
    } else {
      return false;
    }
  }),
  price2: Ember.computed('price', function() {
    var price = this.get('price');
    if (price === 2) {
      return true;
    } else {
      return false;
    }
  }),
  price1: Ember.computed('price', function() {
    var price = this.get('price');
    if (price === 1 || price === null) {
      return true;
    } else {
      return false;
    }
  }),
});
