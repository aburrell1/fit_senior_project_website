import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const TextContainer = styled.div`
  opacity: 0; 
  transform: translateY(0px); 
  transition: opacity 0.8s ease-out, transform 0.8s ease-out; 

  &.visible {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(0%, -50%); 
    text-align: center;
    color: rgb(173, 0, 0); 
    font-family: 'Urbanist', sans-serif; 
    font-size: 4rem; 
    font-weight: bold;
    letter-spacing: 2px;
    text-shadow: 0 4px 6px rgba(0, 0, 0, 0.7); 
    opacity: 1; /* Fully visible */
    text-shadow: -1px -1px 0 black, 

               1px -1px 0 black, 
               -1px 1px 0 black, 
               1px 1px 0 black;
  }
`;

const SubtextContainer = styled.div`
  opacity: 0; 
  transform: translateY(0px); 
  transition: opacity 0.8s ease-out, transform 0.8s ease-out; 

  &.visible {
    margin: 50px;
    position: absolute;
    top: 60%;
    left: 5%;
    transform: translate(0%, -50%); 
    text-align: center;
    color: rgb(173, 0, 0); 
    font-family: 'Urbanist', sans-serif; 
    font-size: 2rem; 
    font-weight: bold;
    letter-spacing: 2px;
    text-shadow: 0 4px 6px rgba(0, 0, 0, 0.7); 
    opacity: 1; /* Fully visible */
    text-shadow: -1px -1px 0 black, 

               1px -1px 0 black, 
               -1px 1px 0 black, 
               1px 1px 0 black;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  color:rgb(173, 0, 0);
  text-shadow: -1px -1px 0 black, 

               1px -1px 0 black, 
               -1px 1px 0 black, 
               1px 1px 0 black; 
`;

const FadeInText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            textRef.current.classList.add("visible"); // Apply the "visible" class
          }
        });
      },
      {
        threshold: 1.0, // Trigger when fully visible
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <>
    <TextContainer ref={textRef}>
        TOMOGRAPHIC MEDICAL IMAGE RECONSTRUCTION WITH DEEP LEARNING
    </TextContainer>
    </>
  );
};

export default FadeInText;

