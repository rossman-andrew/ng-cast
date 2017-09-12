angular.module('video-player')

.component('videoListEntry', {
  // TODO
  bindings: {
    video: '<',
    selectVideo: '<'
  },

  controller: function($scope) {
    this.$onInit = function() {
      this.clickMe = function() {
        this.selectVideo(this.video);
      };
    };
    // this.clickMe = function() {
    //   this.selectVideo(this.video);
    // };
    
    
  },

  templateUrl: 'src/templates/videoListEntry.html'
});
