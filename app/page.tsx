import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ProductViewer from "./components/ProductViewer";
export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <ProductViewer />
    </div>
  );
}
