import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FadeInText from "./FadeInText";

// Styled Components for the Slider
const SliderSection = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden; 
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  filter: blur(4px);
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 1.5s ease-in-out; /* Smooth fade effect */
`;

const OverlayText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: rgb(66, 0, 0); 
  font-family: 'Urbanist', sans-serif; 
  font-size: 4rem; 
  font-weight: bold;
  letter-spacing: 2px;
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.7);
`;

// React Component
const HomeSlider = () => {
  const images = [
    "/images/ceda.png", 
    "/images/sinos.png",
    "images/input_sinogram.png"
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length); // Cycle through images
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [images.length]);

  return (
    <SliderSection>
      {images.map((image, index) => (
        <Slide key={index} image={image} active={index === activeIndex} />
      ))}
      <FadeInText></FadeInText>
    </SliderSection>
  );
};

export default HomeSlider;

