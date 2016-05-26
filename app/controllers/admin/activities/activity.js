import Ember from 'ember';

export default Ember.Controller.extend({
  metaTabClass: '',
  addressTabClass: '',
  descriptionTabClass: '',
  imagesTabClass: '',
  

  actions: {
    toggleTab(tab) {
      this.set('metaTabClass', '');
      this.set('addressTabClass', '');
      this.set('descriptionTabClass', '');
      this.set('imagesTabClass', '');

      if (tab === 'meta') {
        this.set('metaTabClass', 'active');
      } else if (tab === 'address') {
        this.set('addressTabClass', 'active');
      } else if (tab === 'description') {
        this.set('descriptionTabClass', 'active');
      } else if (tab === 'images') {
        this.set('imagesTabClass', 'active');
      }
    },

  }
});
