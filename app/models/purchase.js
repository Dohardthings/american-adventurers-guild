
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  date: attr(),
  inProgress: attr('boolean', { defaultValue: true }),
  event: belongsTo('event'),
  endUser: belongsTo('end-user'),
});
