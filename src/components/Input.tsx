import { styled } from 'styled-components';

export const FormInput = styled.input`
  width: 100%;
  height: 5vh;
  margin-top: 5%;
  border: solid 2px var(--color-main);
  font-size: 14px;
  font-family: 'NanumGothic';
  font-weight: bold;
  background: white;
  border-radius: 25px;
  ::placeholder {
    font-family: 'NanumGothic';
    font-size: 14px;
    font-weight: bold;
    color: var(--color-c1-gray);
    padding-right: 1em;
  }
`;
