import Ember from 'ember';

export default Ember.Controller.extend({
  toggleAvail() {
    // this.model.events.set(`available`, false);
    // this.model.set(`inProgress`, false);
    // console.log(this.model.available);
    console.log(this.model.date);
    // console.log(this.model.inProgress);
    // this.model.save().then(() => {
    //   this.transitionToRoute(`adminevents.purchases`);
    // });
  },
});
