import React from "react";
import styled from "styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PostcardBox from "./Postcard";

// Styled Components for Big Section
const BigContainer = styled.section`
  width: 100%;
  padding-top: 80px;
  background: linear-gradient(to right,rgb(255, 252, 227),rgb(224, 224, 224));
//   background-color: #f4f4f9; 
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding-bottom: 200px;
//   height: 100vh;
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
  width: 70%; /* Match article section width */
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding-bottom: 40px;
`;

const FlexTwoComponent = styled.div`
  width: 70%; /* Match article section width */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-bottom: 40px;
`;

const AboutSection = () => {
  return (
    <>
    <div id='about'>
    <BigContainer>
      <h1>ABOUT</h1>
      <Title>Project Purpose</Title>
      <article>
        Right now, medical imaging
        with iterative statistical algorithms takes about 5 minutes. Our project aims to use 
        deep learning inferencing
        to reduce this time to milliseconds, allowing massive amounts of data to be
        generated in a small amount of time. Additionally, our project includes synthetic data generation,
        allowing us to get good results without training on real data (effectively zero-shot learning), and
        our system can provide easy access to synthetic data.
      </article>
      <br />

      <Title>Meet Our Senior Design Team</Title>
      <article>
        Welcome to our team introduction! Below, you'll find a short bio
        for each team member that contributed to our project.
      </article>

      <FlexComponent>
        <PostcardBox
            image_link="asher"
            name="Group Member: Asher Burrell"
            email="aburrell2022@my.fit.edu"
            desc="Asher Burrell was mainly in charge of improving the machine learning model that reconstructs heart images from SPECT data. 
              He has incorporated various new loss functions, expanded the model architecture, and introduced distributed training on Florida Tech's internal cloud service
              utilizing multiple GPUs. Through his efforts, the model has achieved a 60% increase in reconstruction accuracy."
            linkedin="https://www.linkedin.com/in/asher-burrell/"
            github="https://github.com/aburrell1"
        />
            
        <PostcardBox
            image_link="chris"
            name="Group Member: Chris Hinton"
            email="chinton2022@my.fit.edu"
            desc="Welcome to our team introduction! Below, you'll find a few postcards
                highlighting the amazing individuals who bring unique skills and
                perspectives to our work."
            linkedin="https://www.linkedin.com/in/asher-burrell/"
            github="https://github.com/ChrisH571"
        />

        <PostcardBox
            image_link="ty"
            name="Group Member: Thomas Mercer"
            email="tmercer2022@my.fit.edu"
            desc="Welcome to our team introduction! Below, you'll find a few postcards
                highlighting the amazing individuals who bring unique skills and
                perspectives to our work."
            linkedin="https://www.linkedin.com/in/thomas-mercer-752b54275/"
            github="https://github.com/rednova25"
        />
      </FlexComponent>

      <Title>Our Advisor</Title>
      <FlexTwoComponent>
        <PostcardBox
                image_link="Mitra"
                name="Dr. Debasis Mitra"
                email="dmitra@fit.edu"
                desc="Dr. Debasis Mitra is a Computer Science Professor at Florida Institute of Technology 
                    and the Director of the Biocomputing Lab.
                    A central theme of Mitra's present research is to 
                    squeeze knowledge nuggets from noisy spatio-temporal data, especially 
                    in bio-medical images. In the past Mitra has made contributions in artificial intelligence 
                    studying the qualitative reasoning problems with spatial and temporal constraints"
                linkedin="https://www.linkedin.com/in/debasis-mitra-632a837/"
                github="https://github.com/DM-BiCLab"
            />
       </FlexTwoComponent>

    </BigContainer>
    </div>
    </>
  );
};

export default AboutSection;
