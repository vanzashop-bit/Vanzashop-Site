import About from "@/components/About";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marketplace from "@/components/Marketplace";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-white text-slate-900">
      <Header />
      <Hero />
      <About />
      <Services />
      <Marketplace />
      <Stats />
      <WhyChooseUs />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
