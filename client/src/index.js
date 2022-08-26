import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IntroPage from './pages/IntroPage';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import RecipeList from './pages/RecipeList';
import Recipe from './pages/Recipe';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<IntroPage />} />
            <Route path="/index" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/recipes" element={<RecipeList />} />
            <Route path="/recipe/:id" element={<Recipe />} />
        </Routes>
    </BrowserRouter>
);

