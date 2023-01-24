var userDay = document.getElementById("user-day");
var userMonth = document.getElementById("user-month");
var userYear = document.getElementById("user-year");

var submitButton = document.getElementById("submit-date");

submitButton.addEventListener("click", function (evt) {
    var message = document.getElementById("message");
    var parseDay = parseInt(userDay.value);
    var parseMonth = (parseInt(userMonth.value) - 1);
    var parseYear = parseInt(userYear.value);
    var months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    console.log(months);
    var Weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dateIs = new Date(parseYear, parseMonth, parseDay);
    var weekdayIs = Weekday[dateIs.getDay()];
    var monthIs = months[parseMonth]

    if (weekdayIs === undefined || monthIs === undefined) {
        message.innerText = "";
        setTimeout(function () {
            message.innerText = "please enter a valid date";
        }, 500)
    }
    else {
        message.innerText = "You Born in: " + weekdayIs + "  , " + monthIs + " " + parseDay + ", " + parseYear;
    }
})