document.addEventListener('DOMContentLoaded', () => {
    const tablero = document.getElementsByClassName('board')[0];

    for(let fila = 1; fila <= 8; fila++) {
        for(let col = 1; col <= 8; col++) {
        const div = document.createElement('div');
        div.classList.add(esPar(col + fila) ? 'black' : 'white');
        tablero.append(div)
    }
    }
})

function esPar(n) {
   return n % 2 === 0;
}
