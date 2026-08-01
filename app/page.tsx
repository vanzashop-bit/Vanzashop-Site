import About from "@/components/About";
import Categories from "@/components/Categories";
import Consultoria from "@/components/Consultoria";
import Contact from "@/components/Contact";
import Differentials from "@/components/Differentials";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marketplace from "@/components/Marketplace";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-white text-slate-900">
      <Header />
      <Hero />
      <Marketplace />
      <Categories />
      <Differentials />
      <Consultoria />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
