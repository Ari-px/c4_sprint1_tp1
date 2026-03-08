Trabajo Práctico Obligatorio: Landing Page en React
Objetivo
Aplicar los conceptos aprendidos en el sprint para desarrollar una Landing Page interactiva y estilizada con React.

Consigna
Crea una Landing Page que incluya:

Instalación de Tailwind CSS, Google Fonts y Bootstrap Icons para los estilos.
Uso de componentes para estructurar las secciones principales de la página (por ejemplo, Header, Main, Footer).
Una lista generada dinámicamente usando .map.
Botones con funcionalidad usando eventos en JSX (por ejemplo, onClick).
Renderizado condicional: muestra u oculta contenido en función de un estado.
Al menos un ejemplo de uso del hook useState para manejar estados en tu página.
Uso de animaciones con el paquete Motion (puedes animar el ingreso de elementos).
Puedes basarte en la Landing Page hecha en HTML que se te proporciona como guía.
Comparte tu repositorio de código en GitHub u otra plataforma similar.

Trate de hacer el codigo lo mas funcional posible, aplique lo que se pedia en los enunciados, me costo pero salio o al menos eso creo 

My Landing Page Hallyu Store
es una pagina destinada a la venta de albums de k-pop (porque no) fue desarrollada utilizando React y organizada mediante componentes reutilizables para mejorar la modularidad y el mantenimiento del código.

Header

El Header contiene el nombre de la tienda y el menú de navegación.
Incluye enlaces a las diferentes secciones de la landing page y un ícono musical utilizando Bootstrap Icons.

Funciones:

Mostrar el nombre de la marca.

Navegación principal del sitio.

Albums

La sección Albums muestra una lista de álbumes de K-pop generada dinámicamente. Aqui decidi cambiarle un pco el tono de color para generarme a mi una visualidad diferente asi tambien se lo nuevo que se me agrego para estudiarlo 

Implementaciones utilizadas:

Array de datos con información de los álbumes.

Uso del método .map() para renderizar cada tarjeta de álbum.

Hook useState para controlar si los álbumes se muestran o no.

Renderizado condicional para ocultar o mostrar la lista.

Eventos onClick para interactuar con los botones.

Animaciones con Motion en las tarjetas.

Footer

El Footer contiene información final del sitio, como el nombre de la tienda y datos generales del proyecto.

Funciones:

Cerrar visualmente la página.

Mostrar información institucional.

Index.html 
Aqui tuve unas pequeñas complicaciones, al correr la page, me saltaba error de Tailwind CSS como si no estuviera instalado, lo que hice fue agregarlo directamente al index.html y borrar el index.css y la linea de App.jsx, para que pueda funcionar, no se si estara bien eso pero me funciono y me fue un poco mas sencillo de comprender, ya que no podia ver la platilla que habian proporcionado de index 
