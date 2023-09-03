import { styled } from 'styled-components';

export const MainForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 15%;
  width: 70%;
  background-color: white;
  border-radius: 8px;
`;

export const SearchForm = styled.form`
  margin: 0 auto;
  margin-top: 7%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-default);
  border: 2px solid var(--color-light-gray);
  border-radius: 30px;
  width: 80%;
  height: 5%;
`;
