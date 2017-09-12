angular.module('video-player')

.component('app', {
  // TODO
  controller: function(youTube) {
    this.videos = null;
    this.currentVid = null;
    this.selectVideo = function(video) {
      //this.currentVid = video;
      this.currentVid = video;
    }.bind(this);
    
    this.youTubeCallback = function(para) {
      this.videos = para;
      this.currentVid = para[0];
    }.bind(this);
    
    this.$onInit = function() {
      youTube.search('football', this.youTubeCallback);   
      // var resolve = function(videos) {
      //   this.currentVid = videos[0];  
      // };
      // var reject = function() {
      //   console.log('FAIL');
      // };
      // console.log('here');
      // var promise = new Promise(function(resolve, reject) {
      // // do a thing, possibly async, then…
      //   youTube.search('football', this.youTubeCallback);   
      //   if (this.videos) {
      //     console.log(this.videos); 
      //     resolve(this.videos);
      //   } else {
      //     reject();
      //   }
      // });
      // promise();
    };
    
   
    
    
      
      
      
     
    //   this.currentVid = this.videos[0];
    // };
    // this.searchResults = function() {};
  },

  templateUrl: 'src/templates/app.html'
});
