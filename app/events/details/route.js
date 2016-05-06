import Ember from 'ember';

export default Ember.Route.extend({
  model({ event_id }) {
    return this.store.findRecord(`event`, event_id);
  },
});
