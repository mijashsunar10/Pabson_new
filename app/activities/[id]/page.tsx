import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { events } from '../../../data/events';
import styles from './eventDetail.module.css';
import ShareButtons from './ShareButtons';

interface EventDetailPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return events.map((event) => ({
    id: event.id.toString(),
  }));
}

export async function generateMetadata({ params }: EventDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const event = events.find(e => e.id === parseInt(id, 10));
  if (!event) return {};

  return {
    title: { absolute: `${event.title} | PABSON Kaski` },
    description: event.description,
    alternates: {
      canonical: `/activities/${event.id}/`,
    },
    openGraph: {
      title: `${event.title} | PABSON Kaski`,
      description: event.description,
      url: `/activities/${event.id}/`,
      images: [{ url: event.image, alt: event.title }],
    },
  };
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const resolvedParams = await params;
  const eventId = parseInt(resolvedParams.id, 10);
  const event = events.find(e => e.id === eventId);

  if (!event) {
    notFound();
  }

  return (
    <main className={styles.pageWrapper}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <Image 
          src={event.image} 
          alt={event.title} 
          fill 
          style={{ objectFit: 'cover' }}
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}>
          <div className={styles.container}>
            <span className={styles.categoryBadge}>{event.category}</span>
            <h1 className={styles.title}>{event.title}</h1>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.contentGrid}>
          
          {/* Main Content */}
          <div className={styles.mainContent}>
            <div className={styles.metaInfo}>
              <div className={styles.metaItem}>
                <svg fill="currentColor" viewBox="0 0 24 24" className={styles.metaIcon}>
                  <path d="M19 4h-3V2h-2v2h-4V2H8v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM5 20V12h14v8H5zm14-10H5V6h14v4zM10 14h4v4h-4z"/>
                </svg>
                <span>{event.date}</span>
              </div>
              <div className={styles.metaItem}>
                <svg fill="currentColor" viewBox="0 0 24 24" className={styles.metaIcon}>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
                </svg>
                <span>{event.location}</span>
              </div>
            </div>

            <div className={styles.description}>
              <h2>About the Event</h2>
              <p>{event.description}</p>
            </div>
            
            <div className={styles.actionSection}>
              <Link href="/join-us" className={styles.registerBtn}>
                Register for Event
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h3>Quick Summary</h3>
              <ul className={styles.summaryList}>
                <li>
                  <strong>Category:</strong> {event.category}
                </li>
                <li>
                  <strong>Date:</strong> {event.date}
                </li>
                <li>
                  <strong>Location:</strong> {event.location}
                </li>
              </ul>
            </div>
            
            <div className={styles.sidebarCard}>
              <h3>Share this Event</h3>
              <ShareButtons title={event.title} />
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}
