angular.module('video-player')

.component('videoPlayer', {
  // TODO
  bindings: {
    currentVid: '<'
  },
  
  controller: function($scope) {
    this.videoSrc = function() {
      return 'https://www.youtube.com/embed/' + this.currentVid.id.videoId;
    };
    
    this.videoTitle = function() {
      return this.currentVid.snippet.title;
    };
    this.videoDescription = function() {
      return this.currentVid.snippet.description;
    };
  },

  templateUrl: 'src/templates/videoPlayer.html'
});
