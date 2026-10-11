"use client";

import React, { useState } from 'react';
import styles from './galleryPage.module.css';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const galleryData = [
  { id: 1, src: "/heroslider/BannerImage.webp", title: "Annual Sports Meet", category: "Sports" },
  { id: 2, src: "/heroslider/766861678_1509705854289865_7146653323661408635_n.webp", title: "Teacher Training 2026", category: "Academic" },
  { id: 3, src: "/heroslider/767001870_1509705164289934_1025649106991358017_n.webp", title: "Cultural Program", category: "Events" },
  { id: 4, src: "/heroslider/1783846772726WhatsAppImage2026-07-12at2.11.10PM.webp", title: "Awards Ceremony", category: "Events" },
  { id: 5, src: "/heroslider/766207332_1508833827710401_7117965663570819516_n.webp", title: "Executive Meeting", category: "Committee" },
  { id: 6, src: "/heroslider/767190353_1509703547623429_8293500726326952136_n.webp", title: "Province Assembly", category: "Committee" },
  { id: 7, src: "/heroslider/768999958_1508833147710469_7466175845448166458_n.webp", title: "Inter-school Debate", category: "Academic" },
  { id: 8, src: "/heroslider/768999961_1508834367710347_4020965386461396296_n.webp", title: "Science Exhibition", category: "Academic" },
  { id: 9, src: "/English_Language_contest/image.webp", title: "English Language Skills Contest 2026", category: "Academic" },
  { id: 10, src: "/English_Language_contest/image copy.webp", title: "English Language Skills Contest 2026", category: "Academic" },
  { id: 11, src: "/Orientation_Program_for_School_Teachers/image.webp", title: "Orientation Program for School Teachers", category: "Academic" },
  { id: 12, src: "/Orientation_Program_for_School_Teachers/image copy.webp", title: "Orientation Program for School Teachers", category: "Academic" },
  { id: 13, src: "/Chess_competition/image.webp", title: "PABSON Kaski Chess Competition 2083", category: "Sports" },
  { id: 14, src: "/Chess_competition/image copy.webp", title: "PABSON Kaski Chess Competition 2083", category: "Sports" },
  { id: 15, src: "/Nepali_Language_Skills_Competition/image.webp", title: "Nepali Language Skills Competition 2083", category: "Academic" }
];

const categories = ["All", "Events", "Academic", "Sports", "Committee"];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredImages = galleryData.filter(img => 
    activeTab === "All" || img.category === activeTab
  );

  return (
    <main className={styles.pageWrapper}>
      <header className={styles.pageHeader}>
        <h1 className={styles.title}>Visual <span>Journey</span></h1>
        <p className={styles.subtitle}>
          Explore the memorable moments, events, and achievements of PABSON Kaski.
        </p>
      </header>

      <div className={styles.container}>
        
        <div className={styles.filterContainer}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeTab === cat ? styles.active : ""}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className={styles.masonryGrid}>
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                key={img.id} 
                className={styles.masonryItem}
              >
                <div className={styles.imageWrapper}>
                  {/* Using standard img tag for masonry since Next Image requires explicit width/height for layout="responsive", but we want variable heights */}
                  <img src={img.src} alt={img.title} className={styles.image} loading="lazy" decoding="async" />
                </div>
                <div className={styles.overlay}>
                  <span className={styles.overlayCategory}>{img.category}</span>
                  <h3 className={styles.overlayTitle}>{img.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </main>
  );
}
