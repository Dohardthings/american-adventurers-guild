import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(`session`),

  emailValidation: {
    errorMessage: `Please provide email in a valid format`,
    isError(inputValue) {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      return !emailPattern.test(inputValue);
    },
  },

  login({ email, password }) {
    this.get(`session`).authenticate(`authenticator:application`, email, password)
      .then(() => {
        this.transitionToRoute(`events`);
      })
      .catch((reason) => {
        console.log(reason);
        window.alert(`Your email or password did not match our records. Please try again`);
      });
  },

});
