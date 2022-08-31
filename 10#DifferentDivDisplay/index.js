document.addEventListener('DOMContentLoaded', () => {

    const img = document.getElementById('img-1');
    const infoDiv = document.getElementById('info-div');
    const title = infoDiv.childNodes[3];
    const lorem = infoDiv.childNodes[5];
    const divs = infoDiv.childNodes[1]
    const paisaje1 = divs.childNodes[1];
    const paisaje2 = divs.childNodes[3];
    const paisaje3 = divs.childNodes[5];

    paisaje1.addEventListener('click', () => {
        img.src = "https://fondosmil.com/fondo/49835.jpg";
        paisaje1.childNodes[0].style.border = '4px solid rgb(135, 206, 250)';
        paisaje2.childNodes[0].style.border = '1px solid black';
        paisaje3.childNodes[0].style.border = '1px solid black';
        title.innerHTML = '<h3>Titulo 1</h3>'
        lorem.innerHTML = '<p>Lorem 1: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, aperiam fugiat qui debitis dolorem quasi non iure atque soluta pariatur molestiae ratione ex accusamus? Earum quibusdam explicabo repudiandae nemo soluta?</p>'
    })

    paisaje2.addEventListener('click', () => {
        img.src = "https://www.xtrafondos.com/wallpapers/resized/playa-al-atardecer-a-traves-de-rocas-9458.jpg?s=large";
        paisaje1.childNodes[0].style.border = '1px solid black';
        paisaje2.childNodes[0].style.border = '4px solid rgb(135, 206, 250)';
        paisaje3.childNodes[0].style.border = '1px solid black';
        title.innerHTML = '<h3>Titulo 2</h3>'
        lorem.innerHTML = '<p>Lorem 2: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, aperiam fugiat qui debitis dolorem quasi non iure atque soluta pariatur molestiae ratione ex accusamus? Earum quibusdam explicabo repudiandae nemo soluta?</p>'
    })

    paisaje3.addEventListener('click', () => {
        img.src = "https://www.xtrafondos.com/wallpapers/resized/cascada-godafoss-en-islandia-2689.jpg?s=large";
        paisaje1.childNodes[0].style.border = '1px solid black';
        paisaje2.childNodes[0].style.border = '1px solid black';
        paisaje3.childNodes[0].style.border = '4px solid rgb(135, 206, 250)';
        title.innerHTML = '<h3>Titulo 3</h3>'
        lorem.innerHTML = '<p>Lorem 3: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, aperiam fugiat qui debitis dolorem quasi non iure atque soluta pariatur molestiae ratione ex accusamus? Earum quibusdam explicabo repudiandae nemo soluta?</p>'
    })

})