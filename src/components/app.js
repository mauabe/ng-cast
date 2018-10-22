angular.module('video-player')
  .component('app', {
    templateUrl: './src/templates/app.html',
    // bindings: {
    //   search: '<'
    // },
    controller: function (youTube) {
      this.search = (query) => {
        console.log('hi drew ', this.videos);
        // console.log(youTube.getYoutubeData(query));
        youTube.getYoutubeData(this, query)
      }
      this.videos = exampleVideoData;
      this.video = this.videos[0];
      this.addVid = (vidId) => {
        this.video = vidId;
      };
    }
  });