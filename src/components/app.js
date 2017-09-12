angular.module('video-player')

.component('app', {
  // TODO
  controller: function(youTube) {
    this.videos = null;
    this.currentVid = null;
    
    this.selectVideo = function(video) {
      this.currentVid = video;
    }.bind(this);
    
    this.youTubeCallback = function(para) {
      this.videos = para;
      this.currentVid = para[0];
    }.bind(this);
    
    this.$onInit = function() {
      youTube.search('football', this.youTubeCallback);   
    };
    
    this.onSearch = function(searchQuery) {
      youTube.search(searchQuery, this.youTubeCallback);
    }.bind(this);
  },

  templateUrl: 'src/templates/app.html'
});
