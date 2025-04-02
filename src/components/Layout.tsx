import React from 'react';
import styled from 'styled-components';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Container = styled.div`
  max-width: 100%;
  padding: 0;
  margin: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Footer = styled.footer`
  padding: 2rem 0;
  text-align: center;
  font-size: 0.8rem;
  color: #555;
  margin-top: 3rem;
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer>
        <p>© {new Date().getFullYear()} Luana Furtado. Todos os direitos reservados.</p>
      </Footer>
    </Container>
  );
};

export default Layout; 