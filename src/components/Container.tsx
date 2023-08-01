import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LayoutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 360px;
  height: 100vh;
  background-color: var(--color-light-gray);
  font-size: 1.5rem;
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
  height: 720px;
  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;

export const PageContainer = styled.div`
  width: 360px;
  height: 616px;
  background-color: white;
  overflow: auto;
`;

export const RelativeDiv = styled.div`
  position: relative;
  width: 100%;
`;
