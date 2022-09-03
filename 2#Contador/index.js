// Contador

let contador = 0; 

// Function Update

function updateContador() {
    count.innerHTML = contador;
}    

//Div

const firstdiv = document.createElement('div');
firstdiv.classList.add('container');
document.body.appendChild(firstdiv);

// Sec Div

const secdiv = document.createElement('div')
secdiv.id = "counter";
firstdiv.appendChild(secdiv);

// Btn Container

const thirddiv = document.createElement('div');
thirddiv.classList.add('btn-container')
firstdiv.appendChild(thirddiv);

// Title

const title = document.createElement('p');
title.id = 'title';
secdiv.appendChild(title);
title.innerHTML = 'Counter';

// Count

const count = document.createElement('p');
count.innerHTML = contador;
count.classList.add('count')
secdiv.appendChild(count);

//Boton 1

const decreasebtn = document.createElement('button');
decreasebtn.innerHTML = 'DECREASE';
decreasebtn.classList.add('btn')
thirddiv.appendChild(decreasebtn);

decreasebtn.addEventListener("click", () => {
    contador--;
    updateContador();
})

//Boton 2

const resetbtn = document.createElement('button');
resetbtn.innerHTML = 'RESET';
resetbtn.classList.add('btn')
thirddiv.appendChild(resetbtn);

resetbtn.addEventListener("click", () => {
    contador = contador - contador;
    count.innerHTML = "0"
})

//Boton 3

const increasebtn = document.createElement('button');
increasebtn.innerHTML = 'INCREASE';
thirddiv.appendChild(increasebtn);
increasebtn.classList.add('btn');

increasebtn.addEventListener("click", () => {
    contador++;
    updateContador();
    });



