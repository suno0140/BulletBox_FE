import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainLayout from '@components/molecules/MainLayout';
import StartLayout from '@components/molecules/StartLayout';

import { Start } from './Loadable';
import { Login } from './Loadable';
// import { Signup } from './Loadable';
// import { Mypage } from './Loadable';
// import { Main } from './Loadable';
// import { Search } from './Loadable';
// import { Diary } from './Loadable';
// import { DailyLog } from './Loadable';
// import { DailyLogAdd } from './Loadable';
// import { DailyLogUpdate } from './Loadable';

import { Toaster } from 'react-hot-toast';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<StartLayout />}>
          <Route path="/" element={<Start />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
        </Route>

        <Route element={<MainLayout />}>
          {/* <Route path="/mypage" element={<Mypage />} />
          <Route path="/main" element={<Main />} />
          <Route path="/search" element={<Search />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/dailys" element={<DailyLog />} />
          <Route path="/dailyAdd" element={<DailyLogAdd />} />
          <Route path="/dailyUpdate" element={<DailyLogUpdate />} /> */}
        </Route>
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};

export default Router;
