const formLogin = document.getElementById('login-form');
const inputUsuario = document.getElementById('usuario');
const inputContrasena = document.getElementById('contrasena');
const mensajeError = document.getElementById('login-error');
const btnTogglePassword = document.getElementById('toggle-password');

const iconoPassword = btnTogglePassword.querySelector('i');

btnTogglePassword.addEventListener('click', function() {
    if (inputContrasena.type === 'password') {
        inputContrasena.type = 'text';
        iconoPassword.classList.remove('fa-eye');
        iconoPassword.classList.add('fa-eye-slash');
    } else {
        inputContrasena.type = 'password';
        iconoPassword.classList.remove('fa-eye-slash');
        iconoPassword.classList.add('fa-eye');
    }
});

formLogin.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const usuario = inputUsuario.value.trim();
    const contrasena = inputContrasena.value.trim();

    if (usuario === "" || contrasena === "") {
        mensajeError.textContent = "Por favor, completá todos los campos para ingresar.";
        mensajeError.classList.remove('d-none');
        return; 
    }

    if (usuario === "ramiro" && contrasena === "grupo4") {
        mensajeError.classList.add('d-none');
        window.location.href = 'portal.html';
    } else {
        mensajeError.textContent = "Usuario o contraseña incorrectos. Intentá con 'ramiro' y 'grupo8'.";
        mensajeError.classList.remove('d-none');
    }
});