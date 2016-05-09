import Ember from 'ember';

export default Ember.Controller.extend({
  saveClue(event, formStuff) {
    const clue = this.store.createRecord(`clue`, formStuff);
    clue.set(`event`, event);

    clue.save();
  },
});
