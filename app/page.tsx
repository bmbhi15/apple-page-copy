import FeaturesSection from "./components/FeaturesSection";
import FooterSection from "./components/FooterSection";
import Hero from "./components/Hero";
import HighlightsSection from "./components/HighlightsSection";
import NavBar from "./components/NavBar";
import PerformanceSection from "./components/PerformanceSection";
import ProductViewer from "./components/ProductViewer";
import ShowcaseSection from "./components/ShowcaseSection";
export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <ProductViewer />
      <ShowcaseSection />
      <PerformanceSection />
      <FeaturesSection />
      <HighlightsSection />
      <FooterSection />
    </div>
  );
}
