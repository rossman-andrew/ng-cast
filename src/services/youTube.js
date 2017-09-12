angular.module('video-player')
.service('youTube', function($http, $window) {
  this.search = function(query, callback) {
    $http.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: $window.YOUTUBE_API_KEY,
        q: query,
        maxResults: 5,
        part: 'snippet',
        type: 'video',
        videoEmbeddable: true
      } 
    })
    .then(function({data}) {
      if (callback) {
        callback(data.items);
      }  
    }, function errorCallback(response) {
      console.log('Error', response);
    });
  };
  
  // TODO
  // $http({
  //   method: 'GET',
  //   url: 'https://www.googleapis.com/youtube/v3/search',
  //   params: {
  //     query: null,
  //     maxResults: 5,
  //     key: YOUTUBE_API_KEY,
  //     videoEmbeddable: true
  //   }  
  // }).then(function successCallback(response) {
    
  // }, function errorCallback(response) {
    
  // });
});
