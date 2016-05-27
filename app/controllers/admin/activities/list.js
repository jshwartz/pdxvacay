import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: {
    sortBy: 'sort',
    searchTerm: 's',
  },
  sortBy: 'titleAsc',
  sortProperties: Ember.computed('sortBy', function() {
    var options = {
      'zoneDesc': 'zone:desc,title:asc',
      'zoneAsc': 'zone:asc,title:asc',
      'catagoryDesc': 'catagory:desc,title:asc',
      'catagoryAsc': 'catagory:asc,title:asc',
      'titleDesc': 'title:desc',
      'titleAsc': 'title:asc',
    };
    return options[this.get('sortBy')].split(',');
  }),
  sortedActivities: Ember.computed.sort('matchingActivities', 'sortProperties'),
  newActivityActive: false,
  title: null,
  searchTerm: '',
  matchingActivities: Ember.computed('model.@each.title', 'searchTerm', function() {
    var searchTerm = this.get('searchTerm').toLowerCase();
    var model = this.get('model');
    return model.filter(function(model) {
      return model.get('title').toLowerCase().indexOf(searchTerm) !== -1;
    });
  }),

  actions: {
    setSortingTitle() {
      var currentSortBy = this.get('sortBy');
      if (currentSortBy === 'titleAsc') {
        this.set('sortBy', 'titleDesc');
      } else {
        this.set('sortBy', 'titleAsc');
      }
    },
    setSortingZone() {
      var currentSortBy = this.get('sortBy');
      if (currentSortBy === 'zoneAsc') {
        this.set('sortBy', 'zoneDesc');
      } else {
        this.set('sortBy', 'zoneAsc');
      }
    },
    setSortingCatagory() {
      var currentSortBy = this.get('sortBy');
      if (currentSortBy === 'catagoryAsc') {
        this.set('sortBy', 'catagoryDesc');
      } else {
        this.set('sortBy', 'catagoryAsc');
      }
    },
    SetNewActivityActive() {
      var newActivityActive = this.get('newActivityActive')
      if (newActivityActive) {
        this.set('newActivityActive', false);
      } else {
        this.set('newActivityActive', true);
      }
    },
  }

});
