import Model from 'ember-data/model';
import Ember from 'ember';

export default Model.extend({
  imageReceived: function (InkBlob) {
    this.set('imageUrl', InkBlob.url);
    this.set('filename', InkBlob.filename);
    this.set('size', Math.round((InkBlob.size / 1024 + 0.00001) * 100) / 100);
  },

  sizeReceived: function (metadata) {
    this.set('width', metadata.width);
    this.set('height', metadata.height);
  },

  // computed properties to get converted images
  thumbImageUrl: (function () {
  // tack on conversion properties for small image
    var params = {};
    params = this.addWidth(params, 50);
    params = this.addHeight(params, 50);
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

});
