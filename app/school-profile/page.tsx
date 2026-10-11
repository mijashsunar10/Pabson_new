"use client";

import React, { useState, useEffect, useCallback } from 'react';
import styles from './schoolProfile.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { schoolProfiles, SchoolProfile } from '../../data/schoolProfiles';

const preloaded = new Set<string>();

function preloadImage(src: string) {
  if (preloaded.has(src)) return;
  preloaded.add(src);
  const img = new Image();
  img.decoding = "async";
  img.src = src;
}

export default function SchoolProfilePage() {
  const [selectedProfile, setSelectedProfile] = useState<SchoolProfile | null>(null);

  const openLightbox = (profile: SchoolProfile) => {
    setSelectedProfile(profile);
  };

  const closeLightbox = () => {
    setSelectedProfile(null);
  };

  const goToNext = useCallback(() => {
    if (!selectedProfile) return;
    const currentIndex = schoolProfiles.findIndex(p => p.id === selectedProfile.id);
    const nextIndex = (currentIndex + 1) % schoolProfiles.length;
    setSelectedProfile(schoolProfiles[nextIndex]);
  }, [selectedProfile]);

  const goToPrev = useCallback(() => {
    if (!selectedProfile) return;
    const currentIndex = schoolProfiles.findIndex(p => p.id === selectedProfile.id);
    const prevIndex = (currentIndex - 1 + schoolProfiles.length) % schoolProfiles.length;
    setSelectedProfile(schoolProfiles[prevIndex]);
  }, [selectedProfile]);

  // Preload the full image of neighbours so next/prev opens instantly
  useEffect(() => {
    if (!selectedProfile) return;
    const index = schoolProfiles.findIndex(p => p.id === selectedProfile.id);
    const total = schoolProfiles.length;
    for (const offset of [1, -1, 2]) {
      preloadImage(schoolProfiles[(index + offset + total) % total].src);
    }
  }, [selectedProfile]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProfile) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProfile, goToNext, goToPrev]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProfile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProfile]);

  return (
    <main className={styles.pageWrapper}>
      {/* ---------------- PAGE HEADER ---------------- */}
      <header className={styles.pageHeader}>
        <div className={styles.headerBadge}>
          <span className={styles.headerBadgeDot}></span>
          PABSON Kaski Directory
        </div>
        <h1 className={styles.title}>
          School <span>Profile</span>
        </h1>
        <p className={styles.subtitle}>
          Official directory and institutional profiles of member private and boarding schools affiliated with PABSON Kaski.
        </p>
      </header>

      <div className={styles.container}>
        {/* ---------------- STATS & HINT BAR ---------------- */}
        <div className={styles.statsBar}>
          <div className={styles.countText}>
            <span>Affiliated Schools:</span>
            <span className={styles.countBadge}>{schoolProfiles.length} Member Schools</span>
          </div>
          <div className={styles.infoHint}>
            <svg
              className={styles.infoIcon}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            Click any profile card to view enlarged details
          </div>
        </div>

        {/* ---------------- PROFILES GRID ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.profileGrid}
        >
          {schoolProfiles.map((profile, index) => (
            <div
              key={profile.id}
              className={styles.card}
              onClick={() => openLightbox(profile)}
              onPointerEnter={() => preloadImage(profile.src)}
              onTouchStart={() => preloadImage(profile.src)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  openLightbox(profile);
                }
              }}
              aria-label={`View profile for ${profile.title}`}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={profile.thumb}
                  alt={profile.title}
                  width={profile.thumbWidth}
                  height={profile.thumbHeight}
                  loading={index < 6 ? "eager" : "lazy"}
                  fetchPriority={index < 3 ? "high" : "auto"}
                  decoding="async"
                  className={styles.profileImage}
                />
              </div>
              <div className={styles.cardFooter}>
                <span className={styles.cardNumber}>Profile #{profile.id}</span>
                <span className={styles.viewAction}>
                  View Full Card
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ---------------- LIGHTBOX MODAL ---------------- */}
      <AnimatePresence>
        {selectedProfile && (
          <div
            className={styles.modalOverlay}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="School Profile Details"
          >
            <div
              className={styles.modalBox}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={styles.modalHeader}>
                <h3 className={styles.modalTitle}>
                  <span>School Profile</span>
                  <span className={styles.modalBadge}>#{selectedProfile.id}</span>
                </h3>
                <button
                  className={styles.closeButton}
                  onClick={closeLightbox}
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              {/* Modal Body with Image & Navigation */}
              <div className={styles.modalBody}>
                <button
                  className={`${styles.modalNavBtn} ${styles.prevBtn}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrev();
                  }}
                  aria-label="Previous profile"
                >
                  ‹
                </button>

                {/* Cached thumbnail shows instantly underneath while the full image loads */}
                <img
                  key={selectedProfile.id}
                  src={selectedProfile.src}
                  alt={`Profile card ${selectedProfile.id}`}
                  width={selectedProfile.width}
                  height={selectedProfile.height}
                  decoding="async"
                  fetchPriority="high"
                  className={styles.modalImage}
                  style={{
                    backgroundImage: `url(${selectedProfile.thumb})`,
                    backgroundSize: "100% 100%",
                  }}
                />

                <button
                  className={`${styles.modalNavBtn} ${styles.nextBtn}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  aria-label="Next profile"
                >
                  ›
                </button>
              </div>

              {/* Modal Footer */}
              <div className={styles.modalFooter}>
                <span className={styles.counterLabel}>
                  Profile {selectedProfile.id} of {schoolProfiles.length}
                </span>
                <a
                  href={encodeURI(selectedProfile.rawSrc)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.openOriginalLink}
                >
                  Open Original Image
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
