"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
import styles from "./BottomNavBar.module.scss";

export function BottomNavBar() {
  const router = useRouter();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown((current) => (current === menu ? null : menu));
  };

  const handleNavigate = (path) => {
    setActiveDropdown(null);
    router.push(path);
  };

  return (
    <nav className={styles["bottom-nav"]}>
      <div className={styles["bottom-nav__container"]}>
        <button
          type="button"
          className={clsx(
            styles["bottom-nav__item"],
            styles["bottom-nav__item--home"],
          )}
          onClick={() => handleNavigate("/")}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </button>

        <button
          type="button"
          className={clsx(
            styles["bottom-nav__item"],
            styles["bottom-nav__item--link"],
          )}
          onClick={() => handleNavigate("/platform")}
        >
          <span>Platform</span>
        </button>

        <button
          type="button"
          className={clsx(
            styles["bottom-nav__item"],
            styles["bottom-nav__item--link"],
          )}
          onClick={() => handleNavigate("/about-us")}
        >
          <span>About Us</span>
        </button>

        <div
          className={clsx(
            styles["bottom-nav__item"],
            styles["bottom-nav__item--dropdown"],
          )}
        >
          <button
            type="button"
            className={styles["bottom-nav__button"]}
            onClick={() => toggleDropdown("company")}
          >
            <span>Company</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            className={clsx(styles["bottom-nav__buttonIcon"], {
              [styles["bottom-nav__buttonIcon--open"]]:
                activeDropdown === "company",
            })}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          {activeDropdown === "company" ? (
            <div className={styles["bottom-nav__dropdown"]}>
              <button
                type="button"
                onClick={() => handleNavigate("/contact-us")}
                className={styles["bottom-nav__dropdown-item"]}
              >
                Contact Us
              </button>
              <button
                type="button"
                onClick={() => handleNavigate("/faq")}
                className={styles["bottom-nav__dropdown-item"]}
              >
                FAQ
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
}

