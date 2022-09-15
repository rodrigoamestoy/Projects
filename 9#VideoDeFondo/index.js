document.addEventListener('DOMContentLoaded', () => {
    const btnplay = document.getElementById('play')
    const btnpause = document.getElementById('pause')
    const don = document.getElementById('d-on')
    const doff = document.getElementById('d-off')
    const contdisplay = document.getElementById('display');
    const video = document.getElementById('video');


    btnplay.addEventListener("click", function() {
        video.play();
        contdisplay.style.display = "none";
        btnplay.disabled = true;
        btnpause.disabled = false;
    })

    btnpause.addEventListener('click', () => {
        video.pause();
        contdisplay.style.display = "grid";
        btnpause.disabled = true;
        btnplay.disabled = false;
    })



})