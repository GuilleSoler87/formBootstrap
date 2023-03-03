const form = document.getElementById("formulario");
const nombreInput = form.elements['nombre'];
const emailInput = form.elements['email'];
const contraseña1Input = form.elements['contraseña'];
const contraseña2Input = form.elements['contraseña2'];
const msg = document.querySelector(".msg")
const contenedor = document.querySelector(".container");

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    const reEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; //patron del correo
    const reContraseña = /^(?=.*\d).{4,8}$/ // acepta numeros, numeros+letras y entre 4-8

    if (nombreInput.value === "" || emailInput.value === "" || contraseña1Input.value === "" || contraseña2Input.value === "") {
        msg.innerHTML = `<div class="alert alert-danger">Please enter all fields</div>`;

    } else if (reEmail.test(emailInput.value) !== true) {
        msg.innerHTML = `<div class="alert alert-danger">Please enter a correct email</div>`;

    } else if (contraseña1Input.value !== (contraseña2Input.value)) {
        msg.innerHTML = `<div class="alert alert-danger">Please enter a same password</div>`;

    } else if (reContraseña.test(contraseña1Input.value) !== true) {
        msg.innerHTML = `<div class="alert alert-danger">Please enter a correct password value</div>`;


    } else {
        const nombre = nombreInput.value;
        const email = emailInput.value;
        const contraseña1 = contraseña1Input.value;
        const contraseña2 = contraseña2Input.value;


        const inData = JSON.parse(localStorage.getItem("usuarios")) || [];


        const newData = { nombre, email, contraseña1, contraseña2 };
        inData.push(newData);


        localStorage.setItem("usuarios", JSON.stringify(inData));
        msg.innerHTML = `<div class="alert alert-success">Usuario creado correctamente</div>`

        setTimeout(function () {
            msg.innerHTML = "";
            window.location.href = "pages/g2project.html";
            pintar()
        }, 3000);
    }
    setTimeout(function () {
        msg.innerHTML = "";
    }, 3000);
}
