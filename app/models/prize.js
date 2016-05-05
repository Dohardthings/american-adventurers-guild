import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  imgUrl: attr(),
  name: attr(),
  description: attr(),
  event: belongsTo(`event`),
});
