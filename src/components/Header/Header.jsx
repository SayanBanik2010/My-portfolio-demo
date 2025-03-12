import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
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
    document.body.classList.toggle('light-mode');
  };

  return (
    <header className={`${styles.header} ${lightMode ? styles.lightMode : ''}`}>
      <div className={styles.logo}>
        <img src="My picture.png" alt="Logo" />
      </div>
      
      <nav className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
        <Link to="/">Launchpad</Link>
        <Link to="/essence">Essence</Link>
        <Link to="/accademia">Accademia</Link>
        <Link to="/expertise">Expertise</Link>
        <Link to="/craft">Craft</Link>
        <Link to="/verified">Verified</Link>
        <Link to="/one-pager">One-Pager</Link>
        <Link to="/linkup">LinkUp</Link>
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
