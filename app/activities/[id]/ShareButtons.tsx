"use client";

import React from 'react';
import styles from './eventDetail.module.css';

export default function ShareButtons({ title }: { title: string }) {
  const handleShare = (platform: string) => {
    alert(`Successfully shared "${title}" on ${platform}!`);
  };

  const handleCopy = () => {
    alert('Link copied to clipboard!');
  };

  return (
    <div className={styles.shareLinks}>
      <button onClick={() => handleShare('Facebook')} className={styles.shareBtn}>Facebook</button>
      <button onClick={() => handleShare('Twitter')} className={styles.shareBtn}>Twitter</button>
      <button onClick={handleCopy} className={styles.shareBtn}>Copy Link</button>
    </div>
  );
}
