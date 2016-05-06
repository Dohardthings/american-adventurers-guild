import Ember from 'ember';

export default Ember.Controller.extend({
  savePrize(event, formStuff) {
    const prize = this.store.createRecord(`prize`, formStuff);
    prize.set(`event`, event);

    prize.save();
  },
});
