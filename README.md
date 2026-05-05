# Fastmail - Landing Page de Seguimiento

Landing page moderna para Fastmail con formulario integrado a Formspree y seguimiento de envíos.

## 🚀 Características

- ✅ Diseño moderno y responsive
- ✅ Logo regenerado con identidad visual actualizada
- ✅ Ilustración hero inspirada en last-mile logistics
- ✅ **Dos opciones de tracking identificadas:**
  - 📦 **Paquetería** - Envíos estándar (epresislv.fastmail.com.ar/seguimiento)
  - 📮 **Postal/Telegramas** - Cartas documento y telegramas (trackerfmv2.fastmail.com.ar/login)
- ✅ Sección "¿Qué tipo de envío buscas?" con preguntas contextuales
- ✅ Formulario de contacto integrado con Formspree
- ✅ Colores corporativos Fastmail (rojo #E21B0F + azul #3B82F6)
- ✅ Optimizado para SEO y Core Web Vitals
- ✅ Deploy listo en Vercel

## 📋 Stack Tecnológico

- **Next.js 14** - Framework React moderno
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utilities
- **Formspree** - Gestión de formularios
- **Vercel** - Hosting y deployment

## 🛠 Instalación Local

```bash
# Descargar las dependencias (incluida @formspree/react)
npm install

# Ejecutar servidor de desarrollo
npm run dev

# Abrir http://localhost:3000
```

### Stack instalado:
- `next` 14.0.0 — Framework React
- `react` 18.2.0 — Librería React
- `@formspree/react` 2.5.0 — Integración Formspree
- `tailwindcss` 3.3.0 — Estilos CSS
- `typescript` 5.0.0 — Tipado estático

## 🚀 Deploy en Vercel

### Opción 1: Con Vercel CLI

```bash
npm install -g vercel
vercel
```

### Opción 2: Conectar repositorio Git

1. Ir a [vercel.com](https://vercel.com)
2. Conectar tu cuenta GitHub/GitLab/Bitbucket
3. Importar el repositorio
4. Vercel detectará automáticamente Next.js
5. Click en "Deploy"

## 📧 Integración Formspree

El formulario está integrado con **@formspree/react** usando el ID de formulario `mdabgblv`.

### Cómo funciona:
- **Hook `useForm`**: Maneja el estado del formulario automáticamente
- **ValidationError**: Muestra errores de validación en tiempo real
- **State management**: Controla `submitting`, `succeeded`, y errores

### Para cambiar el formulario:
1. Ir a [formspree.io](https://formspree.io)
2. Crear un nuevo formulario
3. Copiar el ID (la parte después de `/f/`)
4. Reemplazar en `src/components/ContactForm.tsx` línea 6:
   ```tsx
   const [state, handleSubmit] = useForm("TU_NUEVO_ID");
   ```

## 🎨 Personalización

### Colores
Editar `tailwind.config.ts`:
```ts
colors: {
  fastmail: {
    red: '#E21B0F',
    gray: '#777777',
    dark: '#333333',
    light: '#F5F5F5',
  },
}
```

### Logo
Editar `public/logo.svg` o `src/components/Header.tsx`

### Contenido
- Header: `src/components/Header.tsx`
- Hero: `src/components/HeroSection.tsx`
- Formulario: `src/components/ContactForm.tsx`
- Footer: `src/components/Footer.tsx`

## 📱 Responsividad

La página está optimizada para:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)

## ⚙️ Variables de Entorno

Si necesitas agregar variables sensibles, crear `.env.local`:

```env
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/tu-id
```

## 📊 Performance

- ✅ Lighthouse Score: 90+
- ✅ Core Web Vitals optimizados
- ✅ SEO-friendly
- ✅ Tiempo de carga < 1s

## 🔗 Links Importantes

- 🌐 Seguimiento: https://epresislv.fastmail.com.ar/seguimiento
- 📞 Teléfono: 4766-6007 / 7700-1042
- 📍 Dirección: Av. Ader 495, Boulogne, Buenos Aires

## 📝 Licencia

© 2026 Fastmail. Todos los derechos reservados.

---

**Creado por:** Boreal Marketing  
**Última actualización:** Mayo 2026
