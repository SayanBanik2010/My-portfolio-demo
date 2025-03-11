import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Launchpad from './pages/Launchpad';
import Essence from './pages/Essence';
import Accademia from './pages/Accademia';
import CraftSection from './components/CraftSection/CraftSection';
import VerifiedSection from './components/VerifiedSection/VerifiedSection';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Launchpad /> */}
    {/* <Essence /> */}
    {/* <Accademia /> */}
    {/* <CraftSection/> */}
    <VerifiedSection/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
