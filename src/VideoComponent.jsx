import React from "react";
import styled from "styled-components";

const VideoWrapper = styled.div`
  width: 100%;
  max-width: 700px; /* Adjust as needed */
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const VideoComponent = ({ videoLink }) => {
  let videoId;

  // Handle both standard and short YouTube URL formats
  if (videoLink.includes("youtu.be")) {
    videoId = videoLink.split("youtu.be/")[1];
  } else if (videoLink.includes("youtube.com")) {
    videoId = videoLink.split("v=")[1]?.split("&")[0];
  }

  if (!videoId) {
    return <p>Invalid YouTube link</p>;
  }

  return (
    <VideoWrapper>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </VideoWrapper>
  );
};

export default VideoComponent;