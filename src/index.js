import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Launchpad from './pages/Launchpad';
import Essence from './pages/Essence';
import Accademia from './pages/Accademia';
import Expertise from './pages/Expertise';
import Craft from './pages/Craft';
import Verified from './pages/Verified';
import One_Pager from './pages/One-Pager';
import LinkUp from './pages/LinkUp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Launchpad />} />
        <Route path="/essence" element={<Essence />} />
        <Route path="/accademia" element={<Accademia />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/craft" element={<Craft />} />
        <Route path="/verified" element={<Verified />} />
        <Route path="/One-Pager" element={<One_Pager />} />
        <Route path="/LinkUp" element={<LinkUp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
