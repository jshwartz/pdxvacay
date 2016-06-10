import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'div',
    classNames: ['rating-panel'],

    rating:     0,
    maxRating:  5,
    item:       null,

    fullClassNames: 'glyphicon glyphicon-star',
    emptyClassNames: 'glyphicon glyphicon-star-empty',

    stars: Ember.computed('rating', 'maxRating', function() {
      var rating = Math.round(this.get('rating'));
      var fullStars = this.starRange(1, rating, 'full');
      var emptyStars = this.starRange(rating + 1, this.get('maxRating'), 'empty');
      return fullStars.concat(emptyStars);
    }),

    starRange: function(start, end, type) {
      var starsData = [];
      for (var i = start; i <= end; i++) {
        starsData.push({ rating: i, full: type === 'full' });
      }
      return starsData;
    },

  });
