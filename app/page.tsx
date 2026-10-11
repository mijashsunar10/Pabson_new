import HeroSlider from "../components/HeroSlider";
import AboutUs from "../components/AboutUs";
import ActivitiesSection from "../components/ActivitiesSection";
import GallerySectionHome from "../components/GallerySectionHome";
import CommitteeSection from "../components/CommitteeSection";
import PresidentMessageHome from "../components/PresidentMessageHome";
import ContactSection from "../components/ContactSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSlider />
      <AboutUs />
      <PresidentMessageHome />
      <ActivitiesSection />
      <CommitteeSection />
      <GallerySectionHome />
      <ContactSection />
    </main>
  );
}
