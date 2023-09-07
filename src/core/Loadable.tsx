import React from 'react';
import { useSelector } from 'react-redux';

import StartPage from '@pages/Start';
import LoginPage from '@pages/Login';
// import SignupPage from '@pages/Signup';
// import MypagePage from '@pages/Mypage';
// import MainPage from '@pages/Main';
// import SearchPage from '@pages/Search';
// import DiaryPage from '@pages/Diary';
// import DailyLogPage from '@pages/DailyLog';
// import DailyLogAddPage from '@pages/DailyLogAdd';
// import DailyLogUpdatePage from '@pages/DailyLogUpdate';
import LoadingIndicator from '@components/molecules/LodingIndicator';

const selector = (state: any) => state.globalReducer.requestLoading;

const LoadingSpinner = () => {
  const requestLoading: boolean = useSelector(selector);

  return requestLoading ? <LoadingIndicator /> : null;
};

const withSpinner = (Component: any) => (props: any) => {
  return (
    <>
      <Component {...props} />
      <LoadingSpinner />
    </>
  );
};

export const Start = withSpinner(StartPage);
export const Login = withSpinner(LoginPage);
// export const Signup = withSpinner(SignupPage);
// export const Mypage = withSpinner(MypagePage);
// export const Main = withSpinner(MainPage);
// export const Search = withSpinner(SearchPage);
// export const Diary = withSpinner(DiaryPage);
// export const DailyLog = withSpinner(DailyLogPage);
// export const DailyLogAdd = withSpinner(DailyLogAddPage);
// export const DailyLogUpdate = withSpinner(DailyLogUpdatePage);
