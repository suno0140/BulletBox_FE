import styled from 'styled-components';

export const LayoutBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  max-width: 450px;
  height: 100vh;
  background-color: var(--color-light-gray);
  font-family: 'HeirofLightBold';
`;

export const LayoutDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  color: var(--color-main);
  width: 100%;
  height: 100%;
  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  overflow: auto;
`;
