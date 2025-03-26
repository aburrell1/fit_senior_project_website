import './App.css'
import NavBar from './NavBar'
import MilestoneSection from './MilestoneSection'
import AboutSection from './AboutSection'
import HomeSliderSection from './HomeSliderSection'
import styled from 'styled-components'

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
          <MilestoneSection />
        </AppWrapper>
      </div>
    </>
  )
}

export default App
