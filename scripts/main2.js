
function pintar() {
    const inData = JSON.parse(localStorage.getItem("usuarios")) || [];
    const container = document.querySelector(".container");

    inData.forEach(function (persona) {
        container.innerHTML += `<div class="card" style="width: 18rem;">
<img src="../assets/images/g2project/istockphoto.jpg" class="card-img-top" alt="...">
<div class="card-body">
  <p id="nombre"> ${persona.nombre}</p>
  <p id="email">${persona.email}</p>
</div>
</div>`
    })
}

pintar()

//En la linea 27 me salta un conflicto que me dice que container no está definido, sí hace lo que le digo que es borrar todo el contenido del local storage, pero no lo hace de forma automática y los cambios no se ven efectivos hasta que no refrescas la página 


const btnBorrar = document.getElementById("btn-borrar");

btnBorrar.addEventListener("click", function () {

    localStorage.removeItem("usuarios");
    container.innerHTML = ""
});
