import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function() {
  this.route(`logout`);

  this.route(`index`, { path: `/` }, function() {
    this.route(`about`);
    this.route(`register`);
    this.route(`login`);

    this.route(`events`, function() {
      this.route(`details`, { path: `/:event_id` }, function() {
        this.route(`clues`);
      });
    });
  });

  this.route(`adminevents`, function() {
    this.route(`new`);
    this.route(`edit`, {
      path: `edit/:id`,
    });
    this.route('purchases');
    this.route(`details`, { path: `/:event_id` }, function() {
      this.route(`clues`);
    });

    this.route(`clues`, function() {
        this.route(`edit`, {
          path: `:id/edit`
        });
    });

    this.route(`prizes`, function() {

      this.route(`edit`, {
        path: `/:id`,
      });
    });
  });

  this.route('is-i-admin');

});

export default Router;
