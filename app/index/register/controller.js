import Ember from 'ember';

export default Ember.Controller.extend({
  newUser(attrs) {
    const member = this.store.createRecord(`endUser`, attrs);

    member.save().then(() => {
      this.transitionToRoute(`index`);
    });
  },
});
