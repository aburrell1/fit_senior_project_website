import './App.css'
import NavBar from './NavBar'
import MilestoneSection from './MilestoneSection'
import AboutSection from './AboutSection'
import HomeSliderSection from './HomeSliderSection'
import styled from 'styled-components'
import ContactSection from './ContactSection'
import VideoDemoSection from './VideoDemoSection'

const AppWrapper = styled.div`
  width: 100%;
`;

function App() {

  return (
    <>
      <div id="home">
        <AppWrapper>
          <NavBar />
          <HomeSliderSection />
          <AboutSection />
          <VideoDemoSection />
          <MilestoneSection />
          <ContactSection />
        </AppWrapper>
      </div>
    </>
  )
}

export default App
