import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-blue-300 selection:text-blue-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <div className="container mx-auto px-4">
        <NavBar />
        <Hero />
        <About />
      </div>
    </div>
  );
};

export default App;