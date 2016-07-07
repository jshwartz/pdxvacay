import Ember from 'ember';

export default Ember.Controller.extend({
  newListOpen: false,
  newtitle: '',
  newdescription: '',

  actions: {
    newListOpen() {
      this.set('newListOpen', true);
    },
    newListClose() {
      this.set('newtitle', '');
      this.set('newdescription', '');
    },
    submit() {
      var title = this.get('newtitle');
      var description = this.get('newdescription');
      this.set('newListOpen', false);
      this.send('createList', title, description);
      this.set('newtitle', '');
      this.set('newdescription', '');
    }
  }
});
