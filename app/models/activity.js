import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  title:  attr('string'),
  catagory: attr('string'),
  rating: attr('number', { defaultValue: 1} ),
  tileDetails: attr('string'),
  zone: attr('string'),
  duration: attr('string'),
  price: attr('number'),
  description: attr('string'),
  address: belongsTo('address', {async: true}),
  userimages: hasMany('userimage'),

});
