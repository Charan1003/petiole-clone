import HowWeWork from "@/components/HowWeWork";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ImpactStats from "@/components/ImpactStats";
import Mission from "@/components/Mission";
import FocusAreas from "@/components/FocusAreas";
import SuccessStories from "@/components/SuccessStories";
import Testimonials from "@/components/Testimonials";
import ProgramSnapshot from "@/components/ProgramSnapshot";
import DonationPlans from "@/components/DonationPlans";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ImpactStats />
        <Mission />
        <FocusAreas />
        <HowWeWork />
        <SuccessStories />
        <Testimonials />
        <ProgramSnapshot />
        <DonationPlans />
      </main>
      <Footer />
    </>
  );
}
