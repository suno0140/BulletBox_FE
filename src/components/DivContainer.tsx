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

export const EmailFormDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 5vh;
  border: solid 2px var(--color-main);
  border-radius: 25px;
`;

export const StartTextDiv = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 50px 0;
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
    font-size: 11px;
    font-weight: bold;
    color: var(--color-main);
  }

  span {
    color: var(--color-gray);
    font-size: 11px;
    font-weight: bold;
  }
`;

export const LogoutBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  margin-left: 80px;
  color: var(--color-main);
  font-weight: bold;
`;

export const MyDetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  margin-left: 14px;
  font-size: 14px;
  letter-spacing: 0.4px;
`;
