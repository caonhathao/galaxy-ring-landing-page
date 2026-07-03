import FeatureSection from "./_components/feature-section";
import Footer from "./_components/footer";
import Header from "./_components/header";
import HeroSection from "./_components/hero-section";
// import RegistrationSection from "./_components/registration-section";
import SocialProofSection from "./_components/social-proof-section";
import SpecSection from "./_components/spec-section";

import dynamic from "next/dynamic";
const RegistrationSection = dynamic(
  () => import("./_components/registration-section"),
);

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col">
      <Header />
      <HeroSection />
      <FeatureSection />
      <SpecSection />
      <SocialProofSection />
      <RegistrationSection />
      <Footer />
    </div>
  );
}
