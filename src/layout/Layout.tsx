import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@layout/header/Header';
import Footer from '@layout/footer/Footer';
import useAuthRedirect from '@hooks/useAuthRedirect';
import {
  LayoutContainer,
  LayoutDiv,
  PageContainer,
} from '@components/Container';

const Layout = () => {
  useAuthRedirect();

  return (
    <LayoutContainer>
      <LayoutDiv>
        <Header />
        <PageContainer>
          <Outlet></Outlet>
        </PageContainer>
        <Footer />
      </LayoutDiv>
    </LayoutContainer>
  );
};

export default Layout;
