import React from 'react';
import styles from './LinkUp.module.css'; // Import the CSS module

const LinkupForm = () => {
  return (
    <div className={styles.styledWrapper}>
      <div className={styles.formCard1}>
        <div className={styles.formCard2}>
          <form className={styles.form}>
            <p className={styles.formHeading}>Get In Touch</p>
            <div className={styles.formField}>
              <input required placeholder="Name" className={styles.inputField} type="text" />
            </div>
            <div className={styles.formField}>
              <input required placeholder="Email" className={styles.inputField} type="email" />
            </div>
            <div className={styles.formField}>
              <input required placeholder="Phone" className={styles.inputField} type="tel" />
            </div>
            <div className={styles.formField}>
              <input required placeholder="Subject" className={styles.inputField} type="text" />
            </div>
            <div className={styles.formField}>
              <textarea required placeholder="Message" cols={30} rows={3} className={styles.inputField} defaultValue={""} />
            </div>
            <button className={styles.sendMessageBtn}>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LinkupForm;