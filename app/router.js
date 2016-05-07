import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route(`logout`);

  this.route(`index`, { path: `/` }, function() {
    this.route(`register`);
    this.route(`login`);
    this.route('about');
    this.route('how');
  });
  this.route('events', function() {
    this.route('new');
    this.route('details', { path: `/:event_id` }, function() {
      this.route('clues');
    });
  });
});

export default Router;
