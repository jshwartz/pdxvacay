import Ember from 'ember';

export default Ember.Controller.extend({
  catagories: [{id: 1, title: 'Outside'}, {id: 2, title: 'Inside'}, {id: 3, title: 'Kids'}, {id: 4, title: 'Food'}, {id: 5, title: 'Drinks'}],
  ratings: [{id: 1, rating: 1}, {id: 2, rating: 2}, {id: 3, rating: 3}, {id: 4, rating: 4}, {id: 5, rating: 5}],
  zones: [{id: 1, zone: 'Portland'}, {id: 2, zone: 'Hood-River'}],
  durations: [{id: 1, duration: '1 Hour'}, {id: 2, duration: '2 Hours'}],
  prices: [{id: 1, price: 1}, {id: 2, price: 2}, {id: 3, price: 3}, {id: 4, price: 4}, {id: 5, price: 5}],
  isEditing: true,

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
  showTable: true,


  actions: {
    updateCatagory(newOption){
      this.set('model.catagory', newOption.title);
    },
    updateRating(newOption){
      this.set('model.rating', newOption.rating);
    },
    updateZone(newOption){
      this.set('model.zone', newOption.zone);
    },
    updateDuration(newOption){
      this.set('model.duration', newOption.duration);
    },
    updatePrice(newOption){
      this.set('model.price', newOption.price);
    },
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
            debugger;
          }
        );

      });
      img.destroyRecord();
    },

  },

});
