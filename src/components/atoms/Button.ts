import { styled } from 'styled-components';

export const MainBtn = styled.button`
  font-size: 20px;
  font-family: 'HeirofLightBold';
  background-color: var(--color-main);
  color: white;
  width: 70%;
  height: 5vh;
  margin-top: 20px;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  &:disabled {
    background: var(--color-c1-gray);
  }
`;

export const SubmitBtn = styled.button`
  width: 40%;
  height: 5vh;
  font-size: 14px;
  background-color: var(--color-main);
  border: 0;
  border-radius: 8px;
  color: white;
`;
export const CancleBtn = styled.button`
  width: 40%;
  height: 5vh;
  font-size: 14px;
  border: 0;
  border-radius: 8px;
  background-color: var(--color-default);
  color: var(--color-gray);
`;

export const GoBackBtn = styled.button`
  width: 50%;
  margin-top: 5%;
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

export const GuideBtn = styled.button`
  margin-right: 20px;
  border-radius: 60%;
  background-color: white;
  border: white;
  -webkit-tap-highlight-color: transparent !important;
  :focus {
    outline: none;
  }
`;
export const GuideCancleBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 10px;
  border: none;
  background-color: transparent;
`;

export const HeaderBtn = styled.button`
  background-color: transparent;
  border: none;
  width: 108px;
`;

export const NavigateBtn = styled.button<{ $active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding-top: 5px;
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

  color: ${(props) => (props.$active ? 'var(--color-main)' : 'black')};
`;
