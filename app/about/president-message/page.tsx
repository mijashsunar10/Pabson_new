"use client";

import React from 'react';
import styles from './presidentMessage.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PresidentMessagePage() {
  return (
    <main className={styles.pageWrapper}>
      <header className={styles.pageHeader}>
        <h1 className={styles.title}>President's Message</h1>
        <p className={styles.subtitle}>
          A vision for the future of private education in Kaski from our leadership.
        </p>
      </header>

      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.contentWrapper}
        >
          <div className={styles.profileHeader}>
            <div className={styles.imageContainer}>
              <Image 
                src="/image.webp"
                alt="Shadananda Gautam"
                fill
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
            </div>
            <div className={styles.authorInfo}>
              <h2>Shadananda Gautam</h2>
              <p className={styles.role}>President, PABSON Kaski</p>
            </div>
          </div>

          <div className={styles.messageBody}>
            <svg className={styles.quoteIcon} fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <p style={{ fontWeight: 600, color: '#1e3a8a', fontSize: '1.2rem' }}>
              Namaste and warm greetings!
            </p>
            <p>
              It is my great pleasure to welcome you to the official website of the Private and Boarding Schools’ Organization Nepal (PABSON), Kaski.
            </p>
            <p>
              Education is the foundation of a progressive, responsible, and prosperous society. Private schools in Kaski have been making a significant contribution to Nepal’s educational development by providing quality education, promoting innovation, embracing technology, and nurturing the knowledge, skills, character, creativity, and confidence of our young generation.
            </p>
            <p>
              PABSON Kaski is committed to bringing private schools together under a common platform, promoting professional excellence, protecting the legitimate interests of educational institutions, and strengthening cooperation among schools, parents, students, local government, and other stakeholders. We believe that meaningful educational transformation is possible only through collaboration, mutual respect, accountability, and a shared commitment to quality.
            </p>
            <p>
              As education continues to evolve in the face of technological advancement and global challenges, our schools must prepare students not merely for examinations, but for life. We therefore emphasize quality, character, critical thinking, life skills, innovation, discipline, inclusiveness, and responsible citizenship.
            </p>
            <p>
              Through this website, we aim to provide timely information, organizational updates, educational resources, notices, activities, and opportunities for meaningful engagement among our member schools and stakeholders.
            </p>
            <p>
              I sincerely appreciate the dedication of school founders, principals, teachers, staff, parents, and all those working tirelessly for the betterment of education. Let us continue to work together to make Kaski a model district for quality and progressive education.
            </p>
            <p style={{ fontWeight: 600, color: '#0f172a' }}>
              Together, let us build better schools, empower better learners, and create a better future.
            </p>
            <p>
              With best wishes,
            </p>

            <div className={styles.signature}>
              <div>Shadananda Gautam</div>
              <div style={{ fontSize: '1.1rem', color: '#475569', fontStyle: 'normal', fontWeight: '600', marginTop: '0.25rem' }}>
                President<br />
                PABSON Kaski
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
