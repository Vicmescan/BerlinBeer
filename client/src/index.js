import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IntroPage from './pages/IntroPage';
import LandingPage from './pages/LandingPage';
import SelectPage from './pages/SelectPage';
import AboutPage from './pages/AboutPage';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<IntroPage />} />
            <Route path="/index" element={<LandingPage />} />
            <Route path="/select" element={<SelectPage />} />
            <Route path="/about" element={<AboutPage />} />
        </Routes>
    </BrowserRouter>
    

);

