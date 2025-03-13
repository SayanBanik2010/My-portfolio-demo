import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import BinaryRain from "../components/BinaryRain/BinaryRain";
import ThemeSwitch from "../components/ThemeSwitch/ThemeSwitch";
import Particles from "../components/WhiteParticles/Particles";
import Cloud from "../components/Cloud/Cloud";
import Thunder from "../components/Thunder/Thunder";
import styles from "./Essence.module.css";

const Essence = () => {
  return (
    <div className={styles.essenceContainer}>
      <BinaryRain />
      <ThemeSwitch />

      <section className={styles.essenceSection}>
        <div className={styles.container}>
          {/* Social Buttons */}
          <div className={styles.socialButtons}>
            {[
              { href: "#", icon: "twitter", color: "#1e90ff" },
              { href: "#", icon: "instagram", color: "#ff00ff" },
              { href: "#", icon: "github", color: "#000" },
              { href: "#", icon: "linkedin", color: "#4267B2" },
            ].map((btn, index) => (
              <a
                key={index}
                href={btn.href}
                className={styles.button}
                style={{ backgroundColor: btn.color }}
              >
                <i className={`fab fa-${btn.icon}`}></i>
              </a>
            ))}
          </div>

          {/* About Section */}
          <h2>Hi there,</h2>
          <p>
            I’m <strong>Sayan Banik</strong>, a tech enthusiast and problem
            solver, passionate about innovation, coding, and building impactful
            digital solutions while continuously expanding my skills in
            React.js.
          </p>
          <ul>
            <li>Skilled in coding but more focused on real-world solutions.</li>
            <li>Exploring React.js and building my projects.</li>
            <li>Passionate about creating impactful digital experiences.</li>
          </ul>
          <p>Check out my work below!</p>
          <a
            href="craft.html"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.exploreButton}
          >
            Explore My Work
          </a>
        </div>
      </section>

      {/* Weather Effects */}
      <Thunder />
      <Cloud top={10} left={10} />
      <Cloud top={30} left={50} />
      <Cloud top={60} left={20} />
      <Particles />
    </div>
  );
};

export default Essence;
