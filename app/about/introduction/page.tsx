"use client";

import React from 'react';
import styles from './about.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className={styles.pageWrapper}>
      <div className={styles.dotPattern}></div>
      
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={styles.pageHeader}
        >
          <h1 className={styles.mainTitle}>Introduction to PABSON</h1>
        </motion.div>

        <div className={styles.introGrid}>
          {/* Reusing the beautiful 3-image design for the introduction */}
          <div className={styles.imageGallery}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={styles.imageWrapper1}
            >
              <div className={styles.imageContainer}>
                <Image 
                  src="/heroslider/766861678_1509705854289865_7146653323661408635_n.webp"
                  alt="Students learning"
                  fill
                  style={{ objectFit: 'cover' }}
                  className={styles.image}
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className={styles.imageWrapper2}
            >
              <div className={styles.imageContainer}>
                <Image 
                  src="/heroslider/767001870_1509705164289934_1025649106991358017_n.webp"
                  alt="School activities"
                  fill
                  style={{ objectFit: 'cover' }}
                  className={styles.image}
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className={styles.imageWrapper3}
            >
              <div className={styles.imageContainer}>
                <Image 
                  src="/heroslider/BannerImage.webp"
                  alt="Pabson Kaski events"
                  fill
                  style={{ objectFit: 'cover' }}
                  className={styles.image}
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className={styles.textContent}
          >
            <h2 className={styles.contentTitle}>
              About <span className={styles.accentText}>PABSON</span> Kaski
            </h2>
            <div className={styles.textDivider}></div>
            
            <p className={styles.description}>
              <span className={styles.highlightText}>Private and Boarding Schools' Organization Nepal (PABSON)</span> Kaski is the umbrella organization for all private and boarding schools operating in the Kaski district. Established to protect the rights of private educational institutions, PABSON Kaski has evolved into a cornerstone of academic excellence in the region.
            </p>
            <p className={styles.description}>
              Since our inception, we have been fiercely dedicated to empowering educational institutions with modern resources, expert guidance, and a collaborative environment. Our primary goal is to ensure that every student attending a PABSON-affiliated school receives a world-class education while staying rooted in our rich cultural heritage.
            </p>
            <p className={styles.description}>
              We strive to nurture the leaders of tomorrow by fostering excellence in academics, sports, and extracurricular activities today. Through continuous training programs for teachers and competitive events for students, PABSON Kaski aims to elevate the overall educational standard of the entire district.
            </p>
          </motion.div>
        </div>

        {/* Extended Section with Mission and Vision */}
        <div className={styles.valuesGrid}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className={styles.valueCard}
          >
            <div className={styles.valueIcon}>
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '32px', height: '32px' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className={styles.valueTitle}>Our Mission</h3>
            <p className={styles.valueDesc}>
              To unite all private educational institutions in Kaski under a single umbrella, providing them with a platform for collaboration, mutual growth, and the sharing of innovative educational practices to ensure holistic student development.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className={styles.valueCard}
          >
            <div className={styles.valueIcon}>
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '32px', height: '32px' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className={styles.valueTitle}>Our Vision</h3>
            <p className={styles.valueDesc}>
              To establish Kaski as the leading educational hub of Nepal by continuously uplifting the quality of private education, ensuring every student is globally competitive and locally responsible.
            </p>
          </motion.div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href="/" className={styles.backButton}>
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
