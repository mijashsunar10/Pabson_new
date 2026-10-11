"use client";

import React from 'react';
import styles from './PresidentMessageHome.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PresidentMessageHome() {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.backgroundPattern}></div>
      
      <div className={styles.container}>
        <div className={styles.contentGrid}>
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className={styles.textColumn}
          >
            <span className={styles.subtitle}>Message from the Leadership</span>
            <h2 className={styles.mainTitle}>President's <span>Message</span></h2>
            
            <svg className={styles.quoteIcon} fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            
            <p className={styles.messageExcerpt}>
              &ldquo;Namaste and warm greetings! Education is the foundation of a progressive, responsible, and prosperous society. Private schools in Kaski have been making a significant contribution to Nepal’s educational development by providing quality education, promoting innovation, embracing technology, and nurturing the knowledge, skills, character, creativity, and confidence of our young generation. Together, let us build better schools, empower better learners, and create a better future.&rdquo;
            </p>
            
            <div className={styles.authorInfo}>
              <h3 className={styles.authorName}>Shadananda Gautam</h3>
              <p className={styles.authorRole}>President, PABSON Kaski</p>
            </div>
            
            <Link href="/about/president-message" className={styles.readMoreBtn}>
              Read Full Message
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className={styles.imageColumn}
          >
            <div className={styles.decorativeBox}></div>
            <div className={styles.imageWrapper}>
              <Image 
                src="/image.webp"
                alt="Shadananda Gautam - President"
                fill
                style={{ objectFit: 'cover', objectPosition: 'top' }}
                className={styles.presidentImage}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
