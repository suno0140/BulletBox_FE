import React from 'react';
import styled from 'styled-components';

import { ReactComponent as homeMenuIcon } from '@imgs/navigation/home.svg';
import { ReactComponent as dailyLogIcon } from '@imgs/navigation/daily.svg';
import { ReactComponent as diaryLogIcon } from '@imgs/navigation/diary.svg';
import { BsPerson } from 'react-icons/bs';
import { HiSearch } from 'react-icons/hi';

const NavigationMenu = () => {
  const buttons = [
    <DiaryBtn key="diary/일기장" />,
    <DailylogBtn key="dailys/할일추가" />,
    <HomeMenuBtn key="home/홈" />,
    <SearchBtn key="search/검색" />,
    <MyPageBtn key="mypage/마이페이지" />,
  ];

  return (
    <Container>
      {buttons.map((btn, idx) => (
        <Button key={idx}>
          <span>{btn}</span>
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

const Button = styled.button`
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
