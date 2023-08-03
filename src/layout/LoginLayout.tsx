import React from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutBox, LayoutDiv } from '@components/Layout';

const StartLayout = () => {
  return (
    <LayoutBox>
      <LayoutDiv>
        <Outlet></Outlet>
      </LayoutDiv>
    </LayoutBox>
  );
};

export default StartLayout;
