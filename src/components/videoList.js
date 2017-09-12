angular.module('video-player')
.component('videoList', {
  // TODO
  bindings: {
    videos: '<',
    selectVideo: '<'
  },

  controller: function($scope) {
  },

  templateUrl: 'src/templates/videoList.html'
});
