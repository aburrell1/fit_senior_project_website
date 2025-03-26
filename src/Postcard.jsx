import React from "react";
import styled from "styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

// Postcard Styled Components
const Postcard = styled.div`
  background-color: #fff; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
  border-radius: 15px;
  overflow: hidden;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px); 
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); 
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%; 
  margin-bottom: 15px;
`;

const PostcardContent = styled.div`
  text-align: center;
  color: #555;
`;

const PostcardTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #222;
`;

const PostcardEmail = styled.h3`
  font-size: 15px;
  font-style: italic;
  margin-bottom: 10px;
  color: black;
`;

const PostcardDescription = styled.p`
  font-size: 16px;
  line-height: 1.4;
  color: #666;
`;

// Bottom Section for Contact Links
const ContactLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px; 
  width: 100%; 
  margin-top: 15px; 
`;

const IconLink = styled.a`
  color: #444; 
  text-decoration: none;
  font-size: 24px;
  transition: color 0.2s;

  &:hover {
    color: #007bff; 
  }
`;

const PostcardBox = ({ image_link, name, email, desc, linkedin, github }) => {
  return (
    <Postcard>
      <Image src={image_link} alt="Headshot" />
      <PostcardContent>
        <PostcardTitle>{name}</PostcardTitle>
        <PostcardEmail>{email}</PostcardEmail>
        <PostcardDescription>
          {desc}
        </PostcardDescription>
      </PostcardContent>
      <ContactLinks>
        <IconLink href={linkedin} target="_blank">
          <LinkedInIcon />
        </IconLink>
        <IconLink href={github} target="_blank">
          <GitHubIcon />
        </IconLink>
      </ContactLinks>
    </Postcard>
  );
};

export default PostcardBox;
