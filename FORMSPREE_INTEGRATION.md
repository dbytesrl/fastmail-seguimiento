# Integración Formspree - Guía Técnica

## Resumen de Integración

Este proyecto usa **@formspree/react** para la gestión de formularios.

### Endpoint Actual
- **Form ID:** `mdabgblv`
- **URL completa:** `https://formspree.io/f/mdabgblv`
- **Componente:** `src/components/ContactForm.tsx`

---

## Cómo Funciona

### 1. Hook useForm
```tsx
import { useForm, ValidationError } from "@formspree/react";

const [state, handleSubmit] = useForm("mdabgblv");
```

El hook proporciona:
- `state.submitting` — Indica si se está enviando
- `state.succeeded` — True si se envió exitosamente
- `state.errors` — Array de errores de validación
- `handleSubmit` — Función para enviar el formulario

### 2. Validación en Tiempo Real
```tsx
<input type="email" name="email" required />
<ValidationError field="email" errors={state.errors} />
```

Formspree valida automáticamente:
- Campos requeridos
- Formato de email
- Errores del servidor

### 3. Estados del Formulario

| Estado | Descripción | UI |
|--------|-------------|-----|
| `submitting: true` | Enviando datos | Botón deshabilitado |
| `succeeded: true` | Enviado correctamente | Mensaje verde mostrado |
| `errors` | Errores de validación | Mensajes bajo cada campo |

---

## Cambiar el Formulario

Si necesitás cambiar el ID de Formspree:

### Paso 1: Crear nuevo formulario en Formspree
1. Ir a https://formspree.io
2. Crear cuenta o ingresar
3. Nuevo formulario
4. Copiar el ID (parte después de `/f/`)

### Paso 2: Actualizar el código
Editar `src/components/ContactForm.tsx` línea 6:

```tsx
// Anterior
const [state, handleSubmit] = useForm("mdabgblv");

// Nuevo (reemplazar XXX)
const [state, handleSubmit] = useForm("XXX");
```

### Paso 3: Verificar en desarrollo
```bash
npm run dev
```

Ir a http://localhost:3000 y enviar un test del formulario.

---

## Campos del Formulario

El formulario actual captura:

| Campo | Tipo | Requerido | Descripción |
|-------|------|-----------|-------------|
| `name` | text | ✅ | Nombre completo |
| `email` | email | ✅ | Correo electrónico |
| `phone` | tel | ❌ | Teléfono (opcional) |
| `tracking` | text | ❌ | Número de tracking |
| `message` | textarea | ✅ | Mensaje de consulta |

Para cambiar campos, editar el `<form>` en `src/components/ContactForm.tsx`.

---

## Deploy en Vercel

El formulario funciona automáticamente en Vercel sin configuración adicional:

```bash
# Push a tu repositorio Git
git push origin main

# Vercel detecta cambios y redeploy automáticamente
# El formulario está listo inmediatamente
```

**No requiere variables de entorno** — el ID está en el código.

---

## Troubleshooting

### El formulario no envía
- ✅ Verificar que el ID sea correcto en `src/components/ContactForm.tsx`
- ✅ Revisar la consola del navegador (F12 → Console)
- ✅ Ir a https://formspree.io y verificar que el formulario exista

### Los emails no llegan
- ✅ Verificar que tu email está confirmado en Formspree
- ✅ Revisar la bandeja de spam
- ✅ En Formspree dashboard, revisar si hay errores en los envíos

### Errores de validación no aparecen
- ✅ Asegurar que `<ValidationError field="..." />` está debajo de cada input
- ✅ El `name` del input debe coincidir con el `field` del ValidationError

---

## Documentación Oficial

- [Formspree React Docs](https://github.com/formspree/formspree-js/tree/master/packages/formspree-react)
- [Guía Formspree](https://help.formspree.io/hc/en-us/articles/360055613373-Formspree-React)
- [Dashboard Formspree](https://formspree.io/forms)

---

*Última actualización: Mayo 2026*
