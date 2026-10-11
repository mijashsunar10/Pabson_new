"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const sliderImages = [
  "/headerimage/BannerImage.webp",
  "/heroslider/765848993_1508834341043683_8418780619878125673_n.webp",
  "/heroslider/766207332_1508833827710401_7117965663570819516_n.webp",
  "/heroslider/766861678_1509705854289865_7146653323661408635_n.webp",
  "/heroslider/767001870_1509705164289934_1025649106991358017_n.webp",
  "/heroslider/767190353_1509703547623429_8293500726326952136_n.webp",
  "/heroslider/768999958_1508833147710469_7466175845448166458_n.webp",
  "/heroslider/768999961_1508834367710347_4020965386461396296_n.webp",
  "/heroslider/1783846772726WhatsAppImage2026-07-12at2.11.10PM.webp",
];

export default function HeroSlider() {
  return (
    <section className="hero-section">
      <div className="hero-frame">
        {/* Foreground Content */}
        <div className="hero-content">
          <div className="badge">Welcome to</div>
          <h1 className="hero-title">
            PRIVATE & BOARDING SCHOOLS&apos; ORGANIZATION, NEPAL
            <span className="hero-title-highlight">(PABSON, KASKI)</span>
          </h1>
          <p className="hero-subtitle">
            Empowering Private & Boarding Schools in Kaski for a Brighter Future.
          </p>
          <div className="hero-buttons">
            <Link href="/about/introduction" className="primary-btn">Discover More</Link>
            <Link href="/about/executive-committee" className="secondary-btn">Our Members</Link>
          </div>
        </div>

        {/* Swiper Background */}
        <Swiper
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          effect="fade"
          speed={1500}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          loop={true}
          className="my-swiper"
        >
          {sliderImages.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="slide-image-wrapper">
                <Image
                  src={src}
                  alt={`PABSON Slide ${index + 1}`}
                  fill
                  className="slider-image"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  sizes="100vw"
                  priority={index === 0}
                  fetchPriority={index === 0 ? "high" : "low"}
                />
                <div className="image-overlay"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        /* Reset margins on body if not already done globally */
        :global(body) {
          margin: 0;
          background-color: #0f172a;
        }

        .hero-section {
          width: 100%;
          min-height: 100vh;
          padding: 2.5rem; /* Creates the beautiful left/right border effect */
          background-color: #0f172a; /* Dark sleek background */
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          box-sizing: border-box;
        }

        .hero-frame {
          position: relative;
          width: 100%;
          max-width: 1600px;
          height: calc(100vh - 5rem);
          border-radius: 2.5rem;
          overflow: hidden;
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.08);
        }

        .hero-content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 2rem;
          pointer-events: none; /* Let clicks pass through to swiper arrows */
        }

        .badge {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 50px;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
          font-size: 0.85rem;
          margin-bottom: 2rem;
          text-transform: uppercase;
          letter-spacing: 3px;
          animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
          transform: translateY(20px);
        }

        .hero-title {
          font-family: "Times New Roman", Times, serif;
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.3;
          margin: 0 0 1.5rem 0;
          letter-spacing: 0.02em;
          text-shadow: 0 4px 20px rgba(0,0,0,0.8), 0 10px 40px rgba(0,0,0,0.5);
          animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.15s;
          opacity: 0;
          transform: translateY(30px);
          max-width: 1100px;
        }

        .hero-title-highlight {
          color: #e31e24; /* PABSON RED */
          display: block;
          font-size: clamp(1.5rem, 3vw, 2.5rem);
          margin-top: 0.5rem;
          letter-spacing: 2px;
        }

        .hero-subtitle {
          font-size: clamp(1.1rem, 1.5vw, 1.25rem);
          font-weight: 400;
          color: rgba(255, 255, 255, 0.95);
          max-width: 600px;
          margin: 0 0 3.5rem 0;
          line-height: 1.7;
          text-shadow: 0 2px 10px rgba(0,0,0,0.8), 0 4px 25px rgba(0,0,0,0.5);
          animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.3s;
          opacity: 0;
          transform: translateY(30px);
        }

        .hero-buttons {
          display: flex;
          gap: 1.5rem;
          pointer-events: auto; /* Enable clicking on buttons */
          animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.45s;
          opacity: 0;
          transform: translateY(30px);
        }

        .primary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          padding: 1.2rem 3rem;
          font-size: 1.1rem;
          font-weight: 600;
          color: white;
          background: #e31e24;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 10px 25px -5px rgba(227, 30, 36, 0.6);
        }

        .primary-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 35px -5px rgba(227, 30, 36, 0.8);
          background: #ff3339;
        }

        .secondary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          padding: 1.2rem 3rem;
          font-size: 1.1rem;
          font-weight: 600;
          color: white;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
        }

        .secondary-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-4px);
          border-color: rgba(255, 255, 255, 0.6);
          box-shadow: 0 20px 35px -5px rgba(0, 0, 0, 0.5);
        }

        .my-swiper {
          width: 100%;
          height: 100%;
          --swiper-theme-color: #ffffff;
          --swiper-navigation-size: 2rem;
          --swiper-pagination-bullet-inactive-color: #ffffff;
          --swiper-pagination-bullet-inactive-opacity: 0.3;
        }

        /* Move navigation buttons slightly inside to match the rounded corners */
        .swiper-button-next { right: 2rem !important; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.5)); }
        .swiper-button-prev { left: 2rem !important; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.5)); }
        .swiper-pagination { bottom: 2rem !important; }

        .slide-image-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(15, 23, 42, 0.7) 0%,
            rgba(15, 23, 42, 0.9) 100%
          );
          z-index: 1;
        }

        /* Beautiful Slow zoom effect on active slide */
        .slider-image {
          transform: scale(1.1);
          transition: transform 8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .swiper-slide-active .slider-image {
          transform: scale(1);
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .hero-section { padding: 1.5rem; }
          .hero-frame { height: calc(100vh - 3rem); border-radius: 2rem; }
        }

        @media (max-width: 768px) {
          .hero-section { padding: 1rem; }
          .hero-frame { height: calc(100vh - 2rem); border-radius: 1.5rem; }
          .hero-buttons { flex-direction: column; width: 100%; max-width: 300px; gap: 1rem; }
          .primary-btn, .secondary-btn { width: 100%; }
          .swiper-button-next { right: 1rem !important; transform: scale(0.7); }
          .swiper-button-prev { left: 1rem !important; transform: scale(0.7); }
        }
      `}</style>
    </section>
  );
}
