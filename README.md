# FORMULARIO - PROYECTO BOOTSTRAP

En este sitio web podrás encontrar contenido relacionado con Bootstrap, en concreto un formulario que utiliza varios componentes Bootstrap en combinación con JavaScript. El formulario registra Nombre y correo de usuario, que seguidamente se debe validar con dos contraseñas las cuales deben coincidir. Una vez la condición anterior se cumple todos los usuarios aparecen en una segunda página donde se obtiene el contenido del DOM adaptado a un formato de tarjetas que también es otro componente de Bootstrap.

## Comenzando 🚀

Para poder desplegar el proyecto correctamente, desde GitHub y con el acceso correspondiente al repositorio de la web, clonar el repositorio en su ordenador.

## Ejecutando Bootstrap ⌨️

Para poder ejecutar Bootstrap, debemos instalarlo en nuestro HTML dentro del <head>.
jsDelivr es un CDN (red de distribución de contenidos). Es un grupo de servidores distribuidos en muchas ubicaciones. Estos servidores almacenan copias duplicadas de datos para que los servidores puedan cumplir con las solicitudes de datos en función de qué servidores están más cerca de los respectivos usuarios finales.

Omita la descarga con jsDelivr para entregar la versión en caché de CSS y JS compilados de Bootstrap a su proyecto.

Si está utilizando JavaScript compilado, no olvide incluir versiones CDN de jQuery y Popper js antes.

Nosotros hemos utilizado:

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
    integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
    integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
    integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
    crossorigin="anonymous"></script>

Aunque podremos encontrar en otros sitios web otras versiones o compilaciones de CSS y JavaScript.

## Ejecutando JavaScript ⌨️

Dentro del <body> de cada HTML introducimos <script src="scripts/......js"></script>
Con este comando vinculamos los archivos .js a su archivo .html correspondiente.

En los códigos JavaScript encontramos funciones del tipo:

- form.addEventListener('submit', onSubmit); --- (Se activa una acción cuando ocurre un evento).

- De condición (if, else if, else) --- (Se realizan ciertas acciones cuando se cumplen las condiciones o no se cumplen).

- localStorage.setItem("usuarios", JSON.stringify(inData)); --- (Subir información al Local Storage haya o no contenido previo en la array, en combinación con el código inferior).

- const inData = JSON.parse(localStorage.getItem("usuarios")) || []; --- (Acceder a la información del local storage).

- setTimeout(function ()) {} --- (Realizar acciones una vez transcurrido el tiempo definido).

- function pintar() {inData.forEach(function (persona)) {}} --- Pintar en el DOM la información extraida del Local Storage.

## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [*VISUAL STUDIO CODE*](https://code.visualstudio.com/) - Code editor used (Version: 1.75.1)
* [*Live Server*](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) - Manejador de dependencias
* [*GitHub*](https://github.com/) - Almacenamiento de repositorios
* [*Bootstrap*](https://getbootstrap.com/) - framework front end CSS y Javascript (Usada esta web para sus componentes)


## Versionado 📌

Usamos [SemVer](http://semver.org/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/GuilleSoler87/Rampup.git).

## Autores ✒️

* **Guillermo Soler Fernández** - *Proyecto Bootstrap1* - [GuilleSoler87](https://github.com/GuilleSoler87)

* **Gonzalo Martí Peirats** - *Proyecto Bootstrap1* - [Goner10](https://github.com/Goner10)


## Licencia 📄

Este proyecto actualmente no tiene licencia. Puede usarse todo su contenido sin el requisito de la misma.

## Expresiones de Gratitud 🎁

* Sofía Pinilla y Fede Arévalo han hecho posible la realización de este proyecto 📢
* Cláramente los autores de este proyecto se merecen unas 🍺 por realizar la actividad en tiempo record y tener el fin de semana libre 😎.
* Ha sido una actividad muy interesante y divertida en la que se han aprendido y asimilado muchos conceptos 📚🖊️💻.

