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
    
    this.videoTitle = function() {
      return this.currentVid.snippet.title;
    };
    this.videoDescription = function() {
      return this.currentVid.snippet.description;
    };
   // console.log('videoPlayer', this.videoSrc, this.videoTitle, this.videoDescription);
  },

  templateUrl: 'src/templates/videoPlayer.html'
});
