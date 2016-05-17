import Ember from 'ember';

export default Ember.Controller.extend({
  savePrize(event, formStuff) {
    const prize = this.store.createRecord(`prize`, formStuff);
    prize.set(`event`, event);

    prize.save();
  },

  buyThis() {
    if (window.confirm(`Are you sure you want to purchase this?`)) {
      const purchase = this.store.createRecord(`purchase`, { event: this.model });

      purchase.save().then(() => {
        this.transitionToRoute(`events.details.clues`, this.model);
      });
    }
  },
});
