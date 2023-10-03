import { styled } from 'styled-components';

export const DiaryText = styled.textarea`
  margin-top: 20px;
  padding-left: 7px;
  border: none;
  background-color: var(--color-default);
  resize: none;
  font-size: 12px;
  font-weight: bold;
  height: 30vh;
  line-height: 17px;
  color: var(--color-dark-gray);
  ::placeholder {
    text-align: center;
    font-size: 12px;
    font-weight: bold;
  }
  :focus {
    outline: none;
  }
`;
