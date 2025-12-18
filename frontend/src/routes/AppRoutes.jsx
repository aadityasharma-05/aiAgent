import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Login from '../screems/Login';
import Register from '../screems/Register';

const AppRoutes = () => {
  return (
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<div>Home</div>} />
       <Route path="/login" element={<Login />} />
       <Route path="/register" element={<Register />} />
     </Routes>
   </BrowserRouter>
  )
}

export default AppRoutes
