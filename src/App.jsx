import React, { useState } from "react";
import HeroSlider from "./components/Home/HeroSlider";
import Tournaments from "./components/Home/Tournaments";
import TopTeams from "./components/Home/TopTeams";
import PastMatches from "./components/Home/PastMatches";
import Gallery from "./components/Home/Gallery";
import AboutUs from "./components/Home/AboutUs";

function App() {
  const [modalData, setModalData] = useState({
    title: '',
    content: '',
    isOpen: false,
  });

  const openModal = (match) => {
    const matchData = {
      match1: {
        title: 'Hunters XI vs Gladiators',
        content: 'Hunters XI won by 50 runs.',
      },
      match2: {
        title: 'Gladiators vs Warriors XI',
        content: 'Gladiators won by 10 runs.',
      },
      match3: {
        title: 'Warriors XI vs Hunters XI',
        content: 'Warriors XI won by 2 wickets.',
      },
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
      <Header />
      <HeroSlider />
      <Tournaments />
      {/* Pass openModal to TopTeams */}
      <TopTeams openModal={openModal} />
      <Gallery />
      {/* Pass openModal to PastMatches */}
      <PastMatches openModal={openModal} />
      {modalData.isOpen && <Modal modalData={modalData} closeModal={closeModal} />}
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
