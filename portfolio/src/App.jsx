import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./styles/globals.css";
import "./styles/variables.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
       <Skills />
       <Projects />
       <Contact />
      <Footer />
    </div>
  );
}

export default App;
