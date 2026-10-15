export const translations = {
  es: {
    header: {
      skipToContent: 'Saltar al contenido',
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
      intro: 'Desarrollador backend e ingeniero de datos. Construyo APIs y aplicaciones, y convierto datos sucios en datos listos para usar, como este registro:',
      rawLabel: 'Entrada',
      cleanLabel: 'Salida',
      rows: [
        { raw: '" luis  garcia diaz ",,NULL', key: 'nombre', value: 'Luis García Díaz' },
        { raw: 'backend dev / data eng.;;', key: 'rol', value: 'Backend Developer & Data Engineer' },
        { raw: 'GRANADA , es ,,', key: 'base', value: 'Granada, España' },
        { raw: 'JAVA,spring boot , sql,py ,,java', key: 'stack', value: 'Java, Spring Boot, SQL, Python' },
        { raw: 'naturalsoft sl ;soft. MEDICO ,,', key: 'ahora', value: 'NaturalSoft SL, software médico' },
        { raw: 'master IA+BIG data ;stem gr. ✓', key: 'formación', value: 'Máster en IA y Big Data' }
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
        'Construyo backends y APIs con Java y Spring Boot, y diseño los pipelines ETL y las bases de datos que los alimentan en producción.',
        'Hoy trabajo en NaturalSoft SL, una empresa de software médico: un sector donde la fiabilidad del sistema y la calidad del dato importan de verdad. Tengo un máster en Big Data e IA que me ha permitido profundizar y aprender muchísimo más sobre el campo que me apasiona: la inteligencia artificial.'
      ]
    },

    experience: {
      title: 'Experiencia',
      lead: 'Dónde he trabajado y qué he construido.',
      current: 'Ahora',
      jobs: [
        {
          id: 1,
          position: 'Backend Developer / Data Engineer',
          company: 'NaturalSoft SL',
          location: 'Granada',
          period: 'Feb. 2026 – hoy',
          type: 'Jornada completa',
          description: 'Empresa de software médico. Desarrollo una aplicación en Java con Spring Boot, del diseño de la API a la lógica de negocio, e integro soluciones de IA para mejorar el producto. También mantengo los procesos ETL en PHP y SQL, modelo las bases de datos y optimizo consultas complejas.',
          technologies: ['Java', 'Spring Boot', 'IA', 'PHP', 'SQL', 'MySQL', 'ETL'],
          current: true
        },
        {
          id: 2,
          position: 'Junior Full Stack Developer',
          company: 'Sexta Dimensión',
          location: 'Granada, híbrido',
          period: 'Mar. 2025 – dic. 2025',
          type: 'Jornada parcial',
          description: 'Desarrollé lógica de negocio backend con Spring Boot y Django, diseñé e integré APIs RESTful, optimicé consultas en PostgreSQL y MySQL y monté flujos de CI/CD con Docker.',
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
          description: 'Resolví incidencias de hardware, software y redes locales, y diagnostiqué y reparé equipos.',
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
      subtitle: 'Backend, ingeniería de datos y Machine Learning, de principio a fin.',
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
      downloadCV: 'CV',
      backToTop: 'Volver arriba'
    }
  },

  en: {
    header: {
      skipToContent: 'Skip to content',
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
      intro: 'Backend developer and data engineer. I build APIs and applications, and turn messy data into data that’s ready to use, like this record:',
      rawLabel: 'Input',
      cleanLabel: 'Output',
      rows: [
        { raw: '" luis  garcia diaz ",,NULL', key: 'name', value: 'Luis García Díaz' },
        { raw: 'backend dev / data eng.;;', key: 'role', value: 'Backend Developer & Data Engineer' },
        { raw: 'GRANADA , es ,,', key: 'based in', value: 'Granada, Spain' },
        { raw: 'JAVA,spring boot , sql,py ,,java', key: 'stack', value: 'Java, Spring Boot, SQL, Python' },
        { raw: 'naturalsoft sl ;soft. MEDICO ,,', key: 'now', value: 'NaturalSoft SL, medical software' },
        { raw: 'master IA+BIG data ;stem gr. ✓', key: 'education', value: 'Master’s in AI and Big Data' }
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
        'I build backends and APIs with Java and Spring Boot, and design the ETL pipelines and databases that feed them in production.',
        'I currently work at NaturalSoft SL, a medical software company: a field where system reliability and data quality really matter. I hold a Master’s in Big Data and AI, which let me dig deeper and learn far more about the field I’m passionate about: artificial intelligence.'
      ]
    },

    experience: {
      title: 'Experience',
      lead: 'Where I’ve worked and what I’ve built.',
      current: 'Now',
      jobs: [
        {
          id: 1,
          position: 'Backend Developer / Data Engineer',
          company: 'NaturalSoft SL',
          location: 'Granada',
          period: 'Feb. 2026 – now',
          type: 'Full-time',
          description: 'Medical software company. I’m building a Java application with Spring Boot, from API design to business logic, and integrating AI solutions to improve the product. I also maintain the ETL processes in PHP and SQL, model the databases and optimise complex queries.',
          technologies: ['Java', 'Spring Boot', 'AI', 'PHP', 'SQL', 'MySQL', 'ETL'],
          current: true
        },
        {
          id: 2,
          position: 'Junior Full Stack Developer',
          company: 'Sexta Dimensión',
          location: 'Granada, hybrid',
          period: 'Mar. 2025 – Dec. 2025',
          type: 'Part-time',
          description: 'Built backend business logic with Spring Boot and Django, designed and integrated RESTful APIs, optimised queries in PostgreSQL and MySQL, and set up CI/CD workflows with Docker.',
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
          description: 'Resolved hardware, software and local network issues, and diagnosed and repaired equipment.',
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
      subtitle: 'Backend, data engineering and Machine Learning, end to end.',
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
      downloadCV: 'Résumé',
      backToTop: 'Back to top'
    }
  }
};
