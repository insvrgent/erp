import React from "react";
import styled, { css } from "styled-components";

import './MainContent.css';

const scrollToContent = () => {
  // Find the Content component by its ID or any other method
  const contentElement = document.getElementById("content");

  // Check if the Content component exists
  if (contentElement) {
    // Scroll to the Content component
    contentElement.scrollIntoView({});
  }
};

function MainContent() {
  return (
    <div className="main-content">
      <BackgroundContainer>
        <img src='/env1.png' alt="Your Image" />
      </BackgroundContainer>
    <button onClick={scrollToContent}>Scroll to Content</button>
      <StatsImage>
        <Image1 src='/stats.png'></Image1>
      </StatsImage>
        
      <Container>
        <LoremIpsum1parent></LoremIpsum1parent>
        <LoremIpsum1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </LoremIpsum1>
        <Excepteurparent></Excepteurparent>
        <Excepteur>
          &quot;Excepteur sint occaecat cupidatat non proident&quot;
        </Excepteur>
      </Container>
    </div>
  );
}

const BackgroundContainer = styled.div`
  position: absolute;
  bottom: -5px;
  right: 0;
  max-width: 100%;
  height: auto;

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

const StatsImage = styled.div`
  position: absolute;
  bottom: 50px;
  right: 65vw;
  max-width: 100%;
  height: auto;

  img {
    max-width: 100%;
    width:500px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1475px;
  margin: 0 auto;
  padding: 20px; /* Add padding to center the content on smaller screens */

  @media (max-width: 768px) {
    max-width: 100%; /* Make the container full width on smaller screens */
  }
`;

const LoremIpsum1parent = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 27px;
  text-align: center;
  line-height: 48px;
  width: 100%;
  height: 22vh;
  margin-top: -10px; /* Add margin for spacing on smaller screens */
`;
const LoremIpsum1 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 27px;
  text-align: center;
  line-height: 3vh;
  width: 50%;
  height: 1vh;
  margin-bottom: -10px; /* Add margin for spacing on smaller screens */
  margin-left: 30vw; /* Add margin for spacing on smaller screens */
`;
const Excepteurparent = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 27px;
  text-align: center;
  line-height: 48px;
  width: 100%;
  margin-top: 11vw;
`;

const Excepteur = styled.span`
  position: absolute;
  font-family: Roboto;
  font-style: italic;
  font-weight: normal; /* Add a valid font weight */
  color: #121212;
  font-size: 33px;
  bottom: 20vw;
  left: 1vw;
  margin-bottom: 200px; /* Add margin for spacing on smaller screens */
`;

const Image1 = styled.img`
  height: 100%;
  width: 25vh;
  margin-bottom: 3px;
  margin-right: 100px;
  object-fit: contain;
`;

const LoremIpsum2Column = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center; /* Center the content on smaller screens */
  }
`;

export default MainContent;