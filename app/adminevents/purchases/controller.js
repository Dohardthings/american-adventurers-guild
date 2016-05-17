import Ember from 'ember';

export default Ember.Controller.extend({
  toggleAvail(purchase) {
    purchase.toggleProperty(`inProgress`);
    purchase.save();
  },
});
