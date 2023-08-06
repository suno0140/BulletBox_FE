import { styled } from 'styled-components';

export const TodoTitle = styled.div`
  margin-top: 2%;
  font-size: 16px;
  font-weight: bold;
  color: var(--color-main);
  cursor: pointer;
`;

export const TodoCard = styled.div`
  display: flex;
  align-items: center;
  width: 55%;
  height: 5vh;
  margin-top: 2%;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  color: var(--color-black);
  border: solid 1px var(--color-main);
`;
