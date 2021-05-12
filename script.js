$("#currentDay").text(moment().format("dddd, MMMM Do"))

//Use moment for time to know if the time has past or if it's in the present or future

//Gives the current hour
//$(".hour").text(moment().format("hA"))

var format = "hh"
var time = moment(format),
    beforeTime = moment(format),
    afterTime = moment(format);

//$('#9').addClass('future')

var currentHour = parseInt(moment().format("H"));

var rows = $(".row");
console.log(parseInt(rows[0]))
rows.each (function(i) {
    console.log($(this).children().eq(1));
    var rowHour = parseInt($(this).attr("id"));
    
    if (currentHour === rowHour) {
        $(this).children().eq(1).addClass("present");
    } else if (currentHour < rowHour) {
        $(this).children().eq(1).addClass("future");
    } else  {
        $(this).children().eq(1).addClass("past");}
    
})

console.log(rows) //shows an array of elements.
// console.log(parseInt(rows[0].getAttribute("id"))) //shows me the first element (the 9am block)
// var currentHour = parseInt(moment().format("H"));
// console.log(currentHour);


  
  //this SHOULD store the i-th element of the rows array.
  //var row = document.querySelector("row");

  //this SHOULD store that row's number.
  //var hour = document.querySelector(".row").getAttribute("id");
//}

//grab saveBtn; new function to grab 'this'; use jQuery; read about click


/* <h1 class="myExample" id="bruceWayne">This is an H1 tag</h1>

JS:
var myData = document.querySelector(".myExample").id
console.log(myData) //should print "Bruce Wayne" */

//save entry to local storage
//use prevent Default so form doesn't reset

//use addClass() with jquery to connect to css file
//Sampele and this should change my 9 to green: $('#9).addClass('future')