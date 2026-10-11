"use client";

import React from 'react';
import styles from './activities.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { events } from '../../data/events';

export default function ActivitiesPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <main className={styles.pageWrapper}>
      <header className={styles.pageHeader}>
        <h1 className={styles.title}>Activities & Events</h1>
        <p className={styles.subtitle}>
          Explore all the upcoming and past events organized by PABSON Kaski to foster educational excellence.
        </p>
      </header>

      <div className={styles.container}>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={styles.cardsGrid}
        >
          {events.map((event) => (
            <motion.div key={event.id} variants={cardVariants}>
              <Link href={`/activities/${event.id}`} className={styles.eventCard} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                <div className={styles.imageWrapper}>
                  <span className={styles.categoryBadge}>{event.category}</span>
                  <Image 
                    src={event.image}
                    alt={event.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className={styles.eventImage}
                  />
                </div>
                
                <div className={styles.cardContent}>
                  <div className={styles.eventDate}>
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {event.date}
                  </div>
                  
                  <h2 className={styles.eventTitle}>{event.title}</h2>
                  <p className={styles.eventDesc}>{event.description}</p>
                  
                  <div className={styles.cardFooter}>
                    <div className={styles.location}>
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
                    </div>
                    
                    <span className={styles.readMore}>
                      More Details
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
