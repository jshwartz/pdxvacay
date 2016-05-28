import Model from 'ember-data/model';
import Ember from 'ember';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({

  imageUrl: attr(),
  filename: attr(),
  size: attr(),
  ready: attr(),
  width: attr('number'),
  height: attr('number'),
  caption: attr('string'),
  activity: belongsTo('activity'),
  cover: attr('boolean', { defaultValue: false }),



  imageReceived: function (InkBlob) {
    this.set('imageUrl', InkBlob.url);
    this.set('filename', InkBlob.filename);
    this.set('size', Math.round((InkBlob.size / 1024 + 0.00001) * 100) / 100);
  },

  // computed properties to get converted images
  thumbImageUrl: (function () {
  // tack on conversion properties for small image
    var params = {};
    params = this.addWidth(params, 242);
    params = this.addHeight(params, 200);
    return this.buildUrl(this.get('imageUrl'), params);
  }).property('imageUrl'),

  buildUrl: function (originalUrl, params) {
    params.rotate = 'exif';
    params.cache = true;
    return originalUrl + '/convert?' + Ember.$.param(params);
  },

  addWidth: function (params, width) {
   params.w = width;
   return params;
  },

  addHeight: function (params, height) {
   params.h = height;
   return params;
  },

  filestackKey: Ember.computed('imageUrl', function() {
    var imageUrl = this.get('imageUrl');
    return imageUrl.split("/").pop();
  }),

  tileUrl: Ember.computed('filestackKey', function() {
    var filestackKey = this.get('filestackKey');
    return "https://process.filestackapi.com/AF4bKWUVdRImQUEbaWs72z/resize=width:350,height:200,fit:crop/" + filestackKey;
  }),

});
