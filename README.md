# 💼 Portfolio Personal

> Un portfolio moderno y responsivo desarrollado con React + Vite, diseñado para mostrar proyectos y habilidades de desarrollo frontend.

## 🌐 Ver Portfolio en Vivo

**🚀 [https://luis-garcia-portfolio.vercel.app/](https://luis-garcia-portfolio.vercel.app/)**

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
[![Portfolio](https://img.shields.io/badge/Portfolio-LIVE-4F46E5?style=for-the-badge&logo=vercel&logoColor=white)](https://luis-garcia-portfolio.vercel.app/)

## 🚀 Características

- ⚡ **Vite** - Build tool ultrarrápido con Hot Module Replacement
- ⚛️ **React 18** - Última versión con Concurrent Features
- 🎨 **Design System** - Componentes reutilizables y sistema de tokens
- 🌙 **Tema Oscuro/Claro** - Soporte completo para ambos temas
- 📱 **Responsive Design** - Optimizado para todos los dispositivos
- 🚀 **Performance** - Optimizaciones de carga y SEO
- 🧩 **Arquitectura Modular** - Código organizado y escalable

## 📁 Estructura del Proyecto

```
src/
├── components/           # 🧩 Componentes reutilizables
│   ├── UI/              # 🎨 Componentes básicos del Design System
│   │   ├── Button/      #     └── Botones con variantes
│   │   ├── Card/        #     └── Tarjetas de contenido
│   │   ├── Modal/       #     └── Ventanas modales
│   │   └── Loading/     #     └── Indicadores de carga
│   ├── Layout/          # 🏗️ Estructura de página
│   │   ├── Header/      #     └── Barra de navegación
│   │   ├── Footer/      #     └── Pie de página
│   │   └── Sidebar/     #     └── Barra lateral (opcional)
│   └── Features/        # 🎯 Secciones específicas del portfolio
│       ├── Hero/        #     └── Sección principal/banner
│       ├── About/       #     └── Información personal
│       ├── Projects/    #     └── Portafolio de proyectos
│       └── Contact/     #     └── Formulario de contacto
├── pages/               # 📄 Páginas completas
│   ├── Home.jsx         #     └── Página principal
│   ├── About.jsx        #     └── Página "Sobre mí"
│   └── Portfolio.jsx    #     └── Página de proyectos
├── assets/              # 🖼️ Recursos estáticos
│   ├── images/          #     └── Imágenes y fotografías
│   ├── icons/           #     └── Iconos personalizados
│   └── fonts/           #     └── Fuentes tipográficas
├── styles/              # 🎨 Estilos y CSS
│   ├── globals.css      #     └── Estilos globales y reset
│   ├── variables.css    #     └── Variables CSS y tokens de design
│   └── components/      #     └── Estilos específicos por componente
├── utils/               # 🛠️ Funciones auxiliares
│   ├── constants.js     #     └── Constantes del proyecto
│   ├── helpers.js       #     └── Funciones de utilidad
│   └── api.js           #     └── Llamadas a APIs
├── hooks/               # 🪝 Custom Hooks de React
│   ├── useLocalStorage.js #   └── Hook para localStorage
│   └── useScrollPosition.js # └── Hook para posición de scroll
├── context/             # 🌐 Estado global con Context API
│   └── ThemeContext.js  #     └── Gestión de tema oscuro/claro
└── data/                # 📊 Datos mock y configuración
    ├── projects.js      #     └── Información de proyectos
    └── skills.js        #     └── Habilidades técnicas
```

## 🛠️ Tecnologías Utilizadas

### **Frontend Core**
- **React 18** - Librería de UI con Concurrent Features
- **Vite** - Build tool moderno con HMR instantáneo
- **JavaScript ES6+** - Sintaxis moderna y features avanzados

### **Estilos**
- **CSS3** - Variables CSS nativas y Grid/Flexbox
- **CSS Modules** - Estilos encapsulados por componente
- **Design System** - Tokens de design consistentes

### **Herramientas de Desarrollo**
- **ESLint** - Linting y calidad de código
- **Hot Module Replacement** - Recarga instantánea en desarrollo

## 🚀 Inicio Rápido

### **Prerrequisitos**
- Node.js 16+ 
- npm o yarn

### **Instalación**

```bash
# Clonar el repositorio
git clone https://github.com/garcialuis23/portfolio.git

# Navegar al directorio
cd portfolio

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Edita .env y agrega tus credenciales de EmailJS

# Iniciar el servidor de desarrollo
npm run dev
```

### **Configuración de Variables de Entorno**

Para que el formulario de contacto funcione, necesitas configurar las credenciales de EmailJS:

1. Crea una cuenta en [EmailJS](https://www.emailjs.com/)
2. Copia el archivo `.env.example` a `.env`
3. Completa las variables con tus credenciales:

```env
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

> ⚠️ **Importante**: Nunca subas el archivo `.env` a GitHub. Ya está incluido en `.gitignore`.

### **Scripts Disponibles**

```bash
npm run dev          # Servidor de desarrollo con HMR
npm run build        # Build de producción optimizado
npm run preview      # Preview del build de producción
npm run lint         # Ejecutar ESLint
```

## 🎨 Sistema de Design

El proyecto utiliza una paleta profesional y minimalista basada en variables CSS:

```css
:root {
  /* Backgrounds */
  --bg-primary: #0F172A;      /* Fondo general */
  --bg-secondary: #1E293B;    /* Tarjetas / bloques */
  --bg-card: #1E293B;         /* Tarjetas / bloques */

  /* Colores principales */
  --primary: #3B82F6;         /* Botones / enlaces hover */
  --primary-hover: #2563EB;   /* Hover botones */
  --accent: #60A5FA;          /* Detalles / íconos hover */
  --accent-hover: #93C5FD;    /* Hover detalles */

  /* Textos */
  --text-primary: #F8FAFC;    /* Texto principal */
  --text-secondary: #CBD5E1;  /* Texto menor, detalles */
  --text-muted: #64748B;      /* Texto menos importante */

  /* Estados */
  --success: #10B981;         /* Verde éxito */
  --warning: #F59E0B;         /* Amarillo advertencia */
  --error: #EF4444;           /* Rojo error */

  /* Bordes */
  --border: #334155;          /* Bordes sutiles */
}
```

> Puedes modificar estos valores en `src/styles/variables.css` para personalizar el diseño visual de tu portfolio.

## 📱 Responsive Design

El portfolio está optimizado para todos los dispositivos:

- **Mobile First** - Diseño que prioriza dispositivos móviles
- **Breakpoints** - `768px` (tablet), `1024px` (desktop), `1280px` (wide)
- **Flexible Grid** - CSS Grid y Flexbox para layouts adaptativos
- **Touch Friendly** - Elementos táctiles optimizados

## 🌙 Tema Oscuro/Claro

Implementación completa de temas con:
- **Context API** - Estado global del tema
- **CSS Variables** - Intercambio dinámico de colores
- **localStorage** - Persistencia de preferencia del usuario
- **System Preference** - Detección automática del tema del SO

## 🚀 Performance

### **Optimizaciones Implementadas**
- **Code Splitting** - Carga diferida de componentes
- **Image Optimization** - Formatos modernos y lazy loading
- **CSS Purging** - Eliminación de estilos no utilizados
- **Bundle Analysis** - Análisis del tamaño del bundle

### **Métricas Target**
- **LCP** < 2.5s (Largest Contentful Paint)
- **FID** < 100ms (First Input Delay)
- **CLS** < 0.1 (Cumulative Layout Shift)

## 📋 Roadmap

- [ ] **React Router** - Navegación entre páginas
- [ ] **Framer Motion** - Animaciones avanzadas
- [ ] **React Hook Form** - Formularios optimizados
- [ ] **PWA** - Progressive Web App
- [ ] **i18n** - Internacionalización
- [ ] **TypeScript** - Tipado estático
- [ ] **Testing** - Jest + React Testing Library
- [ ] **Storybook** - Documentación de componentes

## 🔒 Seguridad

Este proyecto implementa las siguientes medidas de seguridad:

### **Protecciones Implementadas**

- ✅ **Variables de Entorno** - API keys protegidas (no expuestas en el código)
- ✅ **Content Security Policy (CSP)** - Headers de seguridad en HTML
- ✅ **Input Sanitization** - Limpieza de inputs del formulario
- ✅ **Rate Limiting** - Protección contra spam (5 segundos entre envíos)
- ✅ **XSS Protection** - React escapa automáticamente el contenido
- ✅ **Secure Links** - `rel="noopener noreferrer"` en enlaces externos
- ✅ **Dependencies Audit** - Revisión regular de vulnerabilidades

### **Comandos de Seguridad**

```bash
# Auditar vulnerabilidades en dependencias
npm audit

# Corregir vulnerabilidades automáticamente
npm audit fix

# Ver reporte detallado
npm audit --json
```

### **Recomendaciones**

- 🔐 Mantén actualizadas las dependencias regularmente
- 🔑 No compartas tus credenciales de EmailJS públicamente
- 🛡️ Revisa periódicamente los logs de npm audit
- 🔒 Usa HTTPS en producción (Vercel lo hace automáticamente)

## 🤝 Contribución

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 👨‍💻 Autor

**García Luis**  
🌐 **Portfolio:** [https://luis-garcia-portfolio.vercel.app/](https://luis-garcia-portfolio.vercel.app/)

- GitHub: [@garcialuis23](https://github.com/garcialuis23)
- LinkedIn: [Luis García Díaz](https://www.linkedin.com/in/luis-garc%C3%ADa-d%C3%ADaz-b67175313/)
- Email: [garciadiazluis23@gmail.com](mailto:garciadiazluis23@gmail.com)

---

⭐ Si este proyecto te ayuda, ¡no olvides darle una estrella!
