import Ember from 'ember';

export default Ember.Controller.extend({
  savePrize(prize, formValues) {
    prize.setProperties(formValues);

    prize.save().then(() => {
      this.transitionToRoute(`events.prizes.index`);
    });
  },
});
