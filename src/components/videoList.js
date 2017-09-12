angular.module('video-player')
.component('videoList', {
  // TODO
  bindings: {
    videos: '<'
  },

  controller: function() {
    this.onClick = function() {};
  },

  templateUrl: 'src/templates/videoList.html'
});
