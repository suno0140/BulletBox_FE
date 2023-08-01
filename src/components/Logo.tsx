import { styled } from 'styled-components';
import { ReactComponent as Logo } from '@imgs/logo/logo.svg';
import { ReactComponent as MyLogo } from '@imgs/mypage/mypageLogo.svg';
import { ReactComponent as Logout } from '@imgs/mypage/logout.svg';

export const MainLogo = styled(Logo)`
  fill: var(--color-main);
  width: 103px;
  height: 116px;
`;

export const BulletLogo = styled(Logo)`
  width: 39.27px;
  height: 64.4px;
  margin-top: 50px;
  fill: var(--color-main);
`;

export const MypageLogo = styled(MyLogo)`
  fill: white;
  width: 15%;
  background-color: var(--color-main);
  border-radius: 50%;
`;

export const LogoutImg = styled(Logout)`
  color: var(--color-main);
  width: 24px;
  height: 24px;
`;
