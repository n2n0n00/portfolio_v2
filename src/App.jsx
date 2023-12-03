import Banner from "./components/Banner";
import "./index.css";
import { About, Projects, Services, Home, Footer } from "./pages/index";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Home />
      <About />
      <Banner />
      <Services />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
