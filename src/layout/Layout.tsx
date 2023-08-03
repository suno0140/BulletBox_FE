import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@layout/header/Header';
import Footer from '@layout/footer/Footer';

import { LayoutBox, LayoutDiv, PageContainer } from '@components/Layout';

const Layout = () => {
  return (
    <LayoutBox>
      <Header />
      <LayoutDiv>
        <PageContainer>
          <Outlet></Outlet>
        </PageContainer>
      </LayoutDiv>
      <Footer />
    </LayoutBox>
  );
};

export default Layout;
