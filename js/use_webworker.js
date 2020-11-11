/********************
 * USE A WEB WORKER *
 ********************/
const worker = new Worker("js/webworker.js");

function sendMessageToWebworker() {
  worker.postMessage("hello");
}

function askWebworkerForRecurringTask() {
  worker.postMessage("recurring task");
}

worker.addEventListener("message", function(messageEvent) {
  const log = document.getElementById("timer");
  log.textContent = messageEvent.data;

});


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
document.getElementById("realTimer").onclick= function () {
  var twentyfiveMinutes = 60 * 25,
      display = document.querySelector('#displayTime');
  startTimer(twentyfiveMinutes, display);

};



