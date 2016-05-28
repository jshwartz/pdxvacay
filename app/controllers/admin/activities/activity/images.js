import Ember from 'ember';

export default Ember.Controller.extend({
  filepicker: Ember.inject.service(),
  errors: [],
  imageOptions: {
    mimetypes: ['image/*'],
    services: ['COMPUTER', 'IMAGE_SEARCH', 'WEBCAM', 'FACEBOOK', 'GMAIL', 'BOX', 'DROPBOX', 'FLICKR', 'PICASA', 'INSTAGRAM']
  },
  textOptions: {
    mimetypes: ['text/plain'],
    services: ['BOX', 'COMPUTER', 'DROPBOX', 'EVERNOTE', 'FTP', 'GITHUB', 'GOOGLE_DRIVE', 'SKYDRIVE', 'WEBDAV', 'GMAIL', 'URL']
  },

  actions: {
    pickWithFilepicker: function() {
      this.set('openPicker',true);
    },
    fileSelected: function(InkBlob){
      var _this = this;
      var newImg;
      var model = this.get('model');

      newImg = this.store.createRecord('userimage', {ready: false, activity: model});
      newImg.imageReceived(InkBlob);
      this.send('saveImage', newImg);
      this.send('onClose');

      this.get('filepicker.promise').then(function(filepicker) {
        filepicker.stat(InkBlob,
          {width: true, height: true},
          function (metadata) {
            newImg.set('width', metadata.width);
            newImg.set('height', metadata.height);
            newImg.set('ready', true);
            newImg.save();

          },
          function (FPError) {
            // unless dialog closed by user
            if (FPError.code !== 101) {
              _this.get('errors').pushObject(FPError.toString());
            }
          }
        );
      });
    },
    onClose: function () {
      this.set('openPicker',false);
    },
    updateImage(img){
      img.save();
    },
    deleteImage(img){
      var blob = {url: img.get('imageUrl')};

      filepicker: this.get('filepicker.promise').then(function(filepicker) {
        filepicker.remove(blob,
          function(metadata) {
          }
        );

      });
      img.destroyRecord();
    },
    updateCover(picked, tileUrl){
      var images = this.get('model.userimages'),
          model = this.get('model');
      images.forEach(function(img) {
        img.set('cover', false);
        img.save();
      });
      picked.set('cover', true);
      picked.save();
      model.set('coverUrl', tileUrl);
      model.save();
    },


  }
});
