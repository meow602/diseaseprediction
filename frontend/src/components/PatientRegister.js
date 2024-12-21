import React, { useState } from 'react';
import axios from 'axios';
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

// Styled components
const RegisterContainer = styled.section`
  height: 100vh;
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

const Card = styled.div`
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 800px;
  padding: 2rem;
`;

const Title = styled.h3`
  color: black;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputGroup = styled.div`
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 0.75rem;
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
    transform: scale(1.05);
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 1rem;
`;

function PatientRegister() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [phone_no, setPhoneNo] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:5000/auth/register/patient', {
        username,
        password,
        name,
        gender,
        address,
        phone_no,
      });
      console.log(response.data);
      alert('Patient registered successfully');
    } catch (error) {
      console.error(error);
      setError('Error registering patient');
    }
  };

  return (
    <RegisterContainer>
      <AnimationBackground />
      <Card>
        <Title>Registration Form</Title>
        <Form>
          <InputGroup>
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Input
              type="text"
              placeholder="Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Input
              type="text"
              placeholder="Phone No"
              value={phone_no}
              onChange={(e) => setPhoneNo(e.target.value)}
            />
          </InputGroup>
          <Button type="button" onClick={handleRegister}>Register</Button>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </Form>
      </Card>
    </RegisterContainer>
  );
}

export default PatientRegister;