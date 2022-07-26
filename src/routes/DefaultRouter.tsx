import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout';
import Admin from '../pages/admin';
import Apply from '../pages/apply';
import Landing from '../pages/landing';
import Login from '../pages/login';

function DefaultRouter() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/apply' element={<Apply />} />
      <Route element={<AdminLayout />}>
        <Route path='/admin' element={<Admin />} />
      </Route>
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default DefaultRouter;
