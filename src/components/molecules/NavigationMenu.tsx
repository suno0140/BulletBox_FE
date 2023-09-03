import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavigateSpan } from '@components/atoms/Span';
import { NavigateContainer } from '@components/atoms/Container';
import { NavigateBtn } from '@components/atoms/Button';
import {
  DailylogIcon,
  DiaryIcon,
  HomeIcon,
  MyPageIcon,
  SearchIcon,
} from '@components/atoms/Icon';

const NavigationMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const buttons = [
    { key: 'diary/일기장', icon: <DiaryIcon /> },
    { key: 'dailys/할일', icon: <DailylogIcon /> },
    { key: 'main/홈', icon: <HomeIcon /> },
    { key: 'search/할일 검색', icon: <SearchIcon /> },
    { key: 'mypage/마이페이지', icon: <MyPageIcon /> },
  ];

  const handleNavigation = (e: React.MouseEvent<HTMLElement>) => {
    navigate(`/${e.currentTarget.id}`);
  };

  return (
    <NavigateContainer>
      {buttons.map((btn, idx) => (
        <NavigateBtn
          key={idx}
          id={btn.key.split('/')[0]}
          title={btn.key.split('/')[1]}
          onClick={handleNavigation}
          $active={location.pathname === `/${btn.key.split('/')[0]}`}
        >
          <span>{btn.icon}</span>
          <NavigateSpan>{btn.key.split('/')[1]}</NavigateSpan>
        </NavigateBtn>
      ))}
    </NavigateContainer>
  );
};

export default NavigationMenu;
