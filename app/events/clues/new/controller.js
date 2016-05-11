import Ember from 'ember';

export default Ember.Controller.extend({
  saveClue(formValues) {
    const clue = this.store.createRecord(`clue`, formValues);

    clue.save().then(() => {
      this.transitionToRoute(`events.clues`);
    });
  },
});
