angular.module('video-player')

.component('app', {
  // TODO
  controller: function() {
    this.selectVideo = function() {};
    this.searchResults = function() {};
    this.videos = exampleVideoData;
    this.currentVid = exampleVideoData[0];
  },

  templateUrl: 'src/templates/app.html'
});
