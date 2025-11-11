"use client";

import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.copyright}>
            © 2024 Helxon Inc. All rights reserved.
          </p>
          <p className={styles.tagline}>
            Protecting enterprises worldwide since 2024
          </p>
        </div>
      </div>
    </footer>
  );
}

