import { EmotionBtnProps } from '@components/molecules/EmotionButton';
import { css, styled } from 'styled-components';

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
export const ModalCancleBtn = styled.button`
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

export const MypageBtn = styled.button`
  flex: 1;
  font-size: 14px;
  font-weight: bold;
  margin-top: 5%;
  padding: 8px 0;
  background: none;
  border: none;

  &:active,
  &:hover {
    border: none;
    border-bottom: 4px solid var(--color-main);
    border-radius: 4px;
  }
`;

export const CategoryBtn = styled.button<{ $backgroundColor?: string }>`
  width: 124px;
  height: 48px;
  font-size: 16px;
  font-weight: bold;
  color: #3e3e3e;
  border-radius: 10px;
  border: none;
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor || 'var(--color-default)'};

  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
`;

export const TodoCategoryBtn = styled.button<{
  $backgroundColor?: string;
  $isSelected?: boolean;
}>`
  width: 40%;
  height: 4vh;
  font-size: 14px;
  font-weight: bold;
  color: #3e3e3e;
  border-radius: 10px;
  border: none;
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor || 'var(--color-default)'};

  // 선택됐을 때의 box-shadow
  ${(props) =>
    props.$isSelected &&
    css`
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.6);
    `}
`;

export const ModalCheckBtn = styled.button`
  width: 45%;
  height: 75%;
  font-size: 14px;
  border-radius: 8px;
  border: none;
  font-weight: bold;
  color: black;
  background-color: var(--color-light-gray);

  &:hover {
    background-color: var(--color-main);
    color: white;
  }
`;

export const SelectBtn = styled.button<{
  value?: string;
  $categoryColor?: string;
}>`
  width: 13%;
  height: 22%;
  border-radius: 4px;
  margin-right: 4%;
  border: ${({ value, $categoryColor }) =>
    value === $categoryColor
      ? '5px solid white'
      : '1px solid var(--color-light-gray)'};
  background-color: ${({ value }) => value};
  box-shadow: ${({ value, $categoryColor }) =>
    value === $categoryColor ? '0px 0px 4px rgba(0, 0, 0, 0.3)' : 'none'};
`;

export const SearchCancleBtn = styled.button`
  background-color: var(--color-default);
  border: 1px;
`;

export const EditBtn = styled.button`
  width: 60%;
  height: 20px;
  border: none;
  background-color: transparent;
`;

export const EmotionBtn = styled.button<EmotionBtnProps>`
  width: 28px;
  height: 28px;
  padding: 0;
  margin: 0 3px;
  border: none;
  background-color: transparent;
  fill: ${({ $id, $emotion }) =>
    $id === $emotion ? 'var(--color-main)' : 'var(--color-gray)'};
  & > svg {
    pointer-events: none;
  }
`;

export const GuestLoginBtn = styled.button`
  font-size: 15px;
  font-family: 'HeirofLightBold';
  background-color: white;
  color: var(--color-main);
  width: 50%;
  height: 3vh;
  margin-top: 20px;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;
