import React from "react";
import styled from "styled-components";
import PostcardBox from "./Postcard";
import VideoComponent from "./VideoComponent"; // Import the new component

const BigContainer = styled.section`
  width: 100%;
  padding-top: 80px;
  background: linear-gradient(to right, rgb(218, 235, 198), rgb(224, 224, 224));
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding-bottom: 200px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const FlexComponent = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding-bottom: 40px;
`;

const VideoDemoSection = () => {
  return (
    <div id="video-demo">
        <BigContainer id="video-demo">
        <h1>VIDEO DEMO</h1>
        {/* Add the VideoComponent below */}
        <VideoComponent videoLink="https://youtu.be/Wz0HZrkjMa8" />
        </BigContainer>
    </div>
  );
};

export default VideoDemoSection;