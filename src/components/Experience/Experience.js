import React from "react";
import styled from "styled-components";
import ExperienceCard from "../cards/ExperienceCard";
import { experiences } from "../../data/constants";
import { darkTheme } from "../../utils/Theme";

const Container = styled.div`
  background: ${({ theme }) => theme.bg};
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
const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

function Experience() {
  return (
    <Container id="experience" theme={darkTheme}>
      <Wrapper theme={darkTheme}>
        <Title theme={darkTheme}>Experience</Title>
        <Desc theme={darkTheme}>
          My work experience as Associate Software Engineer and working on
          different companies and projects.
        </Desc>

        {experiences?.map((experience, index) => (
          <ExperienceCard experience={experience} />
        ))}
      </Wrapper>
    </Container>
  );
}

export default Experience;
