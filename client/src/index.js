import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IntroPage from './Pages/IntroPage';
import LandingPage from './Pages/LandingPage';
import SelectPage from './Pages/SelectPage';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<IntroPage />} />
            <Route path="/index" element={<LandingPage />} />
            <Route path="/select" element={<SelectPage />} />
        </Routes>
    </BrowserRouter>
    

);

