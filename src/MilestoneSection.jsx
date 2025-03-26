import React from "react";
import styled from "styled-components";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BarComponent from "./BarComponent";


// Styled Components for Main Article
const MainArticle = styled.section`
  width: 100%;
  background-color: #f8f8f8;
  padding: 20px 0;
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

        <TitleContainer><YearHeading>Year 1</YearHeading></TitleContainer>
        
        <MilestoneWrapper>
            <StyledAccordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Header>PLAN</Header>
                </AccordionSummary>
                <AccordionDetails>
                <ButtonListContainer>
                    <StyledButton href="/documents/plan1.pdf">Plan</StyledButton>
                    <StyledButton href="/documents/plan1Pres.pdf">Presentation</StyledButton>
                </ButtonListContainer>
                </AccordionDetails>
            </StyledAccordion>
            <BarComponent />

            <StyledAccordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Header>SYSTEM DESIGN</Header>
                </AccordionSummary>
                <AccordionDetails>
                <ButtonListContainer>
                    <StyledButton href="/documents/requirement.pdf">Requirements</StyledButton>
                    <StyledButton href="/documents/design.pdf">Design</StyledButton>
                    <StyledButton href="/documents/test.pdf">Test</StyledButton>
                </ButtonListContainer>
                </AccordionDetails>
            </StyledAccordion>
            <BarComponent/>
                
            <StyledAccordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Header>MILESTONE 1</Header>
                </AccordionSummary>
                <AccordionDetails>
                <ButtonListContainer>
                    <StyledButton href="/documents/milestone1.pdf">Presentation</StyledButton>
                    <StyledButton href="/documents/eval1.pdf">Progress Evaluation</StyledButton>
                </ButtonListContainer>
                </AccordionDetails>
            </StyledAccordion>
            <BarComponent />

            {/* Second Container */}
            <StyledAccordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Header>MILESTONE 2</Header>
                </AccordionSummary>
                <AccordionDetails>
                <ButtonListContainer>
                    <StyledButton href="/documents/milestone2.pdf">Presentation</StyledButton>
                    <StyledButton href="/documents/eval2.pdf">Progress Evaluation</StyledButton>
                </ButtonListContainer>
                </AccordionDetails>
            </StyledAccordion>
            <BarComponent />

            <StyledAccordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Header>MILESTONE 3</Header>
                </AccordionSummary>
                <AccordionDetails>
                <ButtonListContainer>
                    <StyledButton href="/documents/milestone3.pdf">Presentation</StyledButton>
                    <StyledButton href="/documents/eval3.pdf">Progress Evaluation</StyledButton>
                </ButtonListContainer>
                </AccordionDetails>
            </StyledAccordion>
        </MilestoneWrapper>

        <TitleContainer><YearHeading>Year 2</YearHeading></TitleContainer>
        
        <MilestoneWrapper>
            <StyledAccordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Header>PLAN</Header>
                </AccordionSummary>
                <AccordionDetails>
                <ButtonListContainer>
                    <StyledButton href="/documents/plan2.pdf">Plan</StyledButton>
                    <StyledButton href="/documents/plan2Pres.pdf">Presentation</StyledButton>
                </ButtonListContainer>
                </AccordionDetails>
            </StyledAccordion>
            <BarComponent />

            <StyledAccordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Header>MILESTONE 4</Header>
                </AccordionSummary>
                <AccordionDetails>
                <ButtonListContainer>
                    <StyledButton href="/documents/milestone4.pdf">Presentation</StyledButton>
                    <StyledButton href="/documents/eval4.pdf">Progress Evaluation</StyledButton>
                </ButtonListContainer>
                </AccordionDetails>
            </StyledAccordion>
            <BarComponent />

            {/* Second Container */}
            <StyledAccordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Header>MILESTONE 5</Header>
                </AccordionSummary>
                <AccordionDetails>
                <ButtonListContainer>
                    <StyledButton href="/documents/milestone5.pdf">Presentation</StyledButton>
                    <StyledButton href="/documents/eval5.pdf">Progress Evaluation</StyledButton>
                </ButtonListContainer>
                </AccordionDetails>
            </StyledAccordion>
            <BarComponent />

            <StyledAccordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Header>MILESTONE 6</Header>
                </AccordionSummary>
                <AccordionDetails>
                <ButtonListContainer>
                {/* User and/or Developer Manual, Demo Video, Presentation, Progress Evaluation */}
                    <StyledButton href="/documents/userManual.pdf">Developer Manual</StyledButton>
                    <StyledButton href="#link4">Demo Video</StyledButton>
                    <StyledButton href="/documents/milestone6.pdf">Presentation</StyledButton>
                    <StyledButton href="/documents/eval6.pdf">Progress Evaluation</StyledButton>

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
