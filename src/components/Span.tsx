import { styled } from 'styled-components';
export const GrayBoldText = styled.span`
  font-size: 12px;
  color: var(--color-gray);
  font-weight: bold;
`;

export const DefaultBoldText = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

export const StartBulletBoxText = styled.span`
  font-size: 30px;
  font-weight: bold;
  font-family: 'HeirofLightBold';
  margin-top: auto;
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

export const MainTitle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 50%;
  height: 22px;
  color: var(--color-main);
  font-family: 'HeirofLightBold';
`;

export const AlarmSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 10px;
  margin: 6px;
  padding-left: 25px;
  font-size: 12px;
  font-weight: bold;
`;
