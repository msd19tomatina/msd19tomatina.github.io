var id = "5fb4eaf370896ed1b1080791"

$.ajax({
    url: datafilepath,
    dataType:"json",
    type:"get",
    cache: false,
    success: [function (items) {
        $(items.user).each(function(i, myUser){

            $(myUser.groups).each(function(i, myGroup){
                document.getElementById("memberRows").innerHTML=myUser.username;
                if (myGroup.id === id) {
                    document.getElementById("Gruppe").innerHTML=myGroup.name;
                    fillMembers(myUser)
                }
            })


    })

        }]
    })
;

function fillMembers (members) {
    if (members === null || members === undefined || members.length < 1)
        return;

    let cards = document.getElementById("memberRows");

    for (let i = 0; i < members.length; i++) {
        // Create the list item:
        let item = document.createElement('div');
        item.className = "col-sm-6"
        // item.className="list-group-item"

        // Set its contents:
        item.innerText = members[i].username;

        // Add it to the list:
        cards.appendChild(item);
    }

}

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