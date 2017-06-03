var searchYouTube = (searchVal, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    dataType: 'json',
    type: 'GET',
    data: {
      key: YOUTUBE_API_KEY,
      q: searchVal,
      part: 'snippet',
      maxResults: 5
    },
    videoEmbeddable: 'true',
    success: function(data) {
      callback(data.items);
      console.log('YouTube: Recieved message');
    },
    error: function (data) {
      console.error('YouTube: Failed to get message');
    }
  });
};

window.searchYouTube = searchYouTube;
