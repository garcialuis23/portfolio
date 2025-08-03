import './styles/globals.css';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Hero from './components/Features/Hero/Hero';
import About from './components/Features/About';
import Skills from './components/Features/Skills';
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

        <section id="proyectos" style={{
          height: '100vh',
          background: 'linear-gradient(135deg, #1E293B 0%, #475569 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff'
        }}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Proyectos</h2>
            <p style={{ fontSize: '1.2rem' }}>Sección temporal para probar el header</p>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
