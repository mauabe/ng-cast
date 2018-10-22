angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      video: '<',
      addVid: '<'
    },
    templateUrl: './src/templates/videoListEntry.html',
    // controller: function() {
      
    // },
  });
