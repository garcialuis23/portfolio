export const translations = {
  es: {
    // Header
    header: {
      inicio: 'Inicio',
      sobreMi: 'Sobre Mí',
      habilidades: 'Habilidades',
      proyectos: 'Proyectos',
      contacto: 'Contacto',
      descargarCV: 'Descargar CV',
      modoClaro: 'Modo claro',
      modoOscuro: 'Modo oscuro',
      claro: 'Claro',
      oscuro: 'Oscuro',
      english: 'English',
      espanol: 'Español'
    },

    // Hero Section
    hero: {
      greeting: 'Hola, soy',
      name: 'Luis García',
      role: 'Data Engineer & Backend Developer',
      description: 'Ingeniero de Datos y Desarrollador Backend con experiencia en construcción de pipelines escalables, optimización de bases de datos relacionales e integración de APIs RESTful. Formación especializada en IA y Big Data aplicada a soluciones de producción reales.',
      metrics: {
        projects: '10+',
        projectsLabel: 'Proyectos Completados',
        experience: '2+',
        experienceLabel: 'Años de Experiencia',
        technologies: '15+',
        technologiesLabel: 'Tecnologías Dominadas'
      },
      verProyectos: 'Ver Proyectos',
      contactar: 'Contactar',
      descargarCV: 'Descargar CV'
    },

    // About Section
    about: {
      title: 'Sobre Mí',
      subtitle: 'Conoce mi trayectoria, experiencia técnica y lo que me motiva como ingeniero de datos',
      headingLine1: 'De datos crudos',
      headingLine2: 'a decisiones de negocio.',
      role: 'Data Engineer & Backend Developer',
      location: 'Granada, España',
      personalInfo: {
        name: 'Luis García Díaz'
      },
      paragraphs: [
        'Soy Ingeniero de Datos y Desarrollador Backend: diseño pipelines ETL, modelo bases de datos y construyo APIs que ponen esos datos a trabajar en producción.',
        'Me motiva convertir datos crudos en arquitecturas robustas y decisiones de negocio. Estoy cursando el Máster en IA y Big Data en Escuela STEM Granada, aplicando Machine Learning y análisis avanzado directamente en proyectos reales.'
      ],
      stats: {
        experience: 'Años de experiencia',
        projects: 'Proyectos completados',
        technologies: 'Tecnologías dominadas'
      },
      details: {
        title: 'Detalles Profesionales',
        experience: 'Experiencia:',
        experienceValue: '2+ años en tecnología',
        currentJob: 'Empresa Actual:',
        currentJobValue: 'NaturalSoft SL',
        education: 'Formación:',
        educationValue: 'Máster IA y Big Data',
        location: 'Ubicación:',
        locationValue: 'Granada, España'
      },
      experience: {
        title: 'Mi Trayectoria Profesional'
      },
      timeline: {
        title: 'Mi Trayectoria Profesional',
        badges: {
          current: 'ACTUAL',
          temporary: 'TEMPORAL',
          internship: 'PRÁCTICAS',
          contract: 'CONTRATO'
        },
        jobs: [
          {
            id: 1,
            position: 'Data Engineer / Backend Developer',
            company: 'NaturalSoft SL',
            location: 'Granada, España',
            period: 'feb. 2026 - Actualidad',
            type: 'Jornada completa',
            description: 'Desarrollo y mantenimiento de procesos ETL mediante scripts PHP y consultas SQL. Modelado de bases de datos y optimización de consultas complejas para mejorar el rendimiento y la disponibilidad de los datos.',
            technologies: ['PHP', 'SQL', 'ETL', 'MySQL', 'Data Modeling'],
            current: true
          },
          {
            id: 2,
            position: 'Junior Full Stack Developer',
            company: 'Sexta Dimensión',
            location: 'Granada, Híbrido',
            period: 'mar. 2025 - dic. 2025 · 10 meses',
            type: 'Jornada parcial',
            description: 'Desarrollo de lógica de negocio backend con Spring Boot y Django. Diseño e integración de APIs RESTful, optimización de consultas en PostgreSQL y MySQL, e implementación de flujos CI/CD con Docker.',
            technologies: ['Spring Boot', 'Django', 'PostgreSQL', 'MySQL', 'Docker', 'Git'],
            current: false
          },
          {
            id: 3,
            position: 'Técnico de Soporte IT',
            company: 'Tecnomanzana Antequera',
            location: 'Antequera, España',
            period: 'mar. 2022 - jun. 2022 · 4 meses',
            type: 'Contrato de prácticas',
            description: 'Soporte técnico y resolución de incidencias de hardware, software y configuración de redes locales. Diagnóstico y reparación de equipos electrónicos.',
            technologies: ['Hardware', 'Redes', 'Software', 'Diagnóstico'],
            current: false
          }
        ]
      },
      highlights: {
        title: 'Lo que me caracteriza',
        items: [
          {
            title: 'Ingeniería de Datos',
            description: 'Diseño y mantenimiento de pipelines ETL, modelado de bases de datos y optimización de consultas para procesar grandes volúmenes de datos.'
          },
          {
            title: 'Machine Learning aplicado',
            description: 'Implementación de modelos predictivos con Scikit-learn y análisis exploratorio de datos para extraer insights accionables.'
          },
          {
            title: 'Backend & APIs',
            description: 'Desarrollo de arquitecturas backend robustas y APIs RESTful con Spring Boot, Django y Node.js en entornos de producción.'
          },
          {
            title: 'Aprendizaje Continuo',
            description: 'Cursando Máster en IA y Big Data, con formación en Snowflake, ClickHouse y dbt para mantenerme a la vanguardia del ecosistema de datos.'
          }
        ]
      }
    },

    // Skills Section
    skills: {
      title: 'Habilidades Técnicas',
      heading: 'El stack que uso a diario.',
      subtitle: 'De pipelines ETL a APIs en producción: estas son las herramientas con las que construyo, ordenadas por lo a fondo que las domino.',
      legend: {
        core: 'Dominio sólido',
        solid: 'Uso habitual',
        familiar: 'Familiarizado'
      },
      categories: {
        dataEngineering: 'Data Engineering',
        languages: 'Lenguajes',
        frameworks: 'Frameworks & APIs',
        databases: 'Bases de Datos',
        tools: 'DevOps & Herramientas',
        ml: 'Machine Learning'
      },
      values: {
        title: 'Mi Enfoque',
        items: [
          '⚙️ Pipelines ETL escalables',
          '🗄️ Modelado y optimización de datos',
          '🔌 APIs RESTful robustas',
          '🤖 Machine Learning aplicado',
          '📚 Aprendizaje continuo',
          '⚡ Performance y fiabilidad'
        ]
      },
      stats: {
        projects: 'Proyectos Completados',
        technologies: 'Tecnologías Dominadas',
        experience: 'Años de Experiencia',
        dedication: 'Dedicación'
      }
    },

    // Projects Section
    projects: {
      title: 'Mis Proyectos',
      heading: 'Cosas que he construido.',
      subtitle: 'Una selección de proyectos de ingeniería de datos, Machine Learning y desarrollo backend, de principio a fin.',
      allProjects: 'Todos los Proyectos',
      projectsOf: 'Proyectos de',
      filters: {
        all: 'Todos',
        fullStack: 'Full Stack',
        backend: 'Backend',
        frontend: 'Frontend',
        iot: 'IoT/Hardware',
        security: 'Seguridad',
        dataScience: 'Data Science',
        machineLearning: 'Machine Learning',
        dataEngineering: 'Data Engineering'
      },
      noProjects: {
        title: 'No hay proyectos en esta categoría',
        message: 'Pero estoy trabajando en nuevos proyectos. ¡Mantente atento!'
      },
      viewCode: 'Ver código',
      viewLive: 'Ver proyecto en vivo',
      status: {
        completado: 'Completado',
        enProgreso: 'En Progreso',
        planeado: 'Planeado'
      }
    },

    // Contact Section
    contact: {
      title: 'Contacto',
      heading: 'Hablemos.',
      subtitle: '¿Tienes un proyecto de datos o backend en mente? Estoy disponible para nuevas oportunidades y colaboraciones.',
      info: {
        title: 'Información de Contacto',
        email: 'Email',
        location: 'Ubicación',
        locationValue: 'Málaga, España'
      },
      form: {
        title: 'Envíame un Mensaje',
        name: 'Nombre',
        email: 'Email',
        subject: 'Asunto',
        subjectPlaceholder: '¿En qué puedo ayudarte?',
        message: 'Mensaje',
        messagePlaceholder: 'Cuéntame sobre tu proyecto...',
        send: 'Enviar Mensaje',
        sending: 'Enviando...',
        successMessage: '¡Mensaje enviado exitosamente! Te responderé pronto.',
        errorMessage: 'Error al enviar el mensaje. Se abrirá tu cliente de email como alternativa.',
        rateLimitMessage: 'Espera unos segundos antes de enviar otro mensaje.'
      }
    },

    // Footer
    footer: {
      description: 'Data Engineer & Backend Developer especializado en pipelines ETL, optimización de bases de datos y APIs RESTful.',
      quickLinks: 'Enlaces Rápidos',
      contactInfo: 'Información de Contacto',
      followMe: 'Sígueme',
      allRightsReserved: 'Todos los derechos reservados.',
      madeWith: 'Hecho con',
      by: 'por'
    },

    // Common
    common: {
      loading: 'Cargando...',
      error: 'Error',
      success: 'Éxito',
      close: 'Cerrar',
      back: 'Volver',
      next: 'Siguiente',
      previous: 'Anterior',
      more: 'Más',
      less: 'Menos'
    }
  },

  en: {
    // Header
    header: {
      inicio: 'Home',
      sobreMi: 'About Me',
      habilidades: 'Skills',
      proyectos: 'Projects',
      contacto: 'Contact',
      descargarCV: 'Download CV',
      modoClaro: 'Light mode',
      modoOscuro: 'Dark mode',
      claro: 'Light',
      oscuro: 'Dark',
      english: 'English',
      espanol: 'Spanish'
    },

    // Hero Section
    hero: {
      greeting: 'Hello, I\'m',
      name: 'Luis García',
      role: 'Data Engineer & Backend Developer',
      description: 'Data Engineer and Backend Developer with experience building scalable pipelines, optimizing relational databases, and integrating RESTful APIs. Specialized training in AI and Big Data applied to real production solutions.',
      metrics: {
        projects: '10+',
        projectsLabel: 'Completed Projects',
        experience: '2+',
        experienceLabel: 'Years of Experience',
        technologies: '15+',
        technologiesLabel: 'Technologies Mastered'
      },
      verProyectos: 'View Projects',
      contactar: 'Contact',
      descargarCV: 'Download CV'
    },

    // About Section
    about: {
      title: 'About Me',
      subtitle: 'Learn about my journey, technical expertise and what drives me as a data engineer',
      headingLine1: 'From raw data',
      headingLine2: 'to business decisions.',
      role: 'Data Engineer & Backend Developer',
      location: 'Granada, Spain',
      personalInfo: {
        name: 'Luis García Díaz'
      },
      paragraphs: [
        'I\'m a Data Engineer and Backend Developer: I design ETL pipelines, model databases, and build APIs that put that data to work in production.',
        'I\'m driven by turning raw data into robust architectures and business decisions. I\'m pursuing a Master\'s in AI and Big Data at Escuela STEM Granada, applying Machine Learning and advanced analysis directly to real-world projects.'
      ],
      stats: {
        experience: 'Years of experience',
        projects: 'Completed projects',
        technologies: 'Technologies mastered'
      },
      details: {
        title: 'Professional Details',
        experience: 'Experience:',
        experienceValue: '2+ years in tech',
        currentJob: 'Current Company:',
        currentJobValue: 'NaturalSoft SL',
        education: 'Education:',
        educationValue: 'Master\'s in AI & Big Data',
        location: 'Location:',
        locationValue: 'Granada, Spain'
      },
      experience: {
        title: 'My Professional Journey'
      },
      timeline: {
        title: 'My Professional Journey',
        badges: {
          current: 'CURRENT',
          temporary: 'CONTRACT',
          internship: 'INTERNSHIP',
          contract: 'CONTRACT'
        },
        jobs: [
          {
            id: 1,
            position: 'Data Engineer / Backend Developer',
            company: 'NaturalSoft SL',
            location: 'Granada, Spain',
            period: 'Feb. 2026 - Present',
            type: 'Full-time',
            description: 'Development and maintenance of ETL processes using PHP scripts and SQL queries. Database modeling and optimization of complex queries to improve data performance and availability.',
            technologies: ['PHP', 'SQL', 'ETL', 'MySQL', 'Data Modeling'],
            current: true
          },
          {
            id: 2,
            position: 'Junior Full Stack Developer',
            company: 'Sexta Dimensión',
            location: 'Granada, Hybrid',
            period: 'Mar. 2025 - Dec. 2025 · 10 months',
            type: 'Part-time',
            description: 'Backend business logic development with Spring Boot and Django. RESTful API design and integration, query optimization in PostgreSQL and MySQL, and CI/CD pipeline implementation with Docker.',
            technologies: ['Spring Boot', 'Django', 'PostgreSQL', 'MySQL', 'Docker', 'Git'],
            current: false
          },
          {
            id: 3,
            position: 'IT Support Technician',
            company: 'Tecnomanzana Antequera',
            location: 'Antequera, Spain',
            period: 'Mar. 2022 - Jun. 2022 · 4 months',
            type: 'Internship',
            description: 'Technical support and resolution of hardware, software and local network configuration incidents. Diagnosis and repair of electronic equipment.',
            technologies: ['Hardware', 'Networking', 'Software', 'Diagnostics'],
            current: false
          }
        ]
      },
      highlights: {
        title: 'What characterizes me',
        items: [
          {
            title: 'Data Engineering',
            description: 'Design and maintenance of ETL pipelines, database modeling, and query optimization to process large volumes of data efficiently.'
          },
          {
            title: 'Applied Machine Learning',
            description: 'Implementation of predictive models with Scikit-learn and exploratory data analysis to extract actionable insights from raw data.'
          },
          {
            title: 'Backend & APIs',
            description: 'Robust backend architectures and RESTful APIs built with Spring Boot, Django, and Node.js deployed in production environments.'
          },
          {
            title: 'Continuous Learning',
            description: 'Pursuing a Master\'s in AI and Big Data, with training in Snowflake, ClickHouse, and dbt to stay at the forefront of the data ecosystem.'
          }
        ]
      }
    },

    // Skills Section
    skills: {
      title: 'Technical Skills',
      heading: 'The stack I use daily.',
      subtitle: 'From ETL pipelines to production APIs: the tools I build with, ordered by how deep my command of each one goes.',
      legend: {
        core: 'Strong command',
        solid: 'Regular use',
        familiar: 'Familiar with'
      },
      categories: {
        dataEngineering: 'Data Engineering',
        languages: 'Languages',
        frameworks: 'Frameworks & APIs',
        databases: 'Databases',
        tools: 'DevOps & Tools',
        ml: 'Machine Learning'
      },
      values: {
        title: 'My Approach',
        items: [
          '⚙️ Scalable ETL pipelines',
          '🗄️ Data modeling & optimization',
          '🔌 Robust RESTful APIs',
          '🤖 Applied Machine Learning',
          '📚 Continuous learning',
          '⚡ Performance & reliability'
        ]
      },
      stats: {
        projects: 'Completed Projects',
        technologies: 'Technologies Mastered',
        experience: 'Years of Experience',
        dedication: 'Dedication'
      }
    },

    // Projects Section
    projects: {
      title: 'My Projects',
      heading: 'Things I’ve built.',
      subtitle: 'A selection of data engineering, Machine Learning, and backend projects, end to end.',
      allProjects: 'All Projects',
      projectsOf: 'Projects of',
      filters: {
        all: 'All',
        fullStack: 'Full Stack',
        backend: 'Backend',
        frontend: 'Frontend',
        iot: 'IoT/Hardware',
        security: 'Security',
        dataScience: 'Data Science',
        machineLearning: 'Machine Learning',
        dataEngineering: 'Data Engineering'
      },
      noProjects: {
        title: 'No projects in this category',
        message: 'But I\'m working on exciting new projects. Stay tuned!'
      },
      viewCode: 'View code',
      viewLive: 'View live project',
      status: {
        completado: 'Completed',
        enProgreso: 'In Progress',
        planeado: 'Planned'
      }
    },

    // Contact Section
    contact: {
      title: 'Contact',
      heading: 'Let&rsquo;s talk.',
      subtitle: 'Have a data or backend project in mind? I\'m available for new opportunities and collaborations.',
      info: {
        title: 'Contact Information',
        email: 'Email',
        location: 'Location',
        locationValue: 'Málaga, Spain'
      },
      form: {
        title: 'Send me a Message',
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        subjectPlaceholder: 'How can I help you?',
        message: 'Message',
        messagePlaceholder: 'Tell me about your project...',
        send: 'Send Message',
        sending: 'Sending...',
        successMessage: 'Message sent successfully! I\'ll respond soon.',
        errorMessage: 'Error sending message. Your email client will open as an alternative.'
      }
    },

    // Footer
    footer: {
      description: 'Data Engineer & Backend Developer specialized in ETL pipelines, database optimization, and RESTful APIs.',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact Information',
      followMe: 'Follow Me',
      allRightsReserved: 'All rights reserved.',
      madeWith: 'Made with',
      by: 'by'
    },

    // Common
    common: {
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      close: 'Close',
      back: 'Back',
      next: 'Next',
      previous: 'Previous',
      more: 'More',
      less: 'Less'
    }
  }
};
