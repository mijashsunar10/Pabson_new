"use client";

import React from 'react';
import styles from './CommitteeSection.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { members } from '../data/members';

export default function CommitteeSection() {
  // Show 4 active members on the homepage
  const homeMembers = members.filter(m => m.status === 'Active').slice(0, 4);

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className={styles.sectionHeader}
        >
          <span className={styles.subtitle}>Our Leadership</span>
          <h2 className={styles.mainTitle}>Executive <span>Committee</span></h2>
          <div className={styles.headerUnderline}></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className={styles.membersGrid}
        >
          {homeMembers.map((member) => (
            <motion.div key={member.id} variants={cardVariants} className={styles.memberCard}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                  className={styles.memberImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.btnContainer}
        >
          <Link href="/about/executive-committee" className={styles.viewAllBtn}>
            View All Members
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
