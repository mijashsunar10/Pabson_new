import React from 'react';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          
          {/* Left Column: Contact Info */}
          <div className={styles.infoColumn}>
            <h2 className={styles.title}>Contact PABSON Kaski</h2>
            <p className={styles.description}>
              PABSON Kaski District is committed to the unity, professional development, and the overall improvement of the education sector among private and boarding schools in the region.
            </p>
            
            <div className={styles.card}>
              <ul className={styles.contactList}>
                <li className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <svg className={styles.icon} fill="currentColor" viewBox="0 0 24 24" style={{ color: '#f39c12' }}><path d="M19 4h-3V2h-2v2h-4V2H8v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM5 20V12h14v8H5zm14-10H5V6h14v4zM10 14h4v4h-4z"/></svg>
                  </div>
                  <span>PABSON Kaski District</span>
                </li>
                
                <li className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <svg className={styles.icon} fill="currentColor" viewBox="0 0 24 24" style={{ color: '#e74c3c' }}><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>
                  </div>
                  <span>Khasi Bazaar, Pokhara, Nepal, 33700</span>
                </li>
                
                <li className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <svg className={styles.icon} fill="currentColor" viewBox="0 0 24 24" style={{ color: '#555' }}><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                  </div>
                  <a href="tel:061-551633" className={styles.contactLink}>061-551633</a>
                </li>
                
                <li className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <svg className={styles.icon} fill="currentColor" viewBox="0 0 24 24" style={{ color: '#3498db' }}><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                  </div>
                  <a href="mailto:kaskipabson@gmail.com" className={styles.contactLink}>kaskipabson@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Map */}
          <div className={styles.mapColumn}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.243581698065!2d84.01294077548505!3d28.199911175903676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995950472e26d41%3A0x9cb8d0c3b35483ba!2sPABSON%20Kaski!5e0!3m2!1sen!2snp!4v1786701347877!5m2!1sen!2snp" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="strict-origin-when-cross-origin"
              className={styles.map}
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
