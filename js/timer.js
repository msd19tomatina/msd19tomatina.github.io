

function startTimer(duration, display) {

    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }

    }, 1000);
}

$(document).ready(function() {

    $('#timerModal').on('shown.bs.modal', function () {
        var twentyfiveMinutes = 60 * 25,
            display = document.querySelector('#displayTime');
        startTimer(twentyfiveMinutes, display);

    })
});