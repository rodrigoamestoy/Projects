const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
const password = document.getElementById('password1');
const passwordConfirm = document.getElementById('password2');
const check = document.getElementById('terminos');

nombre.addEventListener('textInput', nombreVerify);
apellido.addEventListener('textInput', apellidoVerify);
email.addEventListener('textInput', emailVerify);
password.addEventListener('textInput', passwordVerify);
passwordConfirm.addEventListener('textInput', passwordConfirmVerify);

/* Si se agrega un form

const form = document.getElementById('myForm');

form.addEventListener("submit", event => {
    event.preventDefault();
    redirect(event)
})

*/


function redirect() {
    if (nombre.value.length < 2) {
        nombre.style.border = "1px solid red";
        nombre.focus();
        showAlertError();
        return false;
    } if (apellido.value.length < 2) {
        apellido.style.border = "1px solid red";
        apellido.focus();
        showAlertError();
        return false;
    } if (email.value.length < 6) {
        email.style.border = "1px solid red";
        email.focus();
        showAlertError();
        return false;
    } if (password.value.length < 6) {
        password.style.border = "1px solid red";
        password.focus();
        showAlertError();
        return false;
    } if (passwordConfirm.value !== password.value) {
        passwordConfirm.style.border = "1px solid red";
        passwordConfirm.focus();
        showAlertError();
        return false;
    } if (check.checked != true) {
        check.style.border = "1px solid red";
        check.focus();
        showAlertError();
        return false;
    }
    else {
        showAlertSuccess();
        return false;
    }
}
function nombreVerify() {
    if (nombre.value.length > 1) {
        nombre.style.border = "1px solid silver";
        showAlertError.classList.remove("show");
        return true;
    }
}
function apellidoVerify() {
    if (apellido.value.length > 1) {
        apellido.style.border = "1px solid silver";
        showAlertError.classList.remove("show");
        return true;
    }
}
function emailVerify() {
    if (email.value.length > 5) {
        email.style.border = "1px solid silver";
        showAlertError.classList.remove("show");
        return true;
    }
}
function passwordVerify() {
    if (password.value.length > 5) {
        password.style.border = "1px solid silver";
        showAlertError.classList.remove("show");
        return true;
    }
}
function passwordConfirmVerify() {
    if (passwordConfirm.value.length == password.value.length) {
        passwordConfirm.style.border = "1px solid silver";
        showAlertError.classList.remove("show");
        return true;
    }
}
function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


