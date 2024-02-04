import React from "react";
import styled from "styled-components";
import { useRef } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Bio } from "../../data/constants";
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
  padding: 0px 0px 80px 0px;
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

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

function Contact() {
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  return (
    <Container id="#contact" theme={darkTheme}>
      <Wrapper theme={darkTheme}>
        <Title theme={darkTheme}>Contact</Title>
        <Desc theme={darkTheme}>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <SocialMediaIcons theme={darkTheme}>
          <SocialMediaIcon theme={darkTheme} href={Bio.facebook} target="display">
            <FacebookIcon theme={darkTheme} />
          </SocialMediaIcon>
          <SocialMediaIcon theme={darkTheme} href={Bio.linkedin} target="display">
            <LinkedInIcon theme={darkTheme}/>
          </SocialMediaIcon>
          <SocialMediaIcon theme={darkTheme} href={Bio.instagram} target="display">
            <InstagramIcon theme={darkTheme}/>
          </SocialMediaIcon>
        </SocialMediaIcons>
      </Wrapper>
    </Container>
  );
}

export default Contact;
