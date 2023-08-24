import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ColumnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const EmptyContainer = styled.div`
  height: 10%;
`;

export const ImgContainer = styled.div`
  height: 18%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const EmailFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5%;
  width: 100%;
  height: 5vh;
  border: solid 2px var(--color-main);
  border-radius: 25px;
`;

export const StartTextContainer = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 15%;
`;

export const JoinMembershipContainer = styled.div`
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

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  margin-left: 14px;
  font-size: 14px;
  letter-spacing: 0.4px;
`;

export const AddInputButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  width: 100%;
  margin-top: 3vh;
`;

export const TodoAddContainer = styled.div`
  margin-top: 2%;
  font-size: 16px;
  font-weight: bold;
  color: var(--color-main);
  cursor: pointer;
`;

export const LayoutContainer = styled.div`
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

export const LayoutSubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  color: var(--color-main);
  width: 100%;
  height: 100%;
  container-shadow:
    rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;

export const PageContainer = styled.div`
  width: 100vw;
  max-width: 450px;
  height: 100%;
  margin-top: 72px;
  margin-bottom: 58px;
  background-color: white;
  overflow: auto;
`;

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  max-width: 450px;
  height: 58px;
  bottom: 0;
  margin: 0%, auto;
  position: fixed;
  bottom: 0;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding-top: 20px;
  width: 100vw;
  max-width: 450px;
  height: 52px;
  position: fixed;
  top: 0;
`;

export const SpaceContainer = styled.div`
  width: 36px;
  margin-left: 20px;
`;

export const HeaderLogoContainer = styled.div`
  font-size: 18px;
  font-weight: bold;
  font-family: 'HeirofLightBold';
`;

export const LoadingIndicatorContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavigateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-top: solid 1px var(--color-light-gray);
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContentContainer = styled.div<{ height?: number }>`
  position: relative;
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 280px;
  height: ${(props) => (props.height ? `${props.height}px` : '520px')};
`;

export const SliderContainer = styled.div`
  .slick-dots {
    .slick-active {
      button::before {
        color: var(--color-main);
        font-size: 14px;
      }
    }
    button::before {
      color: var(--color-gray);
      font-size: 12px;
    }
  }
`;

export const MainPageContaiver = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 450px;
  margin-top: 10px;
  min-height: 300px;
  border-radius: 16px;
  background-color: var(--color-default);
  /* box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3); */
  overflow: visible;
`;

export const DateContainer = styled.div`
  font-size: 14px;
  font-weight: 900;
  padding: 6px 0;
  text-align: center;
  margin-top: 10px;
`;

export const MainTodoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  gap: 10px;
`;

export const TodoAddContiner = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: var(--color-main);
  cursor: pointer;
`;

export const TodoCardContainer = styled.div<{
  $todoContent: string;
}>`
  display: flex;
  width: 100%;
  height: ${({ $todoContent }) => ($todoContent.length > 19 ? '60px' : '40px')};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
`;

export const CategoryContainer = styled.div<{ $backgroundColor: string }>`
  width: 3.5%;
  border-radius: 4px;
  background-color: ${(props) => props.$backgroundColor || 'inherit'};
`;

export const BulletContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 6px;
  height: 100%;
  background-color: var(--color-default);
`;
export const TodoContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-right: 3%;
  height: 100%;
  padding-left: 6px;
  border-radius: 0 8px 8px 0;
  background-color: var(--color-default);
`;

export const MypageListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CategoryListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 60%;
  gap: 0.8rem;
  flex-wrap: wrap;
  margin-left: 12%;
`;

export const SelectColorContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const ModalBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 15%;
  margin: 20px auto;
`;

export const TodoCateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px auto;
  gap: 15px;
  padding: 15px 20px 20px 20px;
  width: 80%;
  background-color: var(--color-default);
  border-radius: 8px;
`;

