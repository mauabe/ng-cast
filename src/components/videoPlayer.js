angular.module('video-player')

  .component('videoPlayer', {
    bindings: {
      video: '<',
      // videos: '<'
    },
    templateUrl: './src/templates/videoPlayer.html',
    // controller: function() {
    //   console.log('this is the video in video player ', video.snippet.title);
    // }
  });
