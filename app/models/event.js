import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr(),
  type: attr(),
  cost: attr(`number`),
  etc: attr(),

  available: Ember.computed('purchases.@each.inProgress', function() {
    // Look through all purchases... If any are inProgress return true
    return this.get(`purchases`).reduce((available, purchase) => {
      return available && !purchase.get('inProgress');
    }, true);
  }),

  currentPurchase: Ember.computed('purchases.@each.user', function() {
    return this.get(`purchases`).find((purchase) => {
      return purchase.get(`inProgress`);
    })
  }),

  seekingUser: Ember.computed.alias('currentPurchase.endUser'),

  description: attr(),
  searchArea: attr(),
  prize: belongsTo(`prize`),
  clues: hasMany(`clue`),
  purchases: hasMany(`purchase`),
});
