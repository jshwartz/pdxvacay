import Ember from 'ember';

export default Ember.Controller.extend({
  catagory: null,
  rating: null,
  catagories: [{id: 1, title: 'Outdoors'}, {id: 2, title: 'Food & Cafes'}, {id: 3, title: 'Breweries'}],
  ratings: [{id: 1, rating: 1}, {id: 2, rating: 2}, {id: 3, rating: 3}, {id: 4, rating: 4}, {id: 5, rating: 5}],
  zone: null,
  zones: [{id: 1, zone: 'Portland'}, {id: 2, zone: 'Hood-River'}],
  duration: null,
  durations: [{id: 1, duration: '1 Hour'}, {id: 2, duration: '2 Hours'}],
  price: null,
  prices: [{id: 1, price: 1}, {id: 2, price: 2}, {id: 3, price: 3}, {id: 4, price: 4}, {id: 5, price: 5}],



  actions: {
    updateCatagory(newOption){
      this.set('catagory', newOption.title);
    },
    updateRating(newOption){
      this.set('rating', newOption.rating);
    },
    updateZone(newOption){
      this.set('zone', newOption.zone);
    },
    updateDuration(newOption){
      this.set('duration', newOption.duration);
    },
    updatePrice(newOption){
      this.set('price', newOption.price);
    },

  },

});
