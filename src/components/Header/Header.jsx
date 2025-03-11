import React, { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  const toggleMenu = () => {
    document.body.classList.toggle('menu-active');
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setLightMode(!lightMode);
    document.body.classList.toggle('light-mode'); // This applies the global class
  };

  return (
    <header className={`${styles.header} ${lightMode ? styles.lightMode : ''}`}>
      <div className={styles.logo}>
        <img src="My picture.png" alt="Logo" />
      </div>
      
      <nav className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
        <a href="home.html">Launchpad</a>
        <a href="essence.html">Essence</a>
        <a href="accademia.html">Accademia</a>
        <a href="expertise.html">Expertise</a>
        <a href="craft.html">Craft</a>
        <a href="verified.html">Verified</a>
        <a href="one-pager.html">One-Pager</a>
        <a href="linkup.html">LinkUp</a>
      </nav>

      {/* Hamburger Menu */}
      <div 
        className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`} 
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
};

export default Header;