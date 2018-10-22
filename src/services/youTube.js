angular.module('video-player')
.service('youTube', function($http){
  this.getYoutubeData = (collection, searchText) => {
    $http.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: window.YOUTUBE_API_KEY,
        type: 'video',
        maxResults: '5',
        part: 'snippet',
        q: searchText
      }
    }).then(params => {
      console.log('we got your ', collection);
      collection.videos = params.data.items;
    }, () => {
      console.error('you screwed up');
    })
  }
});