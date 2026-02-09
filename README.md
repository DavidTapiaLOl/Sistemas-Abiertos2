¿Qué es React?

React es una herramienta para crear páginas web que cambian cuando el usuario interactúa con ellas, por ejemplo al hacer clic o escribir.

¿Qué es un componente?

Un componente es una parte de la página web.
Cada componente representa algo específico, como un botón, una tarjeta o un formulario.
Una página se construye juntando varios componentes.

¿Qué es el state (estado)?

El state es la información que puede cambiar dentro de un componente.
Cuando el state cambia, la pantalla se actualiza automáticamente.

Ejemplos de state:

Un número

Un texto

Si algo está activo o no

¿Qué es useEffect?

useEffect se usa para ejecutar una acción cuando sucede algo.

Se usa, por ejemplo:

Cuando la página se carga

Cuando cambia un state

Para obtener datos de internet


Persistencia con LocalStorage
Implemente la lógica para sincronizar el estado del carrito con el almacenamiento local:
- Al iniciar la app, revisamos si existe un carrito previo en `localStorage`.
- Utilizamos un `useEffect` que detecta cambios en el carrito y guarda la versión actualizada automáticamente.

Gestión del Carrito
- **State Dinámico:** El carrito maneja la adición de productos, eliminación y actualización de cantidades de forma reactiva.
- **Derivación de Estado:** Cálculo del total a pagar y validación de existencia de productos mediante funciones de JavaScript integradas en los componentes.

Estructura del Proyecto

- `src/components/`: Contiene los archivos `Header.jsx`, `Card.jsx`, `Item.jsx` y `Footer.jsx` que estructuran la interfaz.
- `src/db/`: Contiene el archivo `db.js` que simula la base de datos de nuestros productos.
