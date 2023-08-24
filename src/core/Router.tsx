import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Start from '@pages/Start';
import Login from '@pages/Login';
import Signup from '@pages/Signup';
import Mypage from '@pages/Mypage';
import MainLayout from '@components/molecules/MainLayout';
import StartLayout from '@components/molecules/StartLayout';
import Main from '@pages/Main';
import Search from '@pages/Search';
import Diary from '@pages/Diary';
import DailyLog from '@pages/DailyLog';
import DailyLogAdd from '@pages/DailyLogAdd';

import { Toaster } from 'react-hot-toast';
import LoadingIndicator from '@components/molecules/LodingIndicator';
import DailyLogUpdate from '@pages/DailyLogUpdate';
import { useSelector } from 'react-redux';

export type RootState = {
  loading: {
    loading: boolean;
  };
};

const Router = () => {
  const loading = useSelector((state: RootState) => state.loading.loading);

  return (
    <BrowserRouter>
      {loading && <LoadingIndicator />}
      <Routes>
        <Route element={<StartLayout />}>
          <Route path="/" element={<Start />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/main" element={<Main />} />
          <Route path="/search" element={<Search />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/dailys" element={<DailyLog />} />
          <Route path="/dailyAdd" element={<DailyLogAdd />} />
          <Route path="/dailyUpdate" element={<DailyLogUpdate />} />
        </Route>
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};

export default Router;
