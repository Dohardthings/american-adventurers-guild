import Ember from 'ember';

export default Ember.Controller.extend({
  saveEvent(attr) {
    const event = this.store.createRecord(`event`, attr);

    event.save().then(() => {
      this.transitionToRoute(`adminevents`);
    });
  },
});
