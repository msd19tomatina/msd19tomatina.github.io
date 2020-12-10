//var id = "5fb4c5d459f8c4e5d3748c55"
var id = new URLSearchParams(window.location.search).get("id");
var cards = document.getElementById("members");


$.ajax({
    url: datafilepath,
    dataType: "json",
    type: "get",
    cache: false,
    success: function (items) {
        items.user.forEach(function (myUser, i) {
            myUser.groups.forEach(function (myGroup, i) {

                if (myGroup.id === id) {
                    var row = document.createElement(("div"));
                    row.setAttribute("class", "row");
                    var card = document.createElement("div");
                    card.setAttribute("class", "card");


                    document.getElementById("Gruppe").innerText=myGroup.name;

                    var newUser = document.createElement("div");
                    var newScore = document.createElement("div");
                    newUser.setAttribute("class", "col-6");
                    newUser.innerHTML=myUser.username;
                    row.appendChild(newUser);

                    newScore.setAttribute("class", "col-6");
                    newScore.innerHTML=myGroup.pomodoros + " P.";


                    row.appendChild(newScore);
                    card.appendChild(row);
                    cards.appendChild(card);
                }
            })
        })
    }
});






function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
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

$(document).ready(function () {
  $("#timerModal").on("shown.bs.modal", function () {
    var twentyfiveMinutes = 60 * 25,
      display = document.querySelector("#displayTime");
    startTimer(twentyfiveMinutes, display);
  });
});
