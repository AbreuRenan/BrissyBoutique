import HeroSection from "./HeroSection";
import BenefitsSections from "./BenefitsSections";
import SocialProfSection from "./SocialProfSection";
import Contato from "./Contato";
import NossaLojaSection from "./NossaLojaSection";
import ComoChegarSections from "./ComoChegarSections";
import LastCTASection from "./LastCTASection";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <BenefitsSections />
      <SocialProfSection />
      <Contato />
      <NossaLojaSection />
      <ComoChegarSections />
      <LastCTASection />
      <Footer />
    </>
  );
}

export default Home;
