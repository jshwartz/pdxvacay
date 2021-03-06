import Ember from 'ember';

export default Ember.Component.extend({
  isEditing: false,

  actions: {
    toggleEditOn(){
      this.set('isEditing', true);
    },
    cancelUpdates(){
      this.set('isEditing', false);
    },
    saveUpdates(){
      var image = this.get('picked');
      this.set('isEditing', false);
      this.sendAction('update', image);
    },
    delete(){
      var image = this.get('picked');
      this.sendAction('delete', image);
    },
    updateCover() {
      var picked = this.get('picked'),
          tileUrl = this.get('picked.tileUrl'),
          jumboUrl = this.get('picked.jumboUrl');
      this.sendAction('updateCover', picked, tileUrl, jumboUrl);
    }
  }
});
