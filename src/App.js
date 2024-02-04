import { ThemeProvider } from "@mui/material";
import "./App.css";
import { useState } from "react";
import styled from "styled-components";
import { darkTheme, lightTheme } from "./utils/Theme";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/HeroSection/Hero";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import { BrowserRouter as Router } from "react-router-dom";
import Experience from "./components/Experience/Experience";
import Project from "./components/projects/Project";
import ProjectDetails from "./components/projects/ProjectDetails";
import { dark } from "@mui/material/styles/createPalette";
import Contact from "./components/Contact/Contact";
const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: ${({ theme }) => theme.bgLight};

  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
`;
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <ThemeProvider theme={darkMode ? darkTheme : darkTheme}>
      <Router>
        <NavBar></NavBar>
        <Body>
          <Hero></Hero>
          <Wrapper>
            <Skills />
            <Experience />
            <Project
              openModal={openModal}
              setOpenModal={setOpenModal}
            ></Project>
            <Education />
            <Contact />
          </Wrapper>
          {/* {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )} */}
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
