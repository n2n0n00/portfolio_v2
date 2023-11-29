import "./index.css";
import { About, Projects, Services, Home, Footer } from "./pages/index";

function App() {
  return (
    <div>
      <Home />
      <div className="spaces">
        <About />
        <Services />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
