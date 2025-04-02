import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeaderContainer = styled.header`
  padding: 2rem 0;
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
`;

const NameContainer = styled.div`
  display: inline-block;
  position: relative;
`;

const FirstName = styled(motion.h1)`
  font-family: 'Cormorant Garamond', serif;
  font-weight: 300;
  font-size: 4rem;
  margin: 0;
  letter-spacing: 0.5rem;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const LastName = styled(motion.h1)`
  font-family: 'Cormorant Garamond', serif;
  font-weight: 200;
  font-size: 3.5rem;
  margin: 0;
  letter-spacing: 0.4rem;
  color: #555;
  position: relative;
  right: -4rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    right: -2rem;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <NameContainer>
        <FirstName
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          LUANA
        </FirstName>
        <LastName
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          FURTADO
        </LastName>
      </NameContainer>
    </HeaderContainer>
  );
};

export default Header; 