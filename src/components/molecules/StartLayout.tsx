import React from 'react';
import {
  LayoutContainer,
  LayoutSubContainer,
} from '@components/atoms/Container';

import { Outlet } from 'react-router-dom';
import useAuthRedirect from '@hooks/useAuthRedirect';

const StartLayout = () => {
  useAuthRedirect();
  return (
    <LayoutContainer>
      <LayoutSubContainer>
        <Outlet></Outlet>
      </LayoutSubContainer>
    </LayoutContainer>
  );
};

export default StartLayout;
