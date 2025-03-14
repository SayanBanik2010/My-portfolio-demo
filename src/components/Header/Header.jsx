import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link
import styles from './Header.module.css';

const Header = () => {
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
      const mode = document.body;
      if(mode.classList.contains('menu-active')){
        mode.classList.remove('menu-active');
      }
  }, [location.pathname]);

  const toggleMenu = () => {
    document.body.classList.toggle('menu-active');
    setIsMenuOpen(!isMenuOpen);
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
