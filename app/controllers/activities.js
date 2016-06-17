import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: {
    sortBy: 'sort',
    searchTerm: 's',
    filterCatagory: 'catagory',
    filterLocation: 'location',
  },
  sortBy: 'ratingDesc',
  sortProperties: Ember.computed('sortBy', function() {
    var options = {
      'ratingDesc': 'rating:desc,title:asc',
      'ratingAsc': 'rating:asc,title:asc',
      'priceDesc': 'price:desc,price:asc',
      'priceAsc': 'price:asc,price:asc',
      'catagoryDesc': 'catagory:desc,title:asc',
      'catagoryAsc': 'catagory:asc,title:asc',
      'titleDesc': 'title:desc',
      'titleAsc': 'title:asc',
    };
    return options[this.get('sortBy')].split(',');
  }),
  sortedActivities: Ember.computed.sort('matchingActivities', 'sortProperties'),
  filterCatagory: '',
  filterLocation: '',
  buttonLocation: Ember.computed('filterLocation', function() {
    var filterLocation = this.get('filterLocation');
    if (filterLocation === '') {
      return 'Everywhere';
    } else {
      return filterLocation;
    }
  }),
  buttonSort: Ember.computed('sortBy', function() {
    var sortBy = this.get('sortBy');
    if (sortBy === 'titleAsc' || sortBy === 'titleDesc') {
      return 'Title';
    } else if (sortBy === 'ratingAsc' || sortBy === 'ratingDesc') {
      return 'Rating';
    } else if (sortBy === 'catagoryAsc' || sortBy === 'catagoryDesc') {
      return 'Catagory';
    } else if (sortBy === 'priceAsc' || sortBy === 'priceDesc') {
      return 'Price';
    }
  }),
  activeCatagory: Ember.computed('filterCatagory', function() {
    var filterCatagory = this.get('filterCatagory');
    if (filterCatagory === '') {
      return 'All';
    } else if (filterCatagory === 'Outside') {
      return '<span class="green-text glyphicon glyphicon glyphicon-tree-conifer"></span>';
    } else if (filterCatagory === 'Inside') {
      return '<span class="red-text glyphicon glyphicon glyphicon-home"></span>';
    } else if (filterCatagory === 'Kids') {
      return '<span class="yellow-text glyphicon glyphicon glyphicon-ice-lolly-tasted"></span>';
    } else if (filterCatagory === 'Food') {
      return '<span class="blue-text glyphicon glyphicon-cutlery"></span>';
    } else if (filterCatagory === 'Drinks') {
      return '<span class="orange-text glyphicon glyphicon-glass"></span>';
    }
  }),
  catagoryTable: true,
  locationTable: true,
  sortTable: true,
  sortTriangle: Ember.computed('sortBy', function() {
    var sortBy = this.get('sortBy');
    if (sortBy === 'titleDesc' || sortBy === 'priceDesc' || sortBy === 'catagoryDesc' || sortBy === 'ratingDesc' ) {
      return '<span class="glyphicon glyphicon-triangle-bottom sort-triangle" aria-hidden="true">';
    } else {
      return '<span class="glyphicon glyphicon-triangle-top sort-triangle" aria-hidden="true">';
    }
  }),



  matchingActivities: function() {
    var filterLocation = this.get('filterLocation');
    var filterCatagory = this.get('filterCatagory');
    var model = this.get('model');
    return model.filter(function(model) {
      return model.get('zone').indexOf(filterLocation) !== -1;
    }).filter(function(model) {
      return model.get('catagory').indexOf(filterCatagory) !== -1;
    });
  }.property('filterLocation', 'filterCatagory'),

  actions: {
    sortToggle() {
      var currentSortBy = this.get('sortBy');
      if (currentSortBy === 'titleAsc') {
        this.set('sortBy', 'titleDesc');
      } else if (currentSortBy === 'titleDesc') {
        this.set('sortBy', 'titleAsc');
      } else if (currentSortBy === 'ratingAsc') {
        this.set('sortBy', 'ratingDesc');
      } else if (currentSortBy === 'ratingDesc') {
        this.set('sortBy', 'ratingAsc');
      } else if (currentSortBy === 'catagoryAsc') {
        this.set('sortBy', 'catagoryDesc');
      } else if (currentSortBy === 'catagoryDesc') {
        this.set('sortBy', 'catagoryAsc');
      } else if (currentSortBy === 'priceAsc') {
        this.set('sortBy', 'priceDesc');
      } else if (currentSortBy === 'priceDesc') {
        this.set('sortBy', 'priceAsc');
      }
    },
    setSortingTitle() {
      var currentSortBy = this.get('sortBy');
      if (currentSortBy === 'titleAsc') {
        this.set('sortBy', 'titleDesc');
      } else {
        this.set('sortBy', 'titleAsc');
      }
    },
    setSortingRating() {
      var currentSortBy = this.get('sortBy');
      if (currentSortBy === 'ratingAsc') {
        this.set('sortBy', 'ratingDesc');
      } else {
        this.set('sortBy', 'ratingAsc');
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
    setSortingPrice() {
      var currentSortBy = this.get('sortBy');
      if (currentSortBy === 'priceAsc') {
        this.set('sortBy', 'priceDesc');
      } else {
        this.set('sortBy', 'priceAsc');
      }
    },
    setFilterCatagory(filterItem) {
      this.set('filterCatagory', filterItem);
    },
    setFilterLocation(filterItem) {
      this.set('filterLocation', filterItem);
    },
    toggleCatagoryTable() {
      this.toggleProperty('catagoryTable');
    },
    toggleLocationTable() {
      this.toggleProperty('locationTable');
    },
    toggleSortTable() {
      this.toggleProperty('sortTable');
    },
  }

});
