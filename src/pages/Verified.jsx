import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import BinaryRain from "../components/BinaryRain/BinaryRain";
import ThemeSwitch from "../components/ThemeSwitch/ThemeSwitch";
import VerifiedSection from "../components/VerifiedSection/VerifiedSection";
import Particles from "../components/WhiteParticles/Particles";
import styles from "./Verified.module.css"; // Import CSS

const Verified = () => {
  return (
    <div className={styles.verifiedContainer}>
      <BinaryRain />
      <ThemeSwitch />

      <div className={styles.contentWrapper}>
        {/* Verified Section */}
        <div className={styles.verifiedContent}>
          <h2>Verified Credentials</h2>
          <p>All certifications and badges are authentic and verified.</p>
          <VerifiedSection />
        </div>

        {/* Floating Particles */}
        <Particles />
      </div>
    </div>
  );
};

export default Verified;
