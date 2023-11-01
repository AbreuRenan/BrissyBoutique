import HeroSection from "./HeroSection";
import BenefitsSections from "./BenefitsSections";
import SocialProfSection from "./SocialProfSection";
import Contato from "./Contato";
import NossaLojaSection from "./NossaLojaSection";
import ComoChegarSections from "./ComoChegarSections";

function Home() {
  return (
    <>
      <HeroSection />
      <BenefitsSections />
      <SocialProfSection />
      <Contato />
      <NossaLojaSection />
      <ComoChegarSections />
    </>
  );
}

export default Home;
