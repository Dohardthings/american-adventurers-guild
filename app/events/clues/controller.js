import Ember from 'ember';

export default Ember.Controller.extend({
  delete(clue) {
    if (confirm(`you sure brah?`)) {
      clue.destroyRecord();
    }
  },
});
