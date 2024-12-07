import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Impressum from "./components/Impressum";
import Datenschutz from "./components/Datenschutz";

const App = () => {
  return (
    <Router>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-blue-300 selection:text-blue-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <div className="h-screen snap-y snap-mandatory overflow-y-scroll" style={{ scrollBehavior: "smooth" }}>
                <div className="container mx-auto px-4">
                  <section id="hero" className="snap-start">
                    <Hero />
                  </section>
                  <section id="about" className="snap-start">
                    <About />
                  </section>
                  <section id="contact" className="snap-start">
                    <Contact />
                  </section>
                </div>
              </div>
            }
          />
          
          <Route
            path="/impressum"
            element={<Impressum/>}/>

          <Route path="/datenschutz" element={<Datenschutz/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
