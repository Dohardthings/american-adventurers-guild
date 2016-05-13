import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  model() {
    return this.store.findRecord(`end-user`, this.get(`session.data.authenticated.user.id`), {
      include: `roles`,
    });
  },
});
