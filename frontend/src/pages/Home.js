import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

// Keyframes for animations
const backgroundAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const buttonPulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

// Styled components
const HomeContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #1d0040;
`;

const AnimationBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: radial-gradient(circle at center, #6a0dad, #2e003e);
  overflow: hidden;
  z-index: -1;
  animation: ${backgroundAnimation} 10s ease-in-out infinite alternate;
`;

const Title = styled.h1`
  color: #e0b3ff;
  font-size: 4rem;
  text-align: center;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
  margin-bottom: 2rem;
  animation: ${fadeIn} 2s ease-in;
`;

const LoginOptions = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const LoginButton = styled.button`
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1.25rem;
  color: #fff;
  background-color: #6a0dad;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: #b066ff;
    transform: scale(1.1);
  }
`;

function Home() {
  return (
    <HomeContainer>
      <AnimationBackground />
      <div>
        <Title>Welcome to  MEDAI </Title>
        <LoginOptions>
          <Link to="/login/admin">
            <LoginButton>Admin Login</LoginButton>
          </Link>
          <Link to="/login/doctor">
            <LoginButton>Doctor Login</LoginButton>
          </Link>
          <Link to="/login/patient">
            <LoginButton>Patient Login</LoginButton>
          </Link>
        </LoginOptions>
      </div>
    </HomeContainer>
  );
}

export default Home;
