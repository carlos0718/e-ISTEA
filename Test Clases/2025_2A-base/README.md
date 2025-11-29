# 🛍️ E-commerce Product Gallery

## 📋 Descripción del Proyecto

Este proyecto es una aplicación web de galería de productos que implementa un diseño responsive moderno con transiciones suaves y efectos interactivos. Utiliza Bootstrap 5 para el diseño base y CSS personalizado para las animaciones.

## 🚀 Características Implementadas

### ✅ Diseño Responsive

-   **Mobile-First Approach**: Diseño optimizado para dispositivos móviles
-   **Breakpoints Bootstrap**: Adaptación automática a diferentes tamaños de pantalla
-   **Grid System**: Sistema de columnas flexible y dinámico

### ✅ Transiciones y Animaciones

-   **Hover Effects**: Efectos interactivos al pasar el mouse sobre las cards
-   **Animaciones de Entrada**: Fade-in suave para las cards al cargar
-   **Efectos de Elevación**: Cards que se elevan con sombras dinámicas
-   **Escala de Imágenes**: Zoom sutil en las imágenes al hacer hover

### ✅ Funcionalidades Core

-   **API Integration**: Consumo de datos desde API externa
-   **Modal System**: Ventanas modales para mostrar detalles de productos
-   **Search Functionality**: Búsqueda en tiempo real (preparado para implementar)
-   **Product Cards**: Display de productos con información estructurada

## 🛠️ Tecnologías Utilizadas

-   **HTML5**: Estructura semántica
-   **CSS3**: Estilos personalizados y animaciones
-   **JavaScript (ES6+)**: Lógica de la aplicación
-   **Bootstrap 5.3.8**: Framework CSS para diseño responsive
-   **Fetch API**: Consumo de datos externos

## 📁 Estructura del Proyecto

```
2025_2A/
├── index.html              # Página principal
├── README.md              # Documentación del proyecto
├── css/
│   └── styles.css         # Estilos personalizados y animaciones
└── src/
    ├── index.js           # Lógica principal de la aplicación
    ├── api.js             # Configuración y funciones de API
    └── components/
        └── modal.js       # Componente modal reutilizable
```

## 🎨 Sistema de Diseño

### Breakpoints Responsive

```css
/* Mobile (< 576px) */
.row-cols-1  /* 1 producto por fila */

/* Small (≥ 576px) */
/* 1 producto por fila */

/* Small (≥ 576px) */
/* 1 producto por fila */

/* Small (≥ 576px) */
/* 1 producto por fila */

/* Small (≥ 576px) */
/* 1 producto por fila */

/* Small (≥ 576px) */
/* 1 producto por fila */

/* Small (≥ 576px) */
/* 1 producto por fila */

/* Small (≥ 576px) */
/* 1 producto por fila */

/* Small (≥ 576px) */
.row-cols-sm-2  /* 2 productos por fila */

/* Medium (≥ 768px) */
.row-cols-md-3  /* 3 productos por fila */

/* Large (≥ 992px) */
.row-cols-lg-4; /* 4 productos por fila */
```

### Efectos de Transición

-   **Duración**: 0.3s con easing `ease-in-out`
-   **Elevación**: `translateY(-5px)` en hover
-   **Sombra**: `box-shadow` dinámica con opacidad
-   **Escala**: `scale(1.05)` para imágenes
-   **Color**: Cambio de color en títulos y bordes

## 🔧 Configuración e Instalación

### Prerrequisitos

-   Navegador web moderno
-   Servidor web local (opcional, para desarrollo)

### Instalación

1. Clona o descarga el proyecto
2. Abre `index.html` en tu navegador
3. ¡Listo! La aplicación debería funcionar inmediatamente

## 📱 Responsive Design

### Comportamiento por Dispositivo

| Dispositivo    | Breakpoint | Columnas | Layout         |
| -------------- | ---------- | -------- | -------------- |
| Móvil          | < 576px    | 1        | Stack vertical |
| Tablet pequeña | ≥ 576px    | 2        | Grid 2x2       |
| Tablet grande  | ≥ 768px    | 3        | Grid 3x3       |
| Desktop        | ≥ 992px    | 4        | Grid 4x4       |

