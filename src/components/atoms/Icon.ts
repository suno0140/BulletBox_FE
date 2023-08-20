import { styled } from 'styled-components';
import { ReactComponent as Logo } from '@imgs/logo/logo.svg';
import { ReactComponent as MyLogo } from '@imgs/mypage/mypageLogo.svg';
import { ReactComponent as Logout } from '@imgs/mypage/logout.svg';
import { ReactComponent as icon } from '@imgs/etc/help.svg';
import { ReactComponent as homeMenuIcon } from '@imgs/navigation/home.svg';
import { ReactComponent as dailyLogIcon } from '@imgs/navigation/daily.svg';
import { ReactComponent as diaryLogIcon } from '@imgs/navigation/diary.svg';
import { ReactComponent as close } from '@imgs/etc/close.svg';
import { ReactComponent as guide1 } from '@imgs/guide/guide1.svg';
import { ReactComponent as guide2 } from '@imgs/guide/guide2.svg';
import { ReactComponent as guide3 } from '@imgs/guide/guide3.svg';
import { ReactComponent as guide4 } from '@imgs/guide/guide4.svg';
import { ReactComponent as guide5 } from '@imgs/guide/guide5.svg';
import { ReactComponent as guide6 } from '@imgs/guide/guide6.svg';
import { ReactComponent as guide7 } from '@imgs/guide/guide7.svg';

import { BsPerson } from 'react-icons/bs';
import { HiSearch } from 'react-icons/hi';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { BsFillPlusCircleFill } from 'react-icons/bs';

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

export const CloseIcon = styled(close)`
  width: 24px;
  height: 18px;
`;

export const AddCategoryIcon = styled(BsFillPlusCircleFill)`
  fill: var(--color-main);
  width: 40px;
  height: 40px;
`;

export const CategoryAddBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background-color: white;
  border-radius: 50px;
  margin-right: 5px;
`;

export const Guide1 = styled(guide1)`
  width: 95%;
  height: 100%;
`;

export const Guide2 = styled(guide2)`
  width: 95%;
  height: 100%;
`;
export const Guide3 = styled(guide3)`
  width: 95%;
  height: 100%;
`;

export const Guide4 = styled(guide4)`
  width: 95%;
  height: 100%;
`;
export const Guide5 = styled(guide5)`
  width: 95%;
  height: 100%;
`;
export const Guide6 = styled(guide6)`
  width: 95%;
  height: 100%;
`;
export const Guide7 = styled(guide7)`
  width: 95%;
  height: 100%;
`;
