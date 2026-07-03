import Header from "./_components/header";
import HeroSection from "./_components/hero-section";

import dynamic from "next/dynamic";

const FeatureSection = dynamic(() => import("./_components/feature-section"));
const SpecSection = dynamic(() => import("./_components/spec-section"));
const SocialProofSection = dynamic(
  () => import("./_components/social-proof-section"),
);
const RegistrationSection = dynamic(
  () => import("./_components/registration-section"),
);
const Footer = dynamic(() => import("./_components/footer"));

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col">
      <header>
        <Header />
      </header>
      <main id="main-content">
        <HeroSection />
        <FeatureSection />
        <SpecSection />
        <SocialProofSection />
        <RegistrationSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