### Clases Bootstrap Utilizadas

```html
<div class="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 g-4 justify-content-center"></div>
```

## 🎭 Sistema de Animaciones

### Transiciones CSS Implementadas

#### 1. Card Hover Effects

```css
.card {
	transition: all 0.3s ease-in-out;
}

.card:hover {
	transform: translateY(-5px);
	box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
	border-color: #007bff;
}
```

#### 2. Image Scale Effect

```css
.card-img-top {
	transition: transform 0.3s ease-in-out;
}

.card:hover .card-img-top {
	transform: scale(1.05);
}
```

#### 3. Title Color Transition

```css
.card-title {
	transition: color 0.3s ease-in-out;
}

.card:hover .card-title {
	color: #007bff;
}
```

#### 4. Entrance Animation

```css
.card {
	animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
	from {
		opacity: 0;
		transform: translateY(30px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
```

## 🔌 API Integration

### Estructura de Datos

```javascript
{
    id: number,
    title: string,
    description: string,
    price: number,
    image: string,
    category: string
}
```

### Funciones API

-   `getProducts()`: Obtiene lista de productos
-   Manejo de errores y loading states
-   Integración con modal system

## 🎯 Componentes

### Product Card

-   Imagen del producto con `object-fit: contain`
-   Título con truncamiento inteligente
-   Descripción con límite de líneas (3 líneas)
-   Botón de acción con efectos hover

### Modal System

-   Componente reutilizable
-   Información detallada del producto
-   Animaciones de entrada/salida
-   Responsive design

## 🎨 Personalización

### Colores del Tema

```css
/* Color primario */
--primary-color: #007bff;

/* Colores de sombra */
--shadow-light: rgba(0, 0, 0, 0.15);
--shadow-primary: rgba(0, 123, 255, 0.3);
```

### Modificación de Efectos

Para personalizar las transiciones, edita `css/styles.css`:

1. **Velocidad**: Cambia `0.3s` por tu duración preferida
2. **Elevación**: Modifica `translateY(-5px)` para más/menos elevación
3. **Colores**: Cambia `#007bff` por tu paleta de colores
4. **Escala**: Ajusta `scale(1.05)` para el efecto de zoom

## 🚀 Optimizaciones Implementadas

### Performance

-   CSS transitions nativas (GPU accelerated)
-   Lazy loading de imágenes (preparado)
-   Debouncing en búsqueda (preparado)

### Accesibilidad

-   Alt text en imágenes
-   Navegación por teclado
-   Contraste de colores adecuado
-   ARIA labels en elementos interactivos

### SEO

-   Meta tags optimizados
-   Estructura HTML semántica
-   Títulos descriptivos

## 🔮 Próximas Mejoras

### Funcionalidades Planificadas

-   [ ] Filtros por categoría
-   [ ] Ordenamiento de productos
-   [ ] Carrito de compras
-   [ ] Wishlist
-   [ ] Paginación
-   [ ] Lazy loading de imágenes

### Optimizaciones Técnicas

-   [ ] Service Worker para cache
-   [ ] PWA capabilities
-   [ ] Optimización de imágenes
-   [ ] Bundle optimization

## 🐛 Troubleshooting

### Problemas Comunes

#### Las transiciones no funcionan

-   Verifica que `css/styles.css` esté correctamente vinculado
-   Asegúrate de que no haya conflictos con otros estilos

#### Layout no responsive

-   Confirma que Bootstrap 5 esté cargado
-   Verifica las clases `row-cols-*` en el HTML

#### Modal no se abre

-   Revisa la consola del navegador para errores JavaScript
-   Verifica que el componente modal esté importado correctamente

## 📄 Licencia

Este proyecto es de uso educativo y demostrativo.

## 👨‍💻 Autor

Desarrollado como proyecto de práctica para implementar conceptos de:

-   Responsive Design
-   CSS Animations
-   Bootstrap 5
-   JavaScript ES6+
-   API Integration

---

**Fecha de última actualización**: Enero 2025
**Versión**: 1.0.0
