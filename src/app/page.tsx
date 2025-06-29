import Image from "next/image";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import AboutUs from "./components/AboutUs";
import OurServices from "./components/OurServices";
import CompanyPhilosophy from "./components/CompanyPhilosophy";
import Charts from "./components/Charts";
import News from "./components/News";
import Pricing from "./components/Pricing";
import ClientOpinions from "./components/ClientsOpinions";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Partners />
      <AboutUs />
      <OurServices />
      <CompanyPhilosophy />
      <Charts />
      <News />
      <Pricing />
      <ClientOpinions />
      <Footer />
    </div>
  );
}
