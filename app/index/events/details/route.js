import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  model() {
    const event = this._super(...arguments);
    const promises = { event };
    const userId = this.get(`session.data.authenticated.user.id`);

    if (userId) {
      promises.user = this.store.findRecord(`end-user`, userId);
    }

    return Ember.RSVP.hash(promises);
  },

  setupController(controller, model) {
    this._super(controller, model.event);

    controller.set(`user`, model.user);
  },
});
