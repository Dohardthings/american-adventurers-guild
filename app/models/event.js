import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasOne } from 'ember-data/relationships';

export default Model.extend({
  name: attr(),
  type: attr(),
  cost: attr(`number`),
  etc: attr(),
  active: attr(`boolean`, { defaultValue: true }),
  description: attr(),
  searchArea: attr(),
  prize: hasOne(`prize`),
});
