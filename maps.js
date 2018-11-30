$(document).ready(function () {




    $("#calculate-time").on("click", function () {

        var originInput = $("#destination-input").val();
        var destinationInput = $("#origin-input").val();

        var queryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?origins=" + destinationInput + "&destinations=" + originInput + "&departure_time=now&key=AIzaSyBxR_xcjNZab-IUvUTGn6vYdm9QR6d_ANE&traffic_model =best_guess"



        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {
            console.log(response);
            var timeToArrive = response.rows[0].elements[0].duration.text;
            var timeValue = response.rows[0].elements[0].duration;
            console.log(timeValue);
            $("#travel-time").text("Faltan " + timeToArrive);
        });

    })

});
