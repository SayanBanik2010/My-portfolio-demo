import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Launchpad from "./pages/Launchpad";
import Essence from "./pages/Essence";
import Accademia from "./pages/Accademia";
import Expertise from "./pages/Expertise";
import Craft from "./pages/Craft";
import Verified from "./pages/Verified";
import One_Pager from "./pages/One-Pager";
import LinkUp from "./pages/LinkUp";
import reportWebVitals from "./reportWebVitals";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <div className="content">
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
      </div>
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
