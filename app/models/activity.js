import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  title:  attr('string'),
  catagory: attr('string'),
  ranking: attr('number', { defaultValue: 1} ),
  tileDetails: attr('string'),
  zone: attr('string'),
  duration: attr('string'),
  price: attr('number'),
  description: attr('string'),
  
});
