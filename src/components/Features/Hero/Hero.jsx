import './Hero.css';
import profileImage from '../../../assets/images/Fotografía_personal.jpg';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-main">
                    {/* Foto profesional */}
                    <div className="hero-image">
                        <div className="image-container">
                            <img
                                src={profileImage}
                                alt="Luis García - Junior Full Stack Developer"
                                className="profile-image"
                            />
                            <div className="image-decoration"></div>
                        </div>
                    </div>

                    <div className="hero-content">
                        {/* Título principal */}
                        <h1 className="hero-title">
                            Hola, soy <span className="hero-name">Luis García</span>
                        </h1>

                        {/* Subtítulo */}
                        <p className="hero-subtitle">
                            Junior Full Stack Developer
                        </p>

                        {/* Descripción */}
                        <p className="hero-description">
                            Desarrollador apasionado por enfrentar nuevos desafíos y nunca parar de aprender.
                            Actualmente trabajo en Sexta Dimensión mientras amplío mis conocimientos en
                            Big Data e Inteligencia Artificial.
                        </p>

                        {/* CTAs */}
                        <div className="hero-actions">
                            <a href="#proyectos" className="btn btn-primary btn-lg">
                                Ver Proyectos
                            </a>
                            <a href="#contacto" className="btn btn-secondary btn-lg">
                                Contactar
                            </a>
                            <a
                                href="/cv.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary btn-lg"
                            >
                                Descargar CV
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
