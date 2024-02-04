import React from "react";
import ProjectCard from "../cards/ProjectCard";
import { projects } from "../../data/constants";
import styled from "styled-components";
import { darkTheme } from "../../utils/Theme";

const Container = styled.div`
  background: ${({ theme }) => theme.bgLight};
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 80px 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;
export const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;
export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;

function Project({ openModal, setOpenModal }) {
  return (
    <Container id="projects" theme={darkTheme}>
      <Wrapper theme={darkTheme}>
        <Title theme={darkTheme}>Projects</Title>
        <Desc theme={darkTheme}>
          I have worked on a wide range of projects. Here are some of my
          projects.
        </Desc>
        <CardContainer theme={darkTheme}>
          {projects.map((project) => (
            <ProjectCard theme={darkTheme}
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
            ></ProjectCard>
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
}

export default Project;
