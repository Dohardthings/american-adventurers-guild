import Ember from 'ember';

export default Ember.Controller.extend({

  emailValidation: {
    errorMessage: `Please provide email in a valid format`,
    isError(inputValue) {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      return !emailPattern.test(inputValue);
    },
  },

  newUser(attrs) {
    const member = this.store.createRecord(`endUser`, attrs);

    member.save().then(() => {
      this.transitionToRoute(`index`);
    })
    .catch((reason) => {
      console.log(reason);
      window.alert(`Something went wrong. Please try again`);
    });
  },
});
