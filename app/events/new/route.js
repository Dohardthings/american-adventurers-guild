import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      name: ``,
      type: ``,
      cost: ``,
      etc: ``,
      active: ``,
      description: ``,
      searchArea: ``,
    };
  },
});
