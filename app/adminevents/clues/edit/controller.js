import Ember from 'ember';

export default Ember.Controller.extend({
  saveClue(clue, formValues) {
    clue.setProperties(formValues);

    clue.save().then(() => {
      this.transitionToRoute(`adminevents.clues.index`);
    });
  },
});
