import Ember from 'ember';

export default Ember.Controller.extend({
  editAddressToggle: false,
  actions: {
    editAddress() {
      this.set('editAddressToggle', true);
    },
    editAddressCancel() {
      this.set('editAddressToggle', false);
    },
    updateActivity() {
      this.set('editAddressToggle', false);
      return true;
    },
  }
});
