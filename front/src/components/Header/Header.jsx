import React from 'react';
import styled from 'styled-components';

const scrollToContent = (target) => {
  // Find the Content component by its ID or any other method
  const contentElement = document.getElementById(target);

  // Check if the Content component exists
  if (contentElement) {
    // Scroll to the Content component
    contentElement.scrollIntoView({ behavior: 'auto' });
  }
};

const Header = () => {
  return (
    <div>
      <LogoContainer>
        <img className="logo" src="/logo.png" alt="Your Image" />
        <img className="loogoo" src="/loogoo.png" alt="Your Image" />
      </LogoContainer>

      <ContentDiv>
        <Square>
          <Button1 onClick={() => scrollToContent('about')}>ABOUT</Button1>
          <Button2 onClick={() => scrollToContent('pricing')}>PRICING</Button2>
          <Button3 onClick={() => scrollToContent('contact')}>Contact</Button3>
          <Button4 onClick={() => scrollToContent('login')}>LOGIN</Button4>
        </Square>
      </ContentDiv>
    </div>
  );
};

const ContentDiv = styled.div`
  flex-grow: 1;
  max-height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Square = styled.div`
  width: 100px;
  height: 7vw;
  position: relative;
  z-index: 2; /* Ensure the buttons are above the image overlay */
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 90%;
  height: auto;
  z-index: 1;

  img.logo {
    max-width: 100%;
    height: auto;
    display: block;
    z-index: 2;
  }

  img.loogoo {
    top: 6%;
    left: 3%;
    position: absolute;
    max-width: 5%;
    height: auto;
    display: block;
    z-index: 1;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px; /* Adjust the position as needed */
  left: 0%; /* Center horizontally within the square */
  transform: translateX(-50%); /* Center horizontally within the square */
  height: 7vw;
`;
const Button1 = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px; /* Adjust the position as needed */
  left: 5vw; /* Center horizontally within the square */
  transform: translateX(-50%); /* Center horizontally within the square */
  height: 7vw;
`;
const Button2 = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px; /* Adjust the position as needed */
  left: 20vw; /* Center horizontally within the square */
  transform: translateX(-50%); /* Center horizontally within the square */
  height: 7vw;
`;
const Button3 = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px; /* Adjust the position as needed */
  left: 35vw; /* Center horizontally within the square */
  transform: translateX(-50%); /* Center horizontally within the square */
  height: 7vw;
`;
const Button4 = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px; /* Adjust the position as needed */
  left: 50vw; /* Center horizontally within the square */
  transform: translateX(-50%); /* Center horizontally within the square */
  height: 7vw;
`;
export default Header;
