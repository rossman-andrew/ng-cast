angular.module('video-player')

.component('search', {
  // TODO
  bindings: {
    onSearch: '<'
  },
  
  controller: function() {
    this.inputVal;
  },
  
  
  
  templateUrl: 'src/templates/search.html'
});
