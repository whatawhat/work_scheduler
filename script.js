$("#currentDay").text(moment().format("dddd, MMMM Do"))

//Use moment for time to know if the time has past or if it's in the present or future

//save entry to local storage

//Gives the current hour
//$(".hour").text(moment().format("hA"))

var format = "hh"
var time = moment(format),
    beforeTime = moment(format),
    afterTime = moment(format);

if (time === 9) {

}

const rows = document.getElementsByClassName("hour");
console.log(rows) //shows an array of elements.
console.log(rows[0]) //shows me the first element (the 9am block)
var currentHour = parseInt(moment().format("H"));

for(var i=0; i = rows; i++) {
  
  //this SHOULD store the i-th element of the rows array.
  var row = "something"

  //this SHOULD store that row's number.
  var hour = "somethingElse"

  if (currentHour === hour) {
      setColor (row, "red");
  } else if (currentHour < hour) {
      setColor (row, "gray");
  } else if (currentHour > hour) {
      setColor(row, "green");
  } else {
      setColor (row, "white");
  }
}

//finish for loop
//redefine row and hour


{/* <h1 class="myExample" id="bruceWayne">This is an H1 tag</h1>

JS:
var myData = document.querySelector(".myExample").id
console.log(myData) //should print "Bruce Wayne" */}