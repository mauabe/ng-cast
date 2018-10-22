angular.module('video-player')
  .component('videoList', {
    bindings: {
      videos: '<',
      addVid: '<'
    },
    // controller: function() {
    //   videos = videos;
    // },
    templateUrl: './src/templates/videoList.html'
  });
