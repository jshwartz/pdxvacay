import Ember from 'ember';

export default Ember.Controller.extend({
  catagories: [{id: 1, title: 'Outdoors'}, {id: 2, title: 'Food & Cafes'}, {id: 3, title: 'Breweries'}],
  ratings: [{id: 1, rating: 1}, {id: 2, rating: 2}, {id: 3, rating: 3}, {id: 4, rating: 4}, {id: 5, rating: 5}],
  zones: [{id: 1, zone: 'Portland'}, {id: 2, zone: 'Hood-River'}],
  durations: [{id: 1, duration: '1 Hour'}, {id: 2, duration: '2 Hours'}],
  prices: [{id: 1, price: 1}, {id: 2, price: 2}, {id: 3, price: 3}, {id: 4, price: 4}, {id: 5, price: 5}],


  actions: {
    updateCatagory(newOption){
      this.set('model.catagory', newOption.title);
    },
    updateRating(newOption){
      this.set('model.rating', newOption.rating);
    },
    updateZone(newOption){
      this.set('model.zone', newOption.zone);
    },
    updateDuration(newOption){
      this.set('model.duration', newOption.duration);
    },
    updatePrice(newOption){
      this.set('model.price', newOption.price);
    },

  },

});
