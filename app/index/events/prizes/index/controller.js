import Ember from 'ember';

export default Ember.Controller.extend({
  delete(prize) {
    if (confirm(`Do you really want to delete this?`)) {
      prize.destroyRecord();
    }
  },
});
