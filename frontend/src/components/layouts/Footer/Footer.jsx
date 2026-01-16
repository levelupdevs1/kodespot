import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.logo}>KODESPOT</div>
          <p>
            Innovation meets excellence — Building solutions that drive results.
          </p>
        </div>

        <div className={styles.cols}>
          <div>
            <h4>Getting started</h4>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Learning Hub</a>
            <a href="#">Blog</a>
          </div>
          <div>
            <h4>Support</h4>
            <a href="#">Contact us</a>
            <a href="#">Contribute</a>
          </div>
          <div>
            <h4>Quick Links</h4>
            <a href="#">Community guides</a>
            <a href="#">Installation guides</a>
          </div>
          <div>
            <h4>Connect with us</h4>
            <a href="#">Twitter</a>
            <a href="#">Telegram</a>
            <a href="#">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
