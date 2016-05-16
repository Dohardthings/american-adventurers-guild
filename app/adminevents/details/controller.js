import Ember from 'ember';

export default Ember.Controller.extend({
  savePrize(event, formStuff) {
    const prize = this.store.createRecord(`prize`, formStuff);
    prize.set(`event`, event);

    prize.save();
  },

  buyThis() {
    if (window.confirm(`Are you sure you want to purchase this?`)) {
      this.model.toggleProperty(`active`);
      this.model.save().then(() => {
        this.transitionToRoute(`adminevents.details.clues`, this.model);
      });
    }
  },
});
