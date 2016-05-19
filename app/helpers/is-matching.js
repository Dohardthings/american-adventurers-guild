import Ember from 'ember';

export function isMatching([a, b]/*, hash*/) {
  return a === b;
}

export default Ember.Helper.helper(isMatching);
