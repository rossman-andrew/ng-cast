angular.module('video-player')

.component('app', {
  // TODO
  controller: function($scope) {
    this.videos = exampleVideoData;
    this.currentVid = this.videos[0];
    this.selectVideo = function(video) {
      //this.currentVid = video;
      this.currentVid = video;
      console.log(this.currentVid);
    }.bind(this);
    
    this.searchResults = function() {};
  },

  templateUrl: 'src/templates/app.html'
});
