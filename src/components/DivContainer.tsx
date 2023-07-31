import styled from 'styled-components';

export const ImgDiv = styled.div`
  width: 149.29px;
  height: 165px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ContainerBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const StartTextDiv = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 50px 0;
`;

export const BulletBold = styled.span`
  display: flex;
  justify-content: center;
  color: var(--color-main);
  font-size: 14px;
  font-weight: bold;
  font-family: 'HeirofLightBold';
  margin-top: 5px;
  width: 80px;
  height: 21px;
`;

export const JoinMembership = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  color: var(--color-gray);
  font-weight: bold;

  button {
    background-color: transparent;
    border: none;
    font-size: 10px;
    font-family: 'NanumGothic';
    font-weight: bold;
    color: var(--color-main);
  }

  span {
    color: var(--color-gray);
    font-size: 8px;
    font-weight: bold;
  }
`;
