// App.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import SidebarNav from "./components/SideNavbar";
import MobileNav from "./components/MobileNav";
import Merch from "./components/Merch";
import HostMatch from "./components/HostMatch";
import LiveScore from "./components/LiveScore";
import Footer from "./components/Footer";
import AboutUs from "./components/Home/AboutUs";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm"
import FantasyLeague from "./components/FantasyLeague";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="min-h-screen md:ml-20">
        <SidebarNav />
        <Home />
        <Footer />
        <MobileNav />
      </div>
    ),
  },
  {
    path: "/merch",
    element: (
      <div className="min-h-screen md:ml-20">
        <SidebarNav />
        <Merch />
        <MobileNav />
      </div>
    ),
  },
  {
    path: "/hostmatch",
    element: (
      <div className="min-h-screen md:ml-20">
        <SidebarNav />
        <HostMatch />
        <MobileNav />
      </div>
    ),
  },
  {
    path: "/scores",
    element: (
      <div className="min-h-screen md:ml-20">
        <SidebarNav />
        <LiveScore />
        <MobileNav />
      </div>
    ),
  },
  {
    path: "/registration",
    element: (
      <div className="min-h-screen md:ml-20">
        <SidebarNav />
        <RegistrationForm />
        <MobileNav />
      </div>
    ),
  },
  {
    path: "/fantasy",
    element: (
      <div className="min-h-screen md:ml-20">
        <SidebarNav />
        <FantasyLeague />
        <MobileNav />
      </div>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
