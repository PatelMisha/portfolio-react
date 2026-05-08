import { useEffect } from 'react';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useFadeUp } from './hooks/useFadeUp';

function App() {
  useFadeUp();

  useEffect(() => {
    document.title = 'Misha Patel — Software Engineer';
  }, []);

  return (
    <>
      <Cursor />
      <div className="bg-grid" />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
