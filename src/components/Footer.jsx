"use client";

import Link from "next/link";
import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.meta}>
            <p className={styles.copyright}>
              © 2024 Helxon Inc. All rights reserved.
            </p>
            <p className={styles.tagline}>
              Protecting enterprises worldwide since 2024
            </p>
          </div>

          <div className={styles.links}>
            <Link href="/privacy-policy" className={styles.link}>
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className={styles.link}>
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

