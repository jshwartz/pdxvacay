import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('activities', function() {
    this.route('activity', { path: ':id' });
  });
  this.route('admin', function() {
    this.route('activities', function() {
      this.route('new');
      this.route('activity', { path: 'details/:id' }, function() {
        this.route('edit');
      });
    });
  });
});

export default Router;
