import Ember from 'ember';

export default Ember.Controller.extend({
  editMetaToggle: false,
  catagories: [{id: 1, title: 'Outside'}, {id: 2, title: 'Inside'}, {id: 3, title: 'Kids'}, {id: 4, title: 'Food'}, {id: 5, title: 'Drinks'}],
  ratings: [{id: 1, rating: 1}, {id: 2, rating: 2}, {id: 3, rating: 3}, {id: 4, rating: 4}, {id: 5, rating: 5}],
  zones: [{id: 1, zone: 'Portland'}, {id: 2, zone: 'Hood-River'}],
  durations: [{id: 1, duration: '1 Hour'}, {id: 2, duration: '2 Hours'}, {id: 3, duration: '3 Hours'}, {id: 4, duration: '4 Hours'}, {id: 5, duration: 'Half-Day'}, {id: 6, duration: 'Full-Day'}],
  prices: [{id: 1, price: 1}, {id: 2, price: 2}, {id: 3, price: 3}, {id: 4, price: 4}, {id: 5, price: 5}],
  publish: [{id:1, publish: true}, {id:2, publish: false}],


  actions: {
    editMeta() {
      this.set('editMetaToggle', true);
    },
    editMetaCancel() {
      this.set('editMetaToggle', false);
    },
    updateActivity() {
      this.set('editMetaToggle', false);
      return true;
    },
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
    updatePublish(newOption){
      this.set('model.publish', newOption.publish);
    },


  }
});