export const TodoCateBtnContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  margin-left: 12%;
`;

export const CalendarContainer = styled.div`
  position: relative;
  .react-calendar {
    width: 100%;
    height: 50%;
    margin-top: 1%;
    background: transparent;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
  }
  .react-calendar__navigation {
    display: flex;
    width: 45%;
    margin: 0 auto !important;
    margin-bottom: 10px !important;
    background-color: transparent !important;
    & > button {
      background-color: transparent !important;
    }
  }
  .react-calendar__navigation__label > span {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100% !important;
    font-size: 14px;
    font-weight: 700;
    color: var(--color-main);
  }
  .navigation__next-button {
    margin: 0 !important;
    padding: 0 !important;
    & > svg {
      margin: 0 !important;
    }
  }
  .react-calendar__month-view__weekdays {
    width: 74% !important;
    height: 10% !important;
  }
  .react-calendar__month-view__weekdays__weekday {
    background-color: white !important;
    font-size: 14px;
    & > abbr[title] {
      text-decoration: none;
    }
  }
  .react-calendar__month-view__days {
    margin-top: 5px !important;
    & > :active,
    & > :hover {
      color: black;
      border: 0 !important;
    }
    & > :focus {
      color: white;
      border: 0 !important;
    }
  }
  .react-calendar__month-view__days__day {
    display: flex !important;
    flex-direction: column;
    justify-content: flex-start !important;
    & :active {
      color: black;
      border: 0 !important;
    }
    & > abbr {
      padding: 5px 7px;
      font-size: 12px;
      font-weight: bold;
    }
    & > p {
      font-size: 10px;
      padding: 6px 9px;
      border-radius: 4px;
      font-weight: bold;
      color: var(--color-gray);
      background-color: var(--color-default);
      margin: 5px 0 0 0;
      pointer-events: none;
    }
  }
  .react-calendar--doubleView {
    width: 700px;
  }
  .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
  }
  .react-calendar--doubleView .react-calendar__viewContainer > * {
    width: 50%;
    margin: 0.5em;
  }
  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-container-sizing: border-Container;
    -webkit-container-sizing: border-Container;
    container-sizing: border-Container;
  }
  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
    padding: 0;
    & > svg {
      margin: 0 !important;
    }
  }
  .react-calendar button:enabled:hover {
    cursor: pointer;
  }
  .react-calendar__navigation {
    margin: 1rem;
  }
  .react-calendar__navigation button:disabled {
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
  }
  .react-calendar__month-view__weekdays {
    font-weight: bold;
    font-size: 0.75rem;
    width: 88%;
    height: 40px;
    color: var(--color-gray);
  }

  .react-calendar__month-view__weekdays__weekday {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2%;
    background-color: #e6e6e6;
    border-radius: 5px;
    margin: 1%;
  }
  .react-calendar__month-view__weekdays__weekday--weekend {
    color: var(--color-main);
  }
  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.65em;
    font-weight: bold;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: #e6e6e6;
  }
  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 1em 0.2em;
  }
  .react-calendar__tile {
    height: 50px !important;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 100%;
    padding: 0;
  }
  .react-calendar__tile:disabled {
    background-color: #e6e6e6;
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    border-radius: 5px;
    /* color: white; */
    & > abbr {
      padding: 8px 7px !important;
    }
    & > p {
      padding: 2px 2px;
    }
  }

  .react-calendar__tile--now {
    border-radius: 8px;
    border: 0;
    & > abbr {
      width: 26px;
      height: 26px;
      padding: 8px 7px;
      border-radius: 50%;
      color: var(--color-main);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .react-calendar__tile--hasActive {
    background: white;
    border-radius: 5px;
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: gray;
    border-radius: 5px;
  }
  .react-calendar__tile--active {
    & > abbr {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--color-main);
      color: white;
      width: 26px;
      height: 26px;
      padding: 8px 7px;
      border-radius: 50%;
    }
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #e6e6e6;
  }
`;
