import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  email: attr('string'),
  password: attr('string'),
  username: attr('string'),
  phoneNumber: attr('number'),
  admin: attr('boolean'),

  isAdmin: Ember.computed({
    get() {
      return false;
      const adminRole = this.get(`roles`).any((role) => role.name === `admin`);

      if (adminRole) {
        this.set(`admin`, true);

        return true;
      }

      return false;
    },

    set() {
      this.toggleProperty(`admin`);
    },
  }),

  // roles: hasMany(`role`),
});
