import { styled } from 'styled-components';

export const MainBtn = styled.button`
  font-size: 20px;
  font-family: 'HeirofLightBold';
  background-color: var(--color-main);
  color: white;
  width: 100%;
  height: 48px;
  margin-top: 20px;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  &:disabled {
    background: var(--color-c1-gray);
  }
`;

export const GoBackBtn = styled.button`
  width: 155px;
  height: 12px;
  margin-top: 16px;
  font-size: 12px;
  font-weight: 700;
  color: var(--color-gray);
  border: none;
  background-color: transparent;
`;

export const EmailCheckBtn = styled.button`
  width: 21%;
  font-size: 11px;
  color: var(--color-main);
  border: 0;
  background-color: transparent;
`;

export const LogoutBtn = styled.button`
  background-color: white;
  width: 100%;
  border: none;
  font-size: 10px;
`;
