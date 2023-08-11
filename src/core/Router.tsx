import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Start from '@pages/Start';
import Login from '@pages/Login';
import Signup from '@pages/Signup';
import Mypage from '@pages/Mypage';
import Layout from '@components/molecules/MainLayout';
import LoginLayout from '@components/molecules/StartLayout';
import Main from '@pages/Main';
import Search from '@pages/Search';
import Diary from '@pages/Diary';
import DailyLog from '@pages/DailyLog';
import DailyLogAdd from '@pages/DailyLogAdd';

import { Toaster } from 'react-hot-toast';
import LoadingIndicator from '@components/molecules/LodingIndicator';

const Router = () => {
  const [loading, setLoading] = useState(false);

  return (
    <BrowserRouter>
      {loading && <LoadingIndicator />}
      <Routes>
        <Route element={<LoginLayout />}>
          <Route path="/" element={<Start />} />
          <Route path="/login" element={<Login setLoading={setLoading} />} />
          <Route path="/signup" element={<Signup setLoading={setLoading} />} />
        </Route>

        <Route element={<Layout />}>
          <Route path="/mypage" element={<Mypage setLoading={setLoading} />} />
          <Route path="/main" element={<Main setLoading={setLoading} />} />
          <Route path="/search" element={<Search />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/dailys" element={<DailyLog />} />
          <Route path="/dailyAdd" element={<DailyLogAdd />} />
        </Route>
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};

export default Router;
