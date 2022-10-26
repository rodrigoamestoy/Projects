"use strict";

document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('formulario'),
    terminos = document.getElementById('terminos'),
    terminosBtn = document.getElementById('terminos-btn'),
    debeAceptar = document.getElementById('debeAceptar'),
    pass1 = document.getElementById('password1'),
    pass2 = document.getElementById('password2');

    function equalPass() {
        if (pass1.value != pass2.value) {
            pass2.classList.add('is-invalid');
        } else {
            pass2.classList.remove('is-invalid');
            return true;
        }
    }
    
    form.addEventListener('submit', () => {
        if (terminos.checked == false) {
            terminos.classList.add('is-invalid');
            terminos.style.color = 'red'
            terminos.style.border = "1px solid red";
            terminosBtn.style.color = 'red';
            debeAceptar.innerHTML = 'Debe aceptar los términos del servicio';
            debeAceptar.style.color = 'red';
        } else if (equalPass() != true) {
            alert('Las contraseñas no coinciden');
        } else {
            form.submit();
        }
        form.classList.add('was-validated')
    }, false)

    terminos.addEventListener('click', () =>  {
        terminos.classList.remove('is-invalid');
        terminos.style.color = ''
        terminos.style.border = "";
        terminosBtn.style.color = '';
        debeAceptar.innerHTML = '';
        debeAceptar.style.color = '';
    })
}); 