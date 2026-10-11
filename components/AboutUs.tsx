"use client";

import styles from './AboutUs.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.dotPattern}></div>
      
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className={styles.sectionHeader}
        >
          <div className={styles.titleWrapper}>
            <span className={styles.subtitle}>Know More</span>
            <h2 className={styles.mainTitle}>About Us</h2>
          </div>
          <p className={styles.headerDescription}>
            Fostering academic excellence and holistic development in Kaski since our inception.
          </p>
        </motion.div>

        <div className={styles.contentGrid}>
          {/* Restored 3 Image Layout */}
          <div className={styles.imageGallery}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
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
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
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
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
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
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className={styles.textContent}
          >
            <h3 className={styles.contentTitle}>
              Discover <span className={styles.accentText}>PABSON</span> Kaski
            </h3>
            <div className={styles.textDivider}></div>
            
            <div className={styles.featuresList}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className={styles.featureText}>
                  <h4>Empowering Institutions</h4>
                  <p>Providing resources, guidance, and a collaborative environment for schools.</p>
                </div>
              </div>
              
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className={styles.featureText}>
                  <h4>Academic Excellence</h4>
                  <p>Nurturing tomorrow's leaders through superior academic and extracurricular programs.</p>
                </div>
              </div>
            </div>

            <p className={styles.description}>
              Our commitment is deeply rooted in modern educational practices while keeping our cultural heritage alive. We ensure students are equipped with the best opportunities to succeed on a global stage.
            </p>
            
            <Link href="/about/introduction" className={styles.ctaButton}>
              <span className={styles.btnText}>More About Us</span>
              <span className={styles.btnIconWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.arrowIcon} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
