import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css';
import { Button, Stack } from '@mui/material';
import SubscriptionPage from './Pages/SubscriptionPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/subscription" element={<SubscriptionPage />} />
        <Route path="/domain" element={<h1>Domain</h1>} />
        <Route path="/add-ons" element={<h1>Add-ons</h1>} />
        <Route path="/checkout" element={<h1>Checkout</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
