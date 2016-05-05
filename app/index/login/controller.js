import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

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
