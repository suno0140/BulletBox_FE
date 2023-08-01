import React from 'react';
import styled from 'styled-components';

import { ReactComponent as homeMenuIcon } from '@imgs/navigation/home.svg';
import { ReactComponent as dailyLogIcon } from '@imgs/navigation/daily.svg';
import { ReactComponent as diaryLogIcon } from '@imgs/navigation/diary.svg';
import { BsPerson } from 'react-icons/bs';
import { HiSearch } from 'react-icons/hi';
import { useLocation, useNavigate } from 'react-router-dom';

const NavigationMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const buttons = [
    { key: 'diary/일기장', icon: <DiaryBtn /> },
    { key: 'dailys/할일추가', icon: <DailylogBtn /> },
    { key: 'main/홈', icon: <HomeMenuBtn /> },
    { key: 'search/할일검색', icon: <SearchBtn /> },
    { key: 'mypage/마이페이지', icon: <MyPageBtn /> },
  ];

  const handleNavigation = (e: React.MouseEvent<HTMLElement>) => {
    navigate(`/${e.currentTarget.id}`);
  };

  return (
    <Container>
      {buttons.map((btn, idx) => (
        <Button
          key={idx}
          id={btn.key.split('/')[0]}
          title={btn.key.split('/')[1]}
          onClick={handleNavigation}
          $active={location.pathname === `/${btn.key.split('/')[0]}`}
        >
          <span>{btn.icon}</span>
          <ButtonText>{btn.key.split('/')[1]}</ButtonText>
        </Button>
      ))}
    </Container>
  );
};

export default NavigationMenu;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 52px;
`;

const Button = styled.button<{ $active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 3px 0;
  width: 25%;
  height: 48px;
  border: 0;
  & > span {
    pointer-events: none;
  }
  &:active,
  &:hover,
  &:focus {
    color: var(--color-main);
  }

  color: ${(props) => (props.$active ? 'var(--color-main)' : 'inherit')};
`;
const DiaryBtn = styled(diaryLogIcon)`
  width: 24px;
  height: 24px;
`;
const HomeMenuBtn = styled(homeMenuIcon)`
  width: 26px;
  height: 26px;
`;
const DailylogBtn = styled(dailyLogIcon)`
  width: 24px;
  height: 24px;
`;
const MyPageBtn = styled(BsPerson)`
  width: 24px;
  height: 24px;
`;
const SearchBtn = styled(HiSearch)`
  width: 24px;
  height: 24px;
`;

const ButtonText = styled.span`
  font-size: 10px;
`;
