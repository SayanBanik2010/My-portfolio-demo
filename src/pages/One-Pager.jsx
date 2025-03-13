import React from "react";
import Cloud from "../components/Cloud/Cloud";
import Particles from "../components/WhiteParticles/Particles";
import CvCard from "../components/CVCard/CVCard";
import BinaryRain from "../components/BinaryRain/BinaryRain";
import ThemeSwitch from "../components/ThemeSwitch/ThemeSwitch";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./One-Pager.module.css"; // Import CSS

export default function One_Pager() {
  return (
    <div className={styles.onePagerContainer}>
      <BinaryRain />
      <ThemeSwitch />

      <div className={styles.contentWrapper}>
        {/* Floating Clouds */}
        <Cloud top={10} left={10} />
        <Cloud top={30} left={50} />
        <Cloud top={60} left={20} />
        <Particles />

        {/* CV Card */}
        <div className={styles.cvContainer}>
          <h2>My Resume</h2>
          <p>Here’s a snapshot of my experience and skills.</p>
          <CvCard />
        </div>
      </div>
    </div>
  );
}
