"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={styles.headerWrapper}>
      {/* Subtle top border gradient */}
      <div className={styles.topBorder}></div>

      {/* ---------------- UPPER HEADER ---------------- */}
      <div className={styles.upperContainer}>
        
        {/* WOW Factor: Animated Image Left */}
        <div className={styles.curvyGraphicLeft} aria-hidden="true">
          <Image
            src="/headerimage/BannerImage.webp"
            alt="Left Decorative Image"
            fill
            className={styles.headerImage}
            priority
            unoptimized
            fetchPriority="high"
          />
        </div>

        {/* WOW Factor: Animated Image Right */}
        <div className={styles.curvyGraphicRight} aria-hidden="true">
          <Image
            src="/headerimage/BannerImage.webp"
            alt="Right Decorative Image"
            fill
            className={styles.headerImageRight}
            priority
            unoptimized
            fetchPriority="high"
          />
        </div>

        {/* Center Main Block: Logo and Titles Perfectly Centered */}
        <div className={styles.centerBlock}>
          <div className={styles.logoWrapper}>
            <Image
              src="/logo/logo.webp"
              alt="PABSON Kaski Logo"
              width={100}
              height={100}
              className={styles.logo}
              priority
              unoptimized
              fetchPriority="high"
            />
          </div>
          
          <div className={styles.textContainer}>
            <p className={styles.motto}>
              &quot;Let All The Private and Boarding Schools Be United&quot;
            </p>
            <p className={styles.titleNepali}>
              निजी तथा आवासीय विद्यालय अर्गनाइजेसन, नेपाल
            </p>
            <p className={styles.titleEnglish}>
              PRIVATE &amp; BOARDING SCHOOLS&apos; ORGANIZATION, NEPAL
            </p>
            <p className={styles.subtitleRed}>(PABSON, KASKI)</p>
            <p className={styles.subtitleBlue}>
              District Executive Committee, Kaski
            </p>
          </div>
        </div>
      </div>
    </header>

      {/* ---------------- LOWER HEADER (NAVIGATION) ---------------- */}
      <nav className={styles.navWrapper}>
        <div className={styles.navContainer}>
          
          <div className={styles.mobileBrand}>
            <Image
              src="/logo/logo.webp"
              alt="PABSON Kaski Logo"
              width={36}
              height={36}
              className={styles.mobileLogo}
              unoptimized
            />
            <span className={styles.mobileBrandText}>PABSON Kaski</span>
          </div>

          <button
            className={styles.mobileToggle}
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>

          <div
            className={`${styles.navListWrapper} ${
              isMobileMenuOpen ? styles.navListWrapperOpen : ""
            }`}
          >
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <Link href="/" className={styles.navLink} onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              
              <li className={styles.navItem}>
                <span className={styles.navLink}>
                  About Us <span className={styles.chevron}>▼</span>
                </span>
                <ul className={styles.dropdown}>
                  <li>
                    <Link href="/about/introduction" className={styles.dropdownLink} onClick={closeMobileMenu}>
                      Introduction
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/president-message" className={styles.dropdownLink} onClick={closeMobileMenu}>
                      President&apos;s Message
                    </Link>
                  </li>
                </ul>
              </li>

              <li className={styles.navItem}>
                <Link href="/about/executive-committee" className={styles.navLink} onClick={closeMobileMenu}>
                  Executive Committee
                </Link>
              </li>
              
              <li className={styles.navItem}>
                <Link href="/school-profile" className={styles.navLink} onClick={closeMobileMenu}>
                  School Profile
                </Link>
              </li>

              <li className={styles.navItem}>
                <Link href="/activities" className={styles.navLink} onClick={closeMobileMenu}>
                  Activities &amp; Events
                </Link>
              </li>
              
              <li className={styles.navItem}>
                <Link href="/gallery" className={styles.navLink} onClick={closeMobileMenu}>
                  Gallery
                </Link>
              </li>
              
              <li className={styles.navItem}>
                <Link href="/contact" className={styles.navLink} onClick={closeMobileMenu}>
                  Contact Us
                </Link>
              </li>
            </ul>

            <div className={styles.ctaContainer}>
              <Link href="/join-us" className={styles.ctaButton} onClick={closeMobileMenu}>
                Join Us 
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px' }}>
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
