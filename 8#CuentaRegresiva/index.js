
const DATE_TARGET = new Date('04/13/2023 0:00 AM');

const DAYS = document.getElementById('d');
const HOURS = document.getElementById('hr');
const MINUTES = document.getElementById('min');
const SECONDS = document.getElementById('sec');

const MILLISECONDS_OF_A_SECOND = 1000;
const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24

function updateCountdown() {

    const NOW = new Date()
    const DURATION = DATE_TARGET - NOW;
    const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
    const REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
    const REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
    const REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);

    DAYS.textContent = REMAINING_DAYS + ' ' + 'Days';
    HOURS.textContent = REMAINING_HOURS + ' ' + 'Hours';
    MINUTES.textContent = REMAINING_MINUTES + ' ' + 'Min.';
    SECONDS.textContent = REMAINING_SECONDS + ' ' + 'Sec.';
}

updateCountdown();

setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);


