import AboutSection from '../../components/AboutSection';
import HeroSection from '../../components/HeroSection';
import ServicesSection from '../../components/ServicesSection';
import ProjectsSection from '../../components/ProjectsSection';
import TestimonialsSection from '../../components/TestimonialsSection';
import ContactBanner from '../../components/ContactBanner';

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactBanner />
    </div>
  );
}

export default Home;
