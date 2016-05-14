import Ember from 'ember';

export default Ember.Controller.extend({
  saveEvent(event, formValues) {
    event.setProperties(formValues);

    event.save().then(() => {
      this.transitionToRoute(`events`);
    });
  },

  toggle() {
    this.model.toggleProperty(`active`);
    this.transitionToRoute(`events`);
  }
});
