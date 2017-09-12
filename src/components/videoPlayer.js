angular.module('video-player')

.component('videoPlayer', {
  // TODO
  bindings: {
    currentVid: '<'
  },
  
  controller: function() {
    this.videoSrc = function() {
      return 'https://www.youtube.com/embed/' + this.currentVid.id.videoId;
    };
  },

  templateUrl: 'src/templates/videoPlayer.html'
});
