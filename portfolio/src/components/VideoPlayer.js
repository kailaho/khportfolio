
import React from 'react';
import YouTube from 'react-youtube';

const YouTubePlayer = () => {
    const videoId = 'iGgZd-nKrZQ'; // Replace 'your-video-id' with the actual ID of the YouTube video

    const opts = {
        playerVars: {
          autoplay: 1,
          modestbranding: 1,
          rel: 0, // Disable related videos
        },
      };
  
    return (
      <div className="video-container">
        <YouTube videoId={videoId} opts={opts} width={'800'} height={'450'}/>
      </div>
    );
  }
  
  export default YouTubePlayer;
