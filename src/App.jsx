import Hero from "./pages/Hero";
import Collections from "./pages/Collections";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Words from "./pages/Words";
import Horizontal from "./pages/Horizontal";
import ReactLenis from "@studio-freight/react-lenis";
import Donut from "./pages/Donut";
import Card from "./pages/Card";
function App() {
  return (
    <ReactLenis root options={{ lerp: 0.08 }}>
      <Hero />
      <Words />
      <Horizontal />
      <Collections />
      <About />
      <Gallery />
      <Card />
      <Donut />
    </ReactLenis>
  );
}

export default App;
