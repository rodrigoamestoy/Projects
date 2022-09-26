const URL = 'https://api.chucknorris.io/jokes/random';

async function getNewJoke() {
    const RESPONSE = await fetch(URL);
    if (RESPONSE.ok) {
        const data = await RESPONSE.json();
        return data.value;
    } return '';
}

const ARRAY = [];
let index = 0;

document.addEventListener('DOMContentLoaded', async () => {
    const jokesDiv = document.getElementById('joke');
    const previousBtn = document.getElementById('previous');
    const nextBtn = document.getElementById('next'); 
    const joke = await getNewJoke();

    ARRAY.push(joke);   

    jokesDiv.innerHTML = joke;

    nextBtn.addEventListener('click', async () => {
        index++;
        let joke;
        if (index == ARRAY.length){
            joke = await getNewJoke();
            ARRAY.push(joke);
        } else {
            joke = ARRAY[index];
        }
        jokesDiv.innerHTML = joke;
    });

    previousBtn.addEventListener('click', () => {
        index = Math.max(index -1, 0);
        jokesDiv.innerHTML = ARRAY[index];
    })

});