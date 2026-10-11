"use client";

import React from 'react';
import styles from './GallerySectionHome.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function GallerySectionHome() {
  const images = [
    { src: "/English_Language_contest/image.webp", alt: "English Language Skills Contest 2026", class: styles.item1 },
    { src: "/Orientation_Program_for_School_Teachers/image.webp", alt: "Orientation Program for School Teachers", class: styles.item2 },
    { src: "/Chess_competition/image.webp", alt: "PABSON Kaski Chess Competition 2083", class: styles.item3 },
    { src: "/Nepali_Language_Skills_Competition/image.webp", alt: "Nepali Language Skills Competition 2083", class: styles.item4 },
  ];

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className={styles.sectionHeader}
        >
          <span className={styles.subtitle}>Our Memories</span>
          <h2 className={styles.mainTitle}>Photo <span>Gallery</span></h2>
          <div className={styles.headerUnderline}></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className={styles.bentoGrid}
        >
          {images.map((img, idx) => (
            <motion.div 
              key={idx} 
              className={`${styles.galleryItem} ${img.class}`}
              whileHover="hover"
            >
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill 
                style={{ objectFit: 'cover' }} 
                className={styles.image}
              />
              <div className={styles.overlay}>
                <span className={styles.overlayText}>{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className={styles.btnContainer}
        >
          <Link href="/gallery" className={styles.viewAllBtn}>
            View All Photos
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
