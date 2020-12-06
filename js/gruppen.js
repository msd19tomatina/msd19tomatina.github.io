var id = "5fb4c5d459f8c4e5d3748c55"

var cards = document.getElementById("memberRows");

$.ajax({
    url: datafilepath,
    dataType: "json",
    type: "get",
    cache: false,
    success: function (items) {
        items.user.forEach(function (myUser, i) {
            myUser.groups.forEach(function (myGroup, i) {

                if (myGroup.id === id) {
                    var newCard = document.createElement("div");
                    newCard.setAttribute("class", "card");
                    var newUser = document.createElement("div");
                    var newScore = document.createElement("div");
                    document.getElementById("Gruppe").innerText=myGroup.name;

                    newUser.setAttribute("class", "user");
                    newUser.innerHTML=myUser.username;
                    newCard.appendChild(newUser);

                    newScore.setAttribute("class", "user");
                    newScore.innerHTML=myGroup.pomodoros;


                    newCard.appendChild(newScore);
                    cards.appendChild(newCard);

                }
            })
        })
    }
});


function addElement(parentId, elementTag, elementId, html) {
    // Adds an element to the document
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.innerHTML = html;
    p.appendChild(newElement);
}





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
