import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';


export default Model.extend({
  activities: hasMany('activity'),
  title:  attr('string'),
  description: attr('string'),
  sort: attr('string'),
  createdAt: attr('date', {
    defaultValue() { return new Date(); }
  }),

});
