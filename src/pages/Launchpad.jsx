import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import BinaryRain from '../components/BinaryRain/BinaryRain';
import ThemeSwitch from '../components/ThemeSwitch/ThemeSwitch';
import styles from './Launchpad.module.css'; // Import the CSS Module
import TypingEffect from '../components/TypingEffect/TypingEffect';

const Launchpad = () => {
    return (
        <div>
            <BinaryRain />
            <ThemeSwitch />
            <Header />
            <div className={styles.contentContainer}>
                <TypingEffect />
                {/* Solar System Section */}
                <section className={styles.solarSystem}>
                    <div className={styles.sun}></div>

                    {/* Orbit Lines */}
                    <div className={styles.orbit} style={{ width: '400px', height: '400px', '--orbit-radius': '200px', animationDuration: '20s' }}></div>
                    <div className={styles.orbit} style={{ width: '500px', height: '500px', '--orbit-radius': '250px', animationDuration: '25s' }}></div>
                    <div className={styles.orbit} style={{ width: '600px', height: '600px', '--orbit-radius': '300px', animationDuration: '30s' }}></div>

                    {/* Planets */}
                    <div className={styles.planet} style={{ '--orbit-radius': '200px', animationDuration: '10s' }}>
                        <img src="icons8-html-5-48.png" alt="HTML" />
                    </div>
                    <div className={styles.planet} style={{ '--orbit-radius': '200px', animationDuration: '12s' }}>
                        <img src="icons8-css-logo-48.png" alt="CSS" />
                    </div>
                    <div className={styles.planet} style={{ '--orbit-radius': '200px', animationDuration: '14s' }}>
                        <img src="icons8-javascript-64.png" alt="JavaScript" />
                    </div>
                    <div className={styles.planet} style={{ '--orbit-radius': '250px', animationDuration: '16s' }}>
                        <img src="icons8-react-native-48.png" alt="React" />
                    </div>
                    <div className={styles.planet} style={{ '--orbit-radius': '250px', animationDuration: '18s' }}>
                        <img src="icons8-node-js-48.png" alt="Node.js" />
                    </div>
                    <div className={styles.planet} style={{ '--orbit-radius': '250px', animationDuration: '20s' }}>
                        <img src="icons8-mongo-db-48.png" alt="MongoDB" />
                    </div>
                    <div className={styles.planet} style={{ '--orbit-radius': '250px', animationDuration: '32s' }}>
                        <img src="icons8-express-js-40.png" alt="Express" />
                    </div>
                    <div className={styles.planet} style={{ '--orbit-radius': '300px', animationDuration: '22s' }}>
                        <img src="icons8-c-48.png" alt="C" />
                    </div>
                    <div className={styles.planet} style={{ '--orbit-radius': '300px', animationDuration: '24s' }}>
                        <img src="icons8-c++-48.png" alt="C++" />
                    </div>
                    <div className={styles.planet} style={{ '--orbit-radius': '300px', animationDuration: '26s' }}>
                        <img src="icons8-java-logo-48.png" alt="Java" />
                    </div>
                    <div className={styles.planet} style={{ '--orbit-radius': '300px', animationDuration: '28s' }}>
                        <img src="icons8-python-48.png" alt="Python" />
                    </div>
                    <div className={styles.planet} style={{ '--orbit-radius': '300px', animationDuration: '30s' }}>
                        <img src="icons8-tailwind-css-48.png" alt="Tailwind" />
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default Launchpad;