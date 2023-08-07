import { styled } from 'styled-components';
import { ReactComponent as Logo } from '@imgs/logo/logo.svg';
import { ReactComponent as MyLogo } from '@imgs/mypage/mypageLogo.svg';
import { ReactComponent as Logout } from '@imgs/mypage/logout.svg';
import { ReactComponent as icon } from '@imgs/etc/help.svg';
import { ReactComponent as homeMenuIcon } from '@imgs/navigation/home.svg';
import { ReactComponent as dailyLogIcon } from '@imgs/navigation/daily.svg';
import { ReactComponent as diaryLogIcon } from '@imgs/navigation/diary.svg';

import { BsPerson } from 'react-icons/bs';
import { HiSearch } from 'react-icons/hi';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

export const MainIcon = styled(Logo)`
  fill: var(--color-main);
  width: 103px;
  height: 116px;
`;

export const BulletIcon = styled(Logo)`
  width: 13%;
  height: 10%;
  fill: var(--color-main);
`;

export const MypageIcon = styled(MyLogo)`
  fill: white;
  width: 15%;
  background-color: var(--color-main);
  border-radius: 50%;
`;

export const LogoutIcon = styled(Logout)`
  color: var(--color-main);
  width: 24px;
  height: 24px;
`;

export const QuestionIcon = styled(icon)`
  width: 100%;
  fill: var(--color-black);
`;

export const NextIcon = styled(IoIosArrowForward)`
  width: 2rem;
  height: 2.5vh;
  margin-right: 28vw;
  margin-left: 1vw;
  color: var(--color-main);
`;
export const PrevIcon = styled(IoIosArrowBack)`
  width: 2rem;
  height: 2.5vh;
  margin-left: 3vw;
  margin-right: 1vw;
  color: var(--color-main);
`;

export const DiaryIcon = styled(diaryLogIcon)`
  width: 24px;
  height: 24px;
`;
export const HomeIcon = styled(homeMenuIcon)`
  width: 26px;
  height: 26px;
`;
export const DailylogIcon = styled(dailyLogIcon)`
  width: 24px;
  height: 24px;
`;
export const MyPageIcon = styled(BsPerson)`
  width: 24px;
  height: 24px;
`;
export const SearchIcon = styled(HiSearch)`
  width: 24px;
  height: 24px;
`;
