import React from 'react';
import styles from './ThemeSwitch.module.css';

const ThemeSwitch = () => {
  const toggleTheme = () => {
    document.body.classList.toggle('light-mode');
  };

  return (
    <label className={styles.switch}>
      <input type="checkbox" onClick={toggleTheme} />
      <span className={styles.slider}></span>
    </label>
  );
};

export default ThemeSwitch;