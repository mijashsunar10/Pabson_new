"use client";

import React, { useState, useMemo } from 'react';
import styles from './committeePage.module.css';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { members } from '../../../data/members';

export default function ExecutiveCommitteePage() {
  const [statusFilter, setStatusFilter] = useState<"Active" | "Past">("Active");
  const [categoryFilter, setCategoryFilter] = useState<string>("All");

  const categories = [
    "All",
    "Kaski Executive Committee",
    "Chief Advisor",
    "Senior Advisor",
    "Advisor",
    "Academic Advisor",
    "Central Executive Committee",
    "Province President"
  ];

  const filteredMembers = useMemo(() => {
    return members.filter(member => {
      const matchesStatus = member.status === statusFilter;
      const matchesCategory = categoryFilter === "All" || member.category === categoryFilter;
      return matchesStatus && matchesCategory;
    });
  }, [statusFilter, categoryFilter]);

  return (
    <main className={styles.pageWrapper}>
      <header className={styles.pageHeader}>
        <h1 className={styles.title}>Executive Committee</h1>
        <p className={styles.subtitle}>
          Meet the dedicated team of leaders, advisors, and visionaries driving PABSON Kaski forward.
        </p>
      </header>

      <div className={styles.container}>
        
        <div className={styles.controlsContainer}>
          {/* Main Toggle: Active / Past */}
          <div className={styles.mainToggle}>
            <button 
              className={`${styles.toggleBtn} ${statusFilter === "Active" ? styles.active : ""}`}
              onClick={() => { setStatusFilter("Active"); setCategoryFilter("All"); }}
            >
              Active Members
            </button>
            <button 
              className={`${styles.toggleBtn} ${statusFilter === "Past" ? styles.active : ""}`}
              onClick={() => { setStatusFilter("Past"); setCategoryFilter("All"); }}
            >
              Past Members
            </button>
          </div>

          {/* Sub Tabs: Roles */}
          <div className={styles.tabsContainer}>
            {categories.map(cat => (
              <button
                key={cat}
                className={`${styles.tabBtn} ${categoryFilter === cat ? styles.active : ""}`}
                onClick={() => setCategoryFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className={styles.membersGrid}>
          <AnimatePresence>
            {filteredMembers.length > 0 ? (
              filteredMembers.map((member) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={member.id} 
                  className={styles.memberCard}
                >
                  <div className={styles.imageWrapper}>
                    <Image 
                      src={member.image}
                      alt={member.name}
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'top' }}
                    />
                  </div>
                  <div className={styles.cardContent}>
                    <h2 className={styles.memberName}>{member.name}</h2>
                    <p className={styles.memberRole}>{member.role}</p>
                    {member.school && (
                      <p className={styles.memberSchool}>{member.school}</p>
                    )}
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={styles.noResults}
              >
                No members found in this category.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}
