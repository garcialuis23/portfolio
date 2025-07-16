import './styles/globals.css';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Hero from './components/Features/Hero/Hero';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="inicio">
          <Hero />
        </section>
        
        {/* Secciones temporales para probar el header */}
        <section id="sobre-mi" style={{
          height: '100vh',
          background: 'linear-gradient(135deg, #1E293B 0%, #334155 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff'
        }}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Sobre Mí</h2>
            <p style={{ fontSize: '1.2rem' }}>Sección temporal para probar el header</p>
          </div>
        </section>

        <section id="habilidades" style={{
          height: '100vh',
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff'
        }}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Habilidades</h2>
            <p style={{ fontSize: '1.2rem' }}>Sección temporal para probar el header</p>
          </div>
        </section>

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

        <section id="contacto" style={{
          height: '100vh',
          background: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff'
        }}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Contacto</h2>
            <p style={{ fontSize: '1.2rem' }}>Sección temporal para probar el header</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
