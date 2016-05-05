import Ember from 'ember';

export default Ember.Controller.extend({
  newUser(attrs) {
    const member = this.store.createRecord(`endUser`, attrs);

    member.save().then(() => {
      this.transitionToRoute(`index`);
    })
    .catch((reason) => {
      console.log(reason);
      window.alert(`Something went wrong. Please try again`);
    });;
  },
});
