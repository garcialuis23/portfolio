export const translations = {
  es: {
    header: {
      nav: {
        perfil: 'Perfil',
        experiencia: 'Experiencia',
        stack: 'Stack',
        proyectos: 'Proyectos',
        contacto: 'Contacto'
      },
      descargarCV: 'Descargar CV',
      modoClaro: 'Cambiar a modo claro',
      modoOscuro: 'Cambiar a modo oscuro',
      cambiarIdioma: 'Switch to English',
      abrirMenu: 'Abrir menú',
      cerrarMenu: 'Cerrar menú',
      inicio: 'Ir al inicio'
    },

    hero: {
      name: 'Luis García Díaz',
      intro: 'Ingeniero de datos y desarrollador backend. Los datos me llegan sucios y salen listos para usar, como este registro:',
      rawLabel: 'Entrada',
      cleanLabel: 'Salida',
      rows: [
        { raw: '" luis  garcia diaz ",,NULL', key: 'nombre', value: 'Luis García Díaz' },
        { raw: 'data eng. / backend dev;;', key: 'rol', value: 'Data Engineer & Backend Developer' },
        { raw: 'GRANADA , es ,,', key: 'base', value: 'Granada, España' },
        { raw: 'py,SQL , php,JAVA ,,java', key: 'stack', value: 'Python, SQL, PHP, Java' },
        { raw: 'naturalsoft sl  (02/2026-)', key: 'ahora', value: 'NaturalSoft SL, desde febrero de 2026' },
        { raw: 'MASTER ia+big data ¿en curso?', key: 'formación', value: 'Máster en IA y Big Data, en curso' }
      ],
      summary: '6 campos normalizados, 1 duplicado y 1 nulo eliminados',
      verProyectos: 'Ver proyectos',
      contactar: 'Escribirme'
    },

    about: {
      title: 'Perfil',
      heading: 'De datos crudos a decisiones de negocio.',
      photoAlt: 'Luis García Díaz con traje gris, al aire libre',
      paragraphs: [
        'Diseño pipelines ETL, modelo bases de datos y construyo las APIs que ponen esos datos a trabajar en producción.',
        'Me motiva convertir datos crudos en arquitecturas robustas y decisiones de negocio. Estoy cursando el Máster en IA y Big Data en Escuela STEM Granada, aplicando Machine Learning y análisis avanzado directamente en proyectos reales.'
      ]
    },

    experience: {
      title: 'Experiencia',
      lead: 'Dónde he trabajado y qué hacía allí.',
      current: 'Ahora',
      jobs: [
        {
          id: 1,
          position: 'Data Engineer / Backend Developer',
          company: 'NaturalSoft SL',
          location: 'Granada',
          period: 'Feb. 2026 – hoy',
          type: 'Jornada completa',
          description: 'Desarrollo y mantenimiento de procesos ETL con scripts PHP y SQL. Modelado de bases de datos y optimización de consultas complejas para mejorar el rendimiento y la disponibilidad de los datos.',
          technologies: ['PHP', 'SQL', 'ETL', 'MySQL', 'Data Modeling'],
          current: true
        },
        {
          id: 2,
          position: 'Junior Full Stack Developer',
          company: 'Sexta Dimensión',
          location: 'Granada, híbrido',
          period: 'Mar. 2025 – dic. 2025',
          type: 'Jornada parcial',
          description: 'Lógica de negocio backend con Spring Boot y Django. Diseño e integración de APIs RESTful, optimización de consultas en PostgreSQL y MySQL, y flujos de CI/CD con Docker.',
          technologies: ['Spring Boot', 'Django', 'PostgreSQL', 'MySQL', 'Docker', 'Git'],
          current: false
        },
        {
          id: 3,
          position: 'Técnico de Soporte IT',
          company: 'Tecnomanzana Antequera',
          location: 'Antequera',
          period: 'Mar. 2022 – jun. 2022',
          type: 'Prácticas',
          description: 'Resolución de incidencias de hardware, software y redes locales. Diagnóstico y reparación de equipos.',
          technologies: ['Hardware', 'Redes', 'Diagnóstico'],
          current: false
        }
      ]
    },

    skills: {
      title: 'Stack',
      heading: 'El stack que uso a diario.',
      subtitle: 'Ordenado por lo a fondo que domino cada herramienta, sin porcentajes inventados.',
      tiers: {
        core: 'Dominio sólido',
        solid: 'Uso habitual',
        familiar: 'Familiarizado'
      },
      categories: {
        dataEngineering: 'Data Engineering',
        languages: 'Lenguajes',
        frameworks: 'Frameworks y APIs',
        databases: 'Bases de datos',
        tools: 'DevOps y herramientas',
        ml: 'Machine Learning'
      }
    },

    projects: {
      title: 'Proyectos',
      heading: 'Cosas que he construido.',
      subtitle: 'Ingeniería de datos, Machine Learning y backend, de principio a fin.',
      filterLabel: 'Filtrar por categoría',
      all: 'Todos',
      columns: {
        year: 'Año',
        project: 'Proyecto',
        stack: 'Stack',
        status: 'Estado'
      },
      count: '{shown} de {total} proyectos',
      viewCode: 'Código',
      viewLive: 'Demo',
      status: {
        done: 'Terminado',
        progress: 'En desarrollo'
      },
      categories: {
        dataEngineering: 'Data Engineering',
        machineLearning: 'Machine Learning',
        backend: 'Backend',
        fullStack: 'Full Stack',
        frontend: 'Frontend',
        iot: 'IoT y hardware',
        security: 'Seguridad'
      },
      descriptions: {
        heart: 'Predicción de enfermedades cardíacas con ~90 % de accuracy. EDA completo, feature engineering e imputación de variables clínicas. Comparativa de SVM, KNN y árboles de decisión con validación cruzada.',
        hellcorp: 'Pipeline completo: limpieza y transformación de más de 27.500 registros con Pandas, carga en MySQL con integridad referencial y consultas SQL avanzadas.',
        energy: 'Predicción de consumo energético para el Ayuntamiento de Granada. Limpieza de históricos, ingeniería de features, benchmark de algoritmos y aplicación web con FastAPI y PostgreSQL.',
        stemfounding: 'Plataforma de crowdfunding para proyectos STEM: React en el frontend, Laravel en el backend, perfiles y donaciones.',
        sleepsync: 'Aplicación para registrar el sueño: patrones, rutinas personalizadas y análisis de la calidad del descanso.',
        monarch: 'API RESTful con Spring Boot para gestionar reinos medievales y monarcas, con MySQL y documentación en Postman.',
        cyber: 'Detección y prevención de amenazas en aplicaciones web mediante modelos de IA.',
        arduino: 'Coche autónomo con Arduino: control de motores, detección de obstáculos y navegación.',
        passport: 'Aplicación para gestionar y consultar la información de productos, con prototipo público en Vercel.',
        portfolio: 'Este portfolio: React y Vite, sistema de diseño propio, modo claro y oscuro, español e inglés.'
      }
    },

    contact: {
      title: 'Contacto',
      heading: 'Hablemos.',
      subtitle: '¿Tienes un proyecto de datos o backend en mente? Estoy disponible para nuevas oportunidades y colaboraciones.',
      copy: 'Copiar email',
      copied: 'Copiado',
      form: {
        title: 'O déjame un mensaje',
        name: 'Nombre',
        email: 'Email',
        subject: 'Asunto',
        subjectPlaceholder: 'Opcional',
        message: 'Mensaje',
        messagePlaceholder: 'Cuéntame qué necesitas',
        send: 'Enviar mensaje',
        sending: 'Enviando…',
        successMessage: 'Mensaje enviado. Te responderé lo antes posible.',
        errorMessage: 'No se pudo enviar el mensaje. Se abrirá tu cliente de correo con el texto ya escrito.',
        rateLimitMessage: 'Acabas de enviar un mensaje. Espera unos segundos para enviar otro.'
      }
    },

    footer: {
      backToTop: 'Volver arriba'
    }
  },

  en: {
    header: {
      nav: {
        perfil: 'Profile',
        experiencia: 'Experience',
        stack: 'Stack',
        proyectos: 'Projects',
        contacto: 'Contact'
      },
      descargarCV: 'Download CV',
      modoClaro: 'Switch to light mode',
      modoOscuro: 'Switch to dark mode',
      cambiarIdioma: 'Cambiar a español',
      abrirMenu: 'Open menu',
      cerrarMenu: 'Close menu',
      inicio: 'Go to top'
    },

    hero: {
      name: 'Luis García Díaz',
      intro: 'Data engineer and backend developer. Data reaches me messy and leaves ready to use, like this record:',
      rawLabel: 'Input',
      cleanLabel: 'Output',
      rows: [
        { raw: '" luis  garcia diaz ",,NULL', key: 'name', value: 'Luis García Díaz' },
        { raw: 'data eng. / backend dev;;', key: 'role', value: 'Data Engineer & Backend Developer' },
        { raw: 'GRANADA , es ,,', key: 'based in', value: 'Granada, Spain' },
        { raw: 'py,SQL , php,JAVA ,,java', key: 'stack', value: 'Python, SQL, PHP, Java' },
        { raw: 'naturalsoft sl  (02/2026-)', key: 'now', value: 'NaturalSoft SL, since February 2026' },
        { raw: 'MASTER ia+big data ¿en curso?', key: 'education', value: 'Master’s in AI and Big Data, ongoing' }
      ],
      summary: '6 fields normalised, 1 duplicate and 1 null removed',
      verProyectos: 'See projects',
      contactar: 'Get in touch'
    },

    about: {
      title: 'Profile',
      heading: 'From raw data to business decisions.',
      photoAlt: 'Luis García Díaz in a grey suit, outdoors',
      paragraphs: [
        'I design ETL pipelines, model databases, and build the APIs that put that data to work in production.',
        'I’m driven by turning raw data into robust architectures and business decisions. I’m pursuing a Master’s in AI and Big Data at Escuela STEM Granada, applying Machine Learning and advanced analysis directly to real-world projects.'
      ]
    },

    experience: {
      title: 'Experience',
      lead: 'Where I’ve worked and what I did there.',
      current: 'Now',
      jobs: [
        {
          id: 1,
          position: 'Data Engineer / Backend Developer',
          company: 'NaturalSoft SL',
          location: 'Granada',
          period: 'Feb. 2026 – now',
          type: 'Full-time',
          description: 'Building and maintaining ETL processes with PHP scripts and SQL. Database modeling and optimization of complex queries to improve data performance and availability.',
          technologies: ['PHP', 'SQL', 'ETL', 'MySQL', 'Data Modeling'],
          current: true
        },
        {
          id: 2,
          position: 'Junior Full Stack Developer',
          company: 'Sexta Dimensión',
          location: 'Granada, hybrid',
          period: 'Mar. 2025 – Dec. 2025',
          type: 'Part-time',
          description: 'Backend business logic with Spring Boot and Django. RESTful API design and integration, query optimization in PostgreSQL and MySQL, and CI/CD workflows with Docker.',
          technologies: ['Spring Boot', 'Django', 'PostgreSQL', 'MySQL', 'Docker', 'Git'],
          current: false
        },
        {
          id: 3,
          position: 'IT Support Technician',
          company: 'Tecnomanzana Antequera',
          location: 'Antequera',
          period: 'Mar. 2022 – Jun. 2022',
          type: 'Internship',
          description: 'Resolving hardware, software and local network issues. Diagnosing and repairing equipment.',
          technologies: ['Hardware', 'Networking', 'Diagnostics'],
          current: false
        }
      ]
    },

    skills: {
      title: 'Stack',
      heading: 'The stack I use every day.',
      subtitle: 'Sorted by how deeply I know each tool, with no made-up percentages.',
      tiers: {
        core: 'Strong command',
        solid: 'Regular use',
        familiar: 'Familiar with'
      },
      categories: {
        dataEngineering: 'Data Engineering',
        languages: 'Languages',
        frameworks: 'Frameworks and APIs',
        databases: 'Databases',
        tools: 'DevOps and tools',
        ml: 'Machine Learning'
      }
    },

    projects: {
      title: 'Projects',
      heading: 'Things I’ve built.',
      subtitle: 'Data engineering, Machine Learning and backend, end to end.',
      filterLabel: 'Filter by category',
      all: 'All',
      columns: {
        year: 'Year',
        project: 'Project',
        stack: 'Stack',
        status: 'Status'
      },
      count: '{shown} of {total} projects',
      viewCode: 'Code',
      viewLive: 'Demo',
      status: {
        done: 'Finished',
        progress: 'In progress'
      },
      categories: {
        dataEngineering: 'Data Engineering',
        machineLearning: 'Machine Learning',
        backend: 'Backend',
        fullStack: 'Full Stack',
        frontend: 'Frontend',
        iot: 'IoT and hardware',
        security: 'Security'
      },
      descriptions: {
        heart: 'Heart disease prediction with ~90% accuracy. Full EDA, feature engineering and imputation of clinical variables. SVM, KNN and decision trees compared with cross-validation.',
        hellcorp: 'End-to-end pipeline: cleaning and transforming 27,500+ records with Pandas, loading into MySQL with referential integrity, and advanced SQL queries.',
        energy: 'Energy consumption forecasting for Granada City Council. Historical data cleaning, feature engineering, algorithm benchmarking and a web app built with FastAPI and PostgreSQL.',
        stemfounding: 'Crowdfunding platform for STEM projects: React on the frontend, Laravel on the backend, profiles and donations.',
        sleepsync: 'Sleep tracking app: patterns, personalised routines and analysis of rest quality.',
        monarch: 'RESTful API with Spring Boot for managing medieval kingdoms and monarchs, with MySQL and Postman documentation.',
        cyber: 'Threat detection and prevention for web applications using AI models.',
        arduino: 'Autonomous Arduino car: motor control, obstacle detection and navigation.',
        passport: 'App for managing and browsing product information, with a public prototype on Vercel.',
        portfolio: 'This portfolio: React and Vite, custom design system, light and dark mode, Spanish and English.'
      }
    },

    contact: {
      title: 'Contact',
      heading: 'Let’s talk.',
      subtitle: 'Have a data or backend project in mind? I’m available for new opportunities and collaborations.',
      copy: 'Copy email',
      copied: 'Copied',
      form: {
        title: 'Or leave me a message',
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        subjectPlaceholder: 'Optional',
        message: 'Message',
        messagePlaceholder: 'Tell me what you need',
        send: 'Send message',
        sending: 'Sending…',
        successMessage: 'Message sent. I’ll get back to you as soon as I can.',
        errorMessage: 'The message couldn’t be sent. Your email app will open with the text already written.',
        rateLimitMessage: 'You just sent a message. Wait a few seconds to send another.'
      }
    },

    footer: {
      backToTop: 'Back to top'
    }
  }
};
