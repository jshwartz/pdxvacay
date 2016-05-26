import Ember from 'ember';

export default Ember.Controller.extend({
  editDescriptionToggle: false,
  actions: {
    editDescription() {
      this.set('editDescriptionToggle', true);
    },
    editDescriptionCancel() {
      this.set('editDescriptionToggle', false);
    },
    updateActivity() {
      this.set('editDescriptionToggle', false);
      return true;
    },
  }

});
