import React, { useState } from "react";
import HeroSlider from "./Home/HeroSlider";
import Modal from "./Modal"
import Tournaments from "./Home/Tournaments";
import TopTeams from "./Home/TopTeams";
import Gallery from "./Home/Gallery";
import AboutUs from "./Home/AboutUs";
import SidebarNav from "./SideNavbar";
import Hero from "./HeroNew";
import MobileNav from "./MobileNav";
import Unleash from "./Unleash";
import LiveScore from "./LiveScore";

function Home() {
  const [modalData, setModalData] = useState({
    title: '',
    content: '',
    isOpen: false,
  });

  const openModal = (match) => {
    const matchData = {
      top1: {
        title: 'Hunters XI',
        content: 'Known for their aggressive gameplay and consistent performances, Hunters XI has dominated XYZ organizations tournaments. They are top contenders with a strong batting lineup and a dynamic bowling attack.'
      },
      top2: {
        title: 'Gladiators',
        content: 'Gladiators are a well-balanced team, with a mix of experienced players and rising stars. Their teamwork and strategic approach have made them formidable opponents in XYZ tournaments.'
      },
      top3: {
        title: 'Warrior XI',
        content: 'Warrior XI is known for their resilience and never-give-up attitude. They’ve earned their place as one of the top teams through hard work, skill, and determination, making them a favorite in XYZ’s competitions.'
      },
    };
    setModalData({ ...matchData[match], isOpen: true });
  };

  const closeModal = () => {
    setModalData({ title: '', content: '', isOpen: false });
  };

  return (
    <div className="bg-gray-100">
      <Hero />
      <Unleash />
      <div id="tournaments"><Tournaments /></div>
      <LiveScore />
      <TopTeams openModal={openModal} />
      <div id="gallery"><Gallery /></div>
      {modalData.isOpen && <Modal modalData={modalData} closeModal={closeModal} />}
      <div id="about"><AboutUs /></div>
    </div>
  );
}

export default Home;