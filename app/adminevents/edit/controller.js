import Ember from 'ember';

export default Ember.Controller.extend({
  saveEvent(event, formValues) {
    event.setProperties(formValues);

    event.save().then(() => {
      this.transitionToRoute(`adminevents`);
    });
  },
});
