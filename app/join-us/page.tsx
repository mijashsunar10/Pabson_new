"use client";

import React, { useState } from 'react';
import styles from './joinUs.module.css';
import { motion, AnimatePresence } from 'framer-motion';

type TabType = 'participant' | 'presenter' | 'partner';

export default function JoinUsPage() {
  const [activeTab, setActiveTab] = useState<TabType>('participant');

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  return (
    <main className={styles.pageWrapper}>
      {/* Decorative Orbs */}
      <div className={styles.orb1}></div>
      <div className={styles.orb2}></div>

      <div className={styles.container}>
        <header className={styles.pageHeader}>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.title}
          >
            Join <span>Us</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.subtitle}
          >
            Become a part of the PABSON Kaski community. Register below.
          </motion.p>
        </header>

        <div className={styles.formContainer}>
          {/* Tabs */}
          <div className={styles.tabsWrapper}>
            <button 
              className={`${styles.tabBtn} ${activeTab === 'participant' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('participant')}
            >
              Participant
            </button>
            <button 
              className={`${styles.tabBtn} ${activeTab === 'presenter' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('presenter')}
            >
              Presenter
            </button>
            <button 
              className={`${styles.tabBtn} ${activeTab === 'partner' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('partner')}
            >
              Partner / Exhibitor
            </button>
          </div>

          <div className={styles.formContent}>
            <AnimatePresence mode="wait">
              {activeTab === 'participant' && (
                <motion.form key="participant" variants={tabVariants} initial="hidden" animate="visible" exit="exit" className={styles.formGrid}>
                  <h2 className={styles.formTitle}>Registration Form For Participant</h2>
                  
                  <div className={styles.inputGroup}>
                    <label>Full Name *</label>
                    <input type="text" placeholder="Enter Full Name" required />
                  </div>
                  
                  <div className={styles.inputGroup}>
                    <label>Email *</label>
                    <input type="email" placeholder="Enter your Email Address" required />
                  </div>
                  
                  <div className={styles.inputGroup}>
                    <label>Phone Number *</label>
                    <input type="tel" placeholder="Enter Phone Number" required />
                  </div>
                  
                  <div className={styles.inputGroup}>
                    <label>School Name *</label>
                    <input type="text" placeholder="Enter School Name" required />
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Province *</label>
                    <input type="text" placeholder="Enter Province" required />
                  </div>

                  <div className={styles.inputGroup}>
                    <label>District *</label>
                    <input type="text" placeholder="Enter District" required />
                  </div>

                  <div className={styles.inputGroup}>
                    <label>VDC/Municipality *</label>
                    <input type="text" placeholder="Enter Municipality" required />
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Ward *</label>
                    <input type="text" placeholder="Enter Ward" required />
                  </div>

                  <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                    <label>Photo (Passport Size) *</label>
                    <div className={styles.fileUpload}>
                      <input type="file" id="participant-photo" accept="image/*" />
                      <label htmlFor="participant-photo" className={styles.fileBtn}>Upload Image</label>
                      <span className={styles.fileNote}>Note: Please upload an image size less than 200KB</span>
                    </div>
                  </div>

                  <div className={`${styles.submitWrapper} ${styles.fullWidth}`}>
                    <button type="button" onClick={() => alert('Registration Submitted Successfully!')} className={styles.submitBtn}>Register</button>
                  </div>
                </motion.form>
              )}

              {activeTab === 'presenter' && (
                <motion.form key="presenter" variants={tabVariants} initial="hidden" animate="visible" exit="exit" className={styles.formGrid}>
                  <h2 className={styles.formTitle}>Registration Form For Presenter</h2>

                  <div className={styles.inputGroup}>
                    <label>Presentation Title *</label>
                    <input type="text" placeholder="Enter Presentation Title" required />
                  </div>

                  <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                    <label>Abstract *</label>
                    <textarea placeholder="Enter Abstract" rows={3} required></textarea>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Presenter's Name *</label>
                    <input type="text" placeholder="Enter Presenter Name" required />
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Organization *</label>
                    <input type="text" placeholder="Enter Organization" required />
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Position *</label>
                    <input type="text" placeholder="Enter Position" required />
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Relevant Experience *</label>
                    <input type="text" placeholder="Enter Relevant Experience" required />
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Phone Number *</label>
                    <input type="tel" placeholder="Enter Phone Number" required />
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Email *</label>
                    <input type="email" placeholder="Enter your Email Address" required />
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Presentation Style *</label>
                    <input type="text" placeholder="Enter Presentation Style" required />
                  </div>

                  <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                    <label>Content Outline *</label>
                    <textarea placeholder="Write your Content Outline" rows={3} required></textarea>
                  </div>

                  <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                    <label>Presenter's Image *</label>
                    <div className={styles.fileUpload}>
                      <input type="file" id="presenter-image" accept="image/*" />
                      <label htmlFor="presenter-image" className={styles.fileBtn}>Upload Image</label>
                    </div>
                  </div>

                  <div className={`${styles.submitWrapper} ${styles.fullWidth}`}>
                    <button type="button" onClick={() => alert('Registration Submitted Successfully!')} className={styles.submitBtn}>Register</button>
                  </div>
                </motion.form>
              )}

              {activeTab === 'partner' && (
                <motion.form key="partner" variants={tabVariants} initial="hidden" animate="visible" exit="exit" className={styles.formGrid}>
                  <h2 className={styles.formTitle}>Registration Form For Partner</h2>

                  <div className={styles.inputGroup}>
                    <label>Organization Name *</label>
                    <input type="text" placeholder="Enter Organization Name" required />
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Contact Person Name *</label>
                    <input type="text" placeholder="Contact Person Name" required />
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Position *</label>
                    <input type="text" placeholder="Enter Position" required />
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Email *</label>
                    <input type="email" placeholder="Enter your Email Address" required />
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Phone Number *</label>
                    <input type="tel" placeholder="Enter Phone Number" required />
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Area Address *</label>
                    <input type="text" placeholder="Enter Area" required />
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Province *</label>
                    <input type="text" placeholder="Enter Province" required />
                  </div>

                  <div className={styles.inputGroup}>
                    <label>District *</label>
                    <input type="text" placeholder="Enter District" required />
                  </div>

                  <div className={styles.inputGroup}>
                    <label>VDC/Municipality *</label>
                    <input type="text" placeholder="Enter Municipality" required />
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Ward *</label>
                    <input type="text" placeholder="Enter Ward" required />
                  </div>

                  <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                    <label>Organization Image *</label>
                    <div className={styles.fileUpload}>
                      <input type="file" id="partner-image" accept="image/*" />
                      <label htmlFor="partner-image" className={styles.fileBtn}>Upload Image</label>
                    </div>
                  </div>

                  <div className={`${styles.submitWrapper} ${styles.fullWidth}`}>
                    <button type="button" onClick={() => alert('Registration Submitted Successfully!')} className={styles.submitBtn}>Register</button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
}
