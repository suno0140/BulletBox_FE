import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Start from '@pages/Start';
import Login from '@pages/Login';
import Signup from '@pages/Signup';
import Mypage from '@pages/Mypage';
import Layout from '@layout/Layout';
import LoginLayout from '@layout/LoginLayout';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LoginLayout />}>
          <Route path="/" element={<Start />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route element={<Layout />}>
          <Route path="/mypage" element={<Mypage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
