import React from 'react';
import {
  LayoutContainer,
  LayoutSubContainer,
} from '@components/atoms/Container';
import { Outlet } from 'react-router-dom';

const StartLayout = () => {
  return (
    <LayoutContainer>
      <LayoutSubContainer>
        <Outlet></Outlet>
      </LayoutSubContainer>
    </LayoutContainer>
  );
};

export default StartLayout;
