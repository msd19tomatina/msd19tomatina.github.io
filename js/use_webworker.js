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