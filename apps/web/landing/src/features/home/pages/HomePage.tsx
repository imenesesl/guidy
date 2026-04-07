import { Header } from '../organisms/Header';
import { HeroSection } from '../organisms/HeroSection';
import { FeaturesSection } from '../organisms/FeaturesSection';
import { BenefitsSection } from '../organisms/BenefitsSection';
import { StartFreeSection } from '../organisms/StartFreeSection';
import { Footer } from '../organisms/Footer';
import styles from './HomePage.module.css';

export function HomePage(): React.JSX.Element {
  return (
    <div className={styles['page']}>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <BenefitsSection />
        <StartFreeSection />
      </main>
      <Footer />
    </div>
  );
}
