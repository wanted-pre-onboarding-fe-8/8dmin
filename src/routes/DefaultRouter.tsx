import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Admin from '../pages/admin';
import Apply from '../pages/apply';
import Landing from '../pages/landing';

function DefaultRouter() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/apply' element={<Apply />} />
      <Route path='/admin' element={<Admin />} />
    </Routes>
  );
}

export default DefaultRouter;
