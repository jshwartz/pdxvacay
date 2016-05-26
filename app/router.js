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
      this.route('activity', { path: ':id' }, function() {
        this.route('edit');
        this.route('meta');
        this.route('address');
        this.route('description');
        this.route('images');
      });
      this.route('list');
    });
  });
});

export default Router;
