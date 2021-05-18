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
console.log(currentHour);

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


//grab saveBtn; new function to grab 'this'; use jQuery; read about click




//save entry to local storage
//use prevent Default so form doesn't reset

//use addClass() with jquery to connect to css file
//Sampele and this should change my 9 to green: $('#9).addClass('future')

//To Save to Local Storage
//Set text input to local storage
//Retrieve the information
//Load to text area
$(".saveBtn").click(function() {
    console.log("Clicked save button");
    console.log($(this).parent().attr("id"));
    console.log($(this).siblings("textarea").val());
    localStorage.setItem($(this).parent().attr("id"), $(this).siblings("textarea").val());

});
let start = 9;
console.log(localStorage.getItem(start));

rows.each (function(index, value) {
    console.log($(value).children().eq(1));
    //console.log(localStorage.getItem($(value).attr("id")))
    $(value).children().eq(1).text(localStorage.getItem($(value).attr("id")))

    
})

// $("description").html();
// localStorage.setItem("task", task);
// localStorage.getItem("task");
