import React from "react";
import styled from "styled-components";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Styled Components for Layout
const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
//   height: 100vh; /* Covers the full screen height */
`;

const StyledAccordion = styled(Accordion)`
  width: 100%; /* Makes accordion full-width */
`;

const Header = styled.h2`
  text-align: left;
  font-size: 20px;
  color: #333;
  margin: 0;
  padding: 0;
`;

const ButtonListContainer = styled.div`
  display: flex;
  justify-content: center; /* Centers buttons horizontally */
  align-items: center;
  gap: 15px; /* Space between buttons */
`;

const StyledButton = styled.a`
  text-decoration: none;
  background-color: black; /* Button background color */
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background-color: #333; /* Slightly lighter black on hover */
  }
`;

const MainSection2 = () => {
  return (
    <MainWrapper>
      {/* First Section with Dropdown */}
      <StyledAccordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Header>First Header</Header>
        </AccordionSummary>
        <AccordionDetails>
          <ButtonListContainer>
            <StyledButton href="#link1">Link 1</StyledButton>
            <StyledButton href="#link2">Link 2</StyledButton>
            <StyledButton href="#link3">Link 3</StyledButton>
          </ButtonListContainer>
        </AccordionDetails>
      </StyledAccordion>

      {/* Second Section with Dropdown */}
      <StyledAccordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Header>Second Header</Header>
        </AccordionSummary>
        <AccordionDetails>
          <ButtonListContainer>
            <StyledButton href="#link4">Link 4</StyledButton>
            <StyledButton href="#link5">Link 5</StyledButton>
            <StyledButton href="#link6">Link 6</StyledButton>
          </ButtonListContainer>
        </AccordionDetails>
      </StyledAccordion>
    </MainWrapper>
  );
};

export default MainSection2;
