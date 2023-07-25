import React, { useContext } from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '@imgs/start/logo-graphic.svg';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '@core/AuthContext';

const StartPage = () => {
  const navigate = useNavigate();
  const StartHandler = () => {
    navigate('/login');
  };
  const userInfo = useContext(AuthContext);
  console.log(userInfo); // 로그인이 아닌경우 null
  return (
    <ContainerBox>
      <ImgDiv>
        <MainLogo />
        <BulletBoxText>BulletBox</BulletBoxText>
      </ImgDiv>
      <TextDiv>당신의 할일을 담아보세요</TextDiv>
      <StartBtn
        onClick={() => {
          StartHandler();
        }}
      >
        시작하기
      </StartBtn>
    </ContainerBox>
  );
};

export default StartPage;

const ContainerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

const ImgDiv = styled.div`
  width: 149.29px;
  height: 165px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const MainLogo = styled(Logo)`
  fill: var(--color-main);
  width: 103px;
  height: 116px;
`;
const BulletBoxText = styled.span`
  font-size: 30px;
  font-weight: bold;
  font-family: 'HeirofLightBold';
  margin-top: auto;
`;
const TextDiv = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 50px 0;
`;

const StartBtn = styled.button`
  font-size: 24px;
  font-family: 'HeirofLightBold';
  background-color: var(--color-main);
  color: white;
  width: 100%;
  height: 48px;
  margin-top: 20px;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;
