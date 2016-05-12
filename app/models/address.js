import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  address1: attr('string'),
  address2: attr('string'),
  city: attr('string'),
  state: attr('string'),
  zip: attr('number'),
  activity: belongsTo('activity', {async: true})

});
