import React from "react";
import styled from "styled-components";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BarComponent from "./BarComponent";
import { Link } from 'react-scroll';

// Styled Components for Main Article
const MainArticle = styled.section`
  width: 100%;
  background-color: #f8f8f8;
  padding: 20px 0;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 200px;
`;

const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Header = styled.h2`
  text-align: center;
  font-size: 30px;
  color: #333;
`;

const ButtonListContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const StyledButton = styled.a`
  text-decoration: none;
  background-color:rgb(37, 37, 37);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 24px;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background-color:rgb(139, 139, 139);
  }
`;

const MilestoneWrapper = styled.div`
    width: 70%;
`;

// New Container for the Title
const TitleContainer = styled.section`
  width: 100%;
  padding: 40px 20px 20px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 40px;
  color:rgb(255, 196, 0); 
  font-weight: bold;
  text-shadow: -1px -1px 0 black, 

               1px -1px 0 black, 
               -1px 1px 0 black, 
               1px 1px 0 black;
`;

const YearHeading = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const StyledAccordion = styled(Accordion)`
  width: 100%; /* Makes accordion full-width */
`;

const MainSection = () => {
  return (
    <>
      <div id="documentation">
      <MainArticle>
      <TitleContainer><h1>SYSTEM DOCUMENTS AND MILESTONES</h1></TitleContainer>
        <article>Below you find find all our documentation during the development of the project. Our documentation includes design, test, and requirements documents, as well 
            as presentations and milestone evaluations.
        </article>

        <TitleContainer><YearHeading>Semester 1</YearHeading></TitleContainer>
        
        <MilestoneWrapper>
            <StyledAccordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Header>PLAN (Sep 4)</Header>
                </AccordionSummary>
                <AccordionDetails>
                <ButtonListContainer>
                    <StyledButton href="/fit_senior_project_website/documents/plan1.pdf">Plan</StyledButton>
                    <StyledButton href="/fit_senior_project_website/documents/plan1Pres.pdf">Presentation</StyledButton>
                </ButtonListContainer>
                </AccordionDetails>
            </StyledAccordion>
            <BarComponent />

            <StyledAccordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Header>SYSTEM DESIGN (Sep 30)</Header>
                </AccordionSummary>
                <AccordionDetails>
                <ButtonListContainer>
                    <StyledButton href="/fit_senior_project_website/documents/requirement.pdf">Requirements</StyledButton>
                    <StyledButton href="/fit_senior_project_website/documents/design.pdf">Design</StyledButton>
                    <StyledButton href="/fit_senior_project_website/documents/test.pdf">Test</StyledButton>
                </ButtonListContainer>
                </AccordionDetails>
            </StyledAccordion>
            <BarComponent/>
                
            <StyledAccordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Header>MILESTONE 1 (Sep 30)</Header>
                </AccordionSummary>
                <AccordionDetails>
                <ButtonListContainer>
                    <StyledButton href="/fit_senior_project_website/documents/milestone1.pdf">Presentation</StyledButton>
                    <StyledButton href="/fit_senior_project_website/documents/eval1.pdf">Progress Evaluation</StyledButton>
                </ButtonListContainer>
                </AccordionDetails>
            </StyledAccordion>
            <BarComponent />

            {/* Second Container */}
            <StyledAccordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Header>MILESTONE 2 (Oct 28)</Header>
                </AccordionSummary>
                <AccordionDetails>
                <ButtonListContainer>
                    <StyledButton href="/fit_senior_project_website/documents/milestone2.pdf">Presentation</StyledButton>
                    <StyledButton href="/fit_senior_project_website/documents/eval2.pdf">Progress Evaluation</StyledButton>
                </ButtonListContainer>
                </AccordionDetails>
            </StyledAccordion>
            <BarComponent />

            <StyledAccordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Header>MILESTONE 3 (Nov 25)</Header>
                </AccordionSummary>
                <AccordionDetails>
                <ButtonListContainer>
                    <StyledButton href="/fit_senior_project_website/documents/milestone3.pdf">Presentation</StyledButton>
                    <StyledButton href="/fit_senior_project_website/documents/eval3.pdf">Progress Evaluation</StyledButton>
                </ButtonListContainer>
                </AccordionDetails>
            </StyledAccordion>
        </MilestoneWrapper>

        <TitleContainer><YearHeading>Semester 2</YearHeading></TitleContainer>
        
        <MilestoneWrapper>
            <StyledAccordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Header>PLAN (Jan 27)</Header>
                </AccordionSummary>
                <AccordionDetails>
                <ButtonListContainer>
                    <StyledButton href="/fit_senior_project_website/documents/plan2.pdf">Plan</StyledButton>
                    <StyledButton href="/fit_senior_project_website/documents/plan2Pres.pdf">Presentation</StyledButton>
                </ButtonListContainer>
                </AccordionDetails>
            </StyledAccordion>
            <BarComponent />

            <StyledAccordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Header>MILESTONE 4 (Feb 24)</Header>
                </AccordionSummary>
                <AccordionDetails>
                <ButtonListContainer>
                    <StyledButton href="/fit_senior_project_website/documents/milestone4.pdf">Presentation</StyledButton>
                    <StyledButton href="/fit_senior_project_website/documents/eval4.pdf">Progress Evaluation</StyledButton>
                </ButtonListContainer>
                </AccordionDetails>
            </StyledAccordion>
            <BarComponent />

            {/* Second Container */}
            <StyledAccordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Header>MILESTONE 5 (Mar 26)</Header>
                </AccordionSummary>
                <AccordionDetails>
                <ButtonListContainer>
                    <StyledButton href="/fit_senior_project_website/documents/poster.pdf">Poster</StyledButton>
                    <StyledButton href="/fit_senior_project_website/documents/milestone5.pdf">Presentation</StyledButton>
                    <StyledButton href="/fit_senior_project_website/documents/eval5.pdf">Progress Evaluation</StyledButton>
                </ButtonListContainer>
                </AccordionDetails>
            </StyledAccordion>
            <BarComponent />

            <StyledAccordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Header>MILESTONE 6 (Apr 21)</Header>
                </AccordionSummary>
                <AccordionDetails>
                <ButtonListContainer>
                {/* User and/or Developer Manual, Demo Video, Presentation, Progress Evaluation */}
                    <StyledButton href="/fit_senior_project_website/documents/userManual.pdf">Developer Manual</StyledButton>
                    <StyledButton href="#link4">
                        <a href="https://www.youtube.com/watch?v=Wz0HZrkjMa8" target="_blank" rel="noopener noreferrer">Demo Video</a>
                    </StyledButton>
                    <StyledButton href="/fit_senior_project_website/documents/milestone6.pdf">Presentation</StyledButton>
                    <StyledButton href="/fit_senior_project_website/documents/eval6.pdf">Progress Evaluation</StyledButton>
                </ButtonListContainer>
                </AccordionDetails>
            </StyledAccordion>
        </MilestoneWrapper>

      </MainArticle>     
      </div> 
    </>
  );
};

export default MainSection;
