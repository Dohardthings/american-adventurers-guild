import Ember from 'ember';

export default Ember.Controller.extend({
  delete(clue) {
    if (confirm(`Do you really want to delete this?`)) {
      clue.destroyRecord();
    }
  },
});
