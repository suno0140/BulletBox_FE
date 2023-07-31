import React from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutContainer, LayoutDiv } from '@components/Container';

const StartLayout = () => {
  return (
    <LayoutContainer>
      <LayoutDiv>
        <Outlet></Outlet>
      </LayoutDiv>
    </LayoutContainer>
  );
};

export default StartLayout;
