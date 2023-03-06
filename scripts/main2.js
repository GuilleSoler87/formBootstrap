const container = document.querySelector(".container");
function pintar() {
    const inData = JSON.parse(localStorage.getItem("usuarios")) || [];
   

    inData.forEach(function (persona) {
        container.innerHTML += `<div class="card m-1 " style="width: 18rem; ">
<img src="../assets/images/g2project/istockphoto.jpg" class="card-img-top" alt="...">
<div class="card-body">
  <p id="nombre"> ${persona.nombre}</p>
  <p id="email">${persona.email}</p>
</div>
</div>`
    })
}

pintar()

const btnBorrar = document.getElementById("btn-borrar");

btnBorrar.addEventListener("click", function () {

    localStorage.removeItem("usuarios");
    container.innerHTML = ""
});
