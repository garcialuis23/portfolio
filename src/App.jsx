import './styles/globals.css';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Hero from './components/Features/Hero/Hero';
import About from './components/Features/About';
import Experience from './components/Features/Experience';
import Skills from './components/Features/Skills';
import Projects from './components/Features/Projects';
import Contact from './components/Features/Contact';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
