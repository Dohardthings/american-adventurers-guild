import Ember from 'ember';

export default Ember.Controller.extend({
  saveUser(user, data) {
    user.setProperties(data);

  debugger;
    user.save({
      include: 'roles'
    });
  }
});
