import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@components/molecules/Header';
import Footer from '@components/molecules/Footer';
import {
  LayoutContainer,
  LayoutSubContainer,
  PageContainer,
} from '@components/atoms/Container';

const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <LayoutSubContainer>
        <PageContainer>
          <Outlet></Outlet>
        </PageContainer>
      </LayoutSubContainer>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
