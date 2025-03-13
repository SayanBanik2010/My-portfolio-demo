import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import BinaryRain from "../components/BinaryRain/BinaryRain";
import ThemeSwitch from "../components/ThemeSwitch/ThemeSwitch";
import BlackParticles from "../components/BlackParticles/BlackParticles";
import TypingEffect2 from "../components/TypingEffect2/TypingEffect2";
import styles from "./Accademia.module.css";

const Accademia = () => {
  return (
    <div className={styles.launchpad}>
      <BinaryRain />
      <ThemeSwitch />
      <BlackParticles />

      {/* Academic Journey Map */}
      <section className={styles.lifeMap}>
        <TypingEffect2 />
        <div className={styles.mapContainer}>
          <svg viewBox="0 0 500 500" className={styles.mapBackground}>
            <rect width="500" height="500" className={styles.mapRect}></rect>
            <path
              className={styles.mapPath}
              d="M0,367.82c5.83-4.39,14.42-10.16,25.59-15.34,4.52-2.09,43.19-19.51,79.55-11.93,36.1,7.52,35.75,32.55,78.41,60.23,46.34,30.06,109.47,41.21,123.32,22.1,11.95-16.49-22.61-41.92-13.66-84.6,4.85-23.1,22.33-50.71,47.73-58.52,42.42-13.05,78.83,39.45,102.84,23.86,15.81-10.26.01-32.87,22.73-74.43,5.8-10.62,11.65-21.15,11.93-36.93.28-15.69-5.63-26.64-7.95-32.39-6.66-16.45-6.21-45.15,28.84-98.55.23,146.23.46,292.46.69,438.69H0v-132.18Z"
            ></path>
            <line
              x1="5%"
              y1="67%"
              x2="32%"
              y2="32%"
              className={styles.mapLine}
            />
            <line
              x1="32%"
              y1="32%"
              x2="58%"
              y2="83%"
              className={styles.mapLine}
            />
          </svg>

          <div className={styles.mapCities}>
            {[
              {
                x: 5,
                y: 67,
                name: "Bonoful School\nHowrah\nSalkia\nPrimary Life",
                icon: "🏫",
              },
              {
                x: 32,
                y: 32,
                name: "Howrah Zilla\nSchool\n10th-50%\n12th-67%",
                icon: "🏫",
              },
              {
                x: 58,
                y: 83,
                name: "Techno India\nUniversity\nBCA - 7.72",
                icon: "🏛️",
              },
            ].map((city, index) => (
              <div
                key={index}
                style={{ "--x": city.x, "--y": city.y }}
                className={styles.mapCity}
              >
                <div className={styles.mapCityLabel}>
                  <span
                    className={`${styles.mapCitySign} ${styles.anim}`}
                    data-icon={city.icon}
                  >
                    {city.name.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line} <br />
                      </React.Fragment>
                    ))}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accademia;
