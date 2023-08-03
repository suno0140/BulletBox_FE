import React from 'react';
import styled from 'styled-components';
import NavigationMenu from '@layout/footer/NavigationMenu';

const Footer = () => {
  return (
    <FooterDiv>
      <NavigationMenu />
    </FooterDiv>
  );
};

export default Footer;

const FooterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 52px;
  bottom: 0;
  margin: 0%, auto;
`;
