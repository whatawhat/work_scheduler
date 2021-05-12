$("#currentDay").text(moment().format("dddd, MMMM Do"))

//Use moment for time to know if the time has past or if it's in the present or future

//save entry to local storage

//$(".hour").text(moment().format("hA"))

var format = "hh"
var time = moment(format),
    beforeTime = moment(format),
    afterTime = moment(format);

if (time === 9) {

}

const rows = document.getElementsByClassName("hour");

var currentHour = parseInt(moment().format("H"));

if (currentHour === hour) {
    setColor (row, "");
} else if (currentHour < hour) {
    setColor (row, "");
} else if (currentHour > hour) {
    setColor(row, "");
} else {
    setColor (row, "white");
}

function setColor(element, color) {
    element.style.backgroundColor = color;
}

//Traverse the DOM maybe to find the time?
//