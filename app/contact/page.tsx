import React from 'react';
import ContactSection from '../../components/ContactSection';
import styles from './page.module.css';

export default function ContactPage() {
  return (
    <main className={styles.main}>
      {/* Contact Section Component */}
      <ContactSection />
    </main>
  );
}
