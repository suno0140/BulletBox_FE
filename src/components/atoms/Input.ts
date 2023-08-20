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

export const FormEmailInput = styled.input`
  width: 80%;
  border: 0px;
  font-size: 14px;
  font-family: 'NanumGothic';
  font-weight: bold;
  background: transparent;
  border-radius: 25px;
  ::placeholder {
    font-family: 'NanumGothic';
    font-size: 14px;
    font-weight: bold;
    color: var(--color-c1-gray);
    padding-right: 1em;
  }
`;

export const CategoryInput = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 10%;
  width: 98%;
  height: 10%;
  border-radius: 10px;
  border: 1px solid var(--color-defalut);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
  font-size: 1rem;
  font-weight: bold;

  &::placeholder {
    font-size: 14px;
    font-color: var(--color-gray);
  }
`;
