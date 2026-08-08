import Advantages from "@/components/Advantages";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Process from "@/components/process";
import ImpactStats from "@/components/ImpactStats";
import GivingBack from "@/components/GivigBack";
import LoanApplication from "@/components/LoanApplication";
import FAQ from "@/components/FAQs";
import FinalCTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="min-h-screen">
        <Hero />
        <Advantages />
        <Process />
        <ImpactStats />
        <GivingBack />
        <section id="apply">
          <LoanApplication />
        </section>
        <FAQ />
        <FinalCTA />
        <Footer />
      </section>
    </main>
  );
}