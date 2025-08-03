import './styles/globals.css';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Hero from './components/Features/Hero/Hero';
import About from './components/Features/About';
import Skills from './components/Features/Skills';
import Projects from './components/Features/Projects';
import Contact from './components/Features/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="inicio">
          <Hero />
        </section>
        
        <About />

        <Skills />

        <Projects />
        
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
