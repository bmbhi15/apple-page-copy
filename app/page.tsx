import FeaturesSection from "./components/FeaturesSection";
import Hero from "./components/Hero";
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
    </div>
  );
}
