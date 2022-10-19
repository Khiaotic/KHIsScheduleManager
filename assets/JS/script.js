//current date displays on top of calendar//
var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd, MMMM D, YYYY"));

$(document).ready(function (){
    $(".saveBtn").on("click", function () {
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
  
      localStorage.setItem(time, text);
    })

    
    
function timeBlockTint() {
   
    var momentNow = moment().hour();

    //color block times//

    $(".time-block").each(function () {
      var currentHour = parseInt($(this).attr("id"));

      if (currentHour < momentNow) {
        $(this).removeClass("present");
        $(this).removeClass("future");
         $(this).addClass("past");
      } 
      else if (currentHour === momentNow) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      } 
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    })
}

//Call the function!//
// timeBlockTint();
// var intervalTime = setInterval(timeBlockTint, 15000);
// setTimeout(myStopFunction, 5 * 60 * 1000)
// function myStopFunction(){
//     clearInterval(intervalTime);
// }

//local storage//
$("#1 .description").val(localStorage.getItem("1"));
$("#2 .description").val(localStorage.getItem("2"));
$("#3 .description").val(localStorage.getItem("3"));
$("#4 .description").val(localStorage.getItem("4"));
$("#5 .description").val(localStorage.getItem("5"));
$("#6 .description").val(localStorage.getItem("6"));
$("#7 .description").val(localStorage.getItem("7"));
$("#8 .description").val(localStorage.getItem("8"));
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));
$("#18 .description").val(localStorage.getItem("18"));
$("#19 .description").val(localStorage.getItem("19"));
$("#20 .description").val(localStorage.getItem("20"));
$("#21 .description").val(localStorage.getItem("21"));
$("#22 .description").val(localStorage.getItem("22"));
$("#23 .description").val(localStorage.getItem("23"));
$("#24 .description").val(localStorage.getItem("24"));

timeBlockTint();
})
