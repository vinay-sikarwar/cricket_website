// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import SidebarNav from "./components/SideNavbar";
import MobileNav from "./components/MobileNav";
import Merch from "./components/Merch";
import HostMatch from "./components/HostMatch";
import LiveScore from "./components/LiveScore";
import Footer from "./components/Footer";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import FantasyLeague from "./components/FantasyLeague";
import Gallery from "./components/Home/Gallery";

function Layout({ children }) {
  return (
    <div className="min-h-screen md:ml-20">
      <SidebarNav />
      {children}
      <Footer />
      <MobileNav />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route path="/merch" element={
            <Layout>
              <Merch />
            </Layout>
          }
        />
        <Route path="/hostmatch" element={
            <Layout>
              <HostMatch />
            </Layout>
          }
        />
        <Route path="/scores" element={
            <Layout>
              <LiveScore />
            </Layout>
          }
        />
        <Route path="/registration" element={
            <Layout>
              <RegistrationForm />
            </Layout>
          }
        />
        <Route path="/fantasy" element={
            <Layout>
              <FantasyLeague />
            </Layout>
          }
        />
        <Route path="/gallery" element={
            <Layout>
              <Gallery />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
