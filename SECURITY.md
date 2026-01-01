# 🔒 Política de Seguridad

## 📋 Versiones Soportadas

| Versión | Soporte          |
| ------- | ---------------- |
| 0.0.x   | ✅ Activo        |

## 🔐 Medidas de Seguridad Implementadas

### **1. Protección de Credenciales**
- ✅ Las API keys de EmailJS están en variables de entorno (`.env`)
- ✅ Archivo `.env` incluido en `.gitignore`
- ✅ Archivo `.env.example` como plantilla sin credenciales reales

### **2. Protección contra XSS (Cross-Site Scripting)**
- ✅ React escapa automáticamente el contenido
- ✅ No se usa `dangerouslySetInnerHTML`
- ✅ Sanitización de inputs del formulario
- ✅ Content Security Policy (CSP) headers configurados

### **3. Protección de Formulario**
- ✅ **Rate Limiting**: Máximo 1 envío cada 5 segundos
- ✅ **Input Sanitization**: Eliminación de caracteres peligrosos (`<>`)
- ✅ **Validación HTML5**: Campos requeridos y tipos de input
- ✅ **Validación de credenciales**: Verifica que las variables de entorno estén configuradas

### **4. Headers de Seguridad**
```html
<!-- Content Security Policy -->
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; 
               style-src 'self' 'unsafe-inline'; 
               img-src 'self' data: https: blob:; 
               font-src 'self' data:; 
               connect-src 'self' https://api.emailjs.com;
               frame-ancestors 'none';
               base-uri 'self';
               form-action 'self';">

<!-- Prevent MIME type sniffing -->
<meta http-equiv="X-Content-Type-Options" content="nosniff">

<!-- Prevent clickjacking -->
<meta http-equiv="X-Frame-Options" content="DENY">

<!-- Referrer policy -->
<meta name="referrer" content="strict-origin-when-cross-origin">
```

### **5. Enlaces Externos Seguros**
- ✅ Todos los enlaces externos usan `rel="noopener noreferrer"`
- ✅ Previene ataques de reverse tabnabbing

### **6. Gestión de Dependencias**
- ✅ Auditoría regular con `npm audit`
- ✅ Dependencias actualizadas automáticamente cuando es posible
- ✅ 0 vulnerabilidades críticas o altas

## 🐛 Reportar una Vulnerabilidad

Si encuentras una vulnerabilidad de seguridad, por favor:

1. **NO** abras un issue público
2. Envía un email a: **garciadiazluis23@gmail.com**
3. Incluye:
   - Descripción detallada de la vulnerabilidad
   - Pasos para reproducirla
   - Posible impacto
   - Solución sugerida (si la tienes)

### **Tiempo de Respuesta**
- Respuesta inicial: **48 horas**
- Resolución: **7 días** (dependiendo de la severidad)
- Publicación del fix: **Inmediatamente** después de la resolución

## 🔍 Auditoría de Seguridad

### **Comandos útiles**

```bash
# Auditar vulnerabilidades
npm audit

# Auditar con detalles en JSON
npm audit --json

# Corregir vulnerabilidades automáticamente
npm audit fix

# Forzar correcciones (puede romper compatibilidad)
npm audit fix --force

# Verificar outdated packages
npm outdated
```

### **Revisión Periódica**
- 📅 **Semanal**: Revisión de dependencias con `npm outdated`
- 📅 **Mensual**: Auditoría completa con `npm audit`
- 📅 **Trimestral**: Revisión manual del código en busca de nuevas vulnerabilidades

## 🛡️ Mejores Prácticas

### **Para Desarrolladores**

1. **Nunca commitees archivos `.env`**
   ```bash
   # Verificar antes de commit
   git status
   
   # Si accidentalmente agregaste .env
   git reset HEAD .env
   git checkout -- .env
   ```

2. **Rota tus credenciales regularmente**
   - Cambia las API keys de EmailJS cada 3-6 meses
   - Actualiza inmediatamente si sospechas de una filtración

3. **Mantén las dependencias actualizadas**
   ```bash
   npm update
   npm audit fix
   ```

4. **Revisa el código antes de mergear**
   - No uses `eval()`, `innerHTML`, `dangerouslySetInnerHTML`
   - Sanitiza todos los inputs del usuario
   - Valida datos del backend

### **Para Usuarios Finales**

1. **Protege tus credenciales**
   - No compartas tu archivo `.env`
   - No subas screenshots con API keys visibles
   - Usa credenciales diferentes para desarrollo y producción

2. **Mantén actualizado el proyecto**
   ```bash
   git pull origin main
   npm install
   npm audit fix
   ```

## 📚 Recursos de Seguridad

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [React Security Best Practices](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml)
- [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [npm Security Best Practices](https://docs.npmjs.com/packages-and-modules/securing-your-code)

## 📝 Historial de Seguridad

### **v0.0.0 - Enero 2026**
- ✅ Implementación inicial de medidas de seguridad
- ✅ Variables de entorno para API keys
- ✅ CSP headers configurados
- ✅ Input sanitization en formulario
- ✅ Rate limiting implementado
- ✅ 0 vulnerabilidades encontradas en dependencias

---

**Última actualización**: Enero 1, 2026  
**Próxima revisión**: Febrero 1, 2026
