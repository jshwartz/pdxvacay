import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: {
    sortItemsBy: 'sort',
    searchTerm: 's',
  },
  sortItemsBy: 'titleAsc',
  sortProperties: Ember.computed('sortItemsBy', function() {
    var options = {
      'ratingDesc': 'rating:desc,title:asc',
      'ratingAsc': 'rating:asc,title:asc',
      'titleDesc': 'title:desc',
      'titleAsc': 'title:asc',
    };
    return options[this.get('sortItemsBy')].split(',');
  }),
  sortedListItems: Ember.computed.sort('model.activities', 'sortProperties'),



  activities: Ember.computed(function() {
    return this.store.findAll('activity');
  }),
  outsideActivities: Ember.computed.filterBy('activities', 'catagory', 'Outside'),
  insideActivities: Ember.computed.filterBy('activities', 'catagory', 'Inside'),
  foodActivities: Ember.computed.filterBy('activities', 'catagory', 'Food'),
  drinkActivities: Ember.computed.filterBy('activities', 'catagory', 'Drinks'),
  kidsActivities: Ember.computed.filterBy('activities', 'catagory', 'Kids'),
  sortBy: ['title:asc'],
  sortedActivities: Ember.computed.sort('outsideActivities', 'sortBy'),
  filterCatagory: 'Outside',
  filterLocation: '',
  openModal: false,
  newItem: null,
  editListOpen: false,
  tempTitle: '',
  tempDescription: '',

  actions: {
    openModal() {
      this.set('openModal', true);
    },
    closeModal() {
      this.set('newItem', null);
    },
    setNewItem(item) {
      this.set('openModal', false);
      this.set('newItem', item);
      this.send('createListItem', item);
    },
    editListClose: function() {
      var tempTitle = this.get('tempTitle'),
          tempDescription = this.get('tempDescription');
      this.set('model.title', tempTitle);
      this.set('model.description', tempDescription);
      this.set('tempTitle', '');
      this.set('tempDescription', '');

    },
    submitEdit() {
      this.set('editListOpen', false);
      this.get('model').save();
      this.set('tempTitle', '');
      this.set('tempDescription', '');

    },
    editList() {
      this.set('editListOpen', true);
      var title = this.get('model.title'),
          description = this.get('model.description');
      this.set('tempTitle', title);
      this.set('tempDescription', description);
    },
    setSortingTitle() {
      var currentSortBy = this.get('sortItemsBy'),
          model = this.get('model');
      if (currentSortBy === 'titleAsc') {
        this.set('sortItemsBy', 'titleDesc');
        this.set('model.sort', 'titleDesc');
        model.save();
      } else {
        this.set('sortItemsBy', 'titleAsc');
        this.set('model.sort', 'titleAsc');
        model.save();
      }
    },
    setSortingRating() {
      var currentSortBy = this.get('sortItemsBy'),
          model = this.get('model');
      if (currentSortBy === 'ratingDesc') {
        this.set('sortItemsBy', 'ratingAsc');
        this.set('model.sort', 'ratingAsc');
        model.save();
      } else {
        this.set('sortItemsBy', 'ratingDesc');
        this.set('model.sort', 'ratingDesc');
        model.save();
      }
    },
  }



});
