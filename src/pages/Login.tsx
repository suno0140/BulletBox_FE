import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '@imgs/login/logo-graphic.svg';
import LogInInput from '@components/login/LoginInput';

const Login = () => {
  return (
    <Container>
      <TopContainer>
        <BulletLogo />
        <BulletBold>Bullet Box</BulletBold>
      </TopContainer>
      <LogInInput />
      {/* <SocialLogin /> */}
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 294px;
  height: 607px;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 73px;
  height: 88.85px;
`;

const BulletLogo = styled(Logo)`
  width: 39.27px;
  height: 64.4px;
  fill: var(--color-main);
`;

const BulletBold = styled.div`
  display: flex;
  justify-content: center;
  color: var(--color-main);
  font-size: 14px;
  font-weight: bold;
  font-family: 'HeirofLightBold';
  margin-top: 5px;
  width: 80px;
  height: 21px;
`;
