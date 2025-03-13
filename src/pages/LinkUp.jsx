import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import BinaryRain from "../components/BinaryRain/BinaryRain";
import ThemeSwitch from "../components/ThemeSwitch/ThemeSwitch";
import Cloud from "../components/Cloud/Cloud";
import Particles from "../components/WhiteParticles/Particles";
import LinkupForm from "../components/LinkUp/LinkUp";
import styles from "./LinkUp.module.css"; // Import CSS

const LinkUp = () => {
  return (
    <div className={styles.linkUpContainer}>
      <BinaryRain />
      <ThemeSwitch />

      <div className={styles.contentWrapper}>
        {/* Floating Clouds */}
        <Cloud top={10} left={10} />
        <Cloud top={30} left={50} />
        <Cloud top={60} left={20} />
        <Particles />

        {/* Contact Form */}
        <div className={styles.formContainer}>
          <h2>Let's Connect</h2>
          <p>Fill out the form below and I'll get back to you soon.</p>
          <LinkupForm />
        </div>
      </div>
    </div>
  );
};

export default LinkUp;
