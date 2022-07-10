// global variables
var events = {};
var currentTime = moment();

var hourNine = moment().hour(9).format("hA");
var hourTen = moment().hour(10).format("hA");
var hourEleven = moment().hour(11).format("hA");
var hourTwelve = moment().hour(12).format("hA");
var hourOne = moment().hour(13).format("hA");
var hourTwo = moment().hour(14).format("hA");
var hourThree = moment().hour(15).format("hA");
var hourFour = moment().hour(16).format("hA");
var hourFive = moment().hour(17).format("hA");

$("#hour-nine").text(hourNine);
$("#hour-ten").text(hourTen);
$("#hour-eleven").text(hourEleven);
$("#hour-twelve").text(hourTwelve);
$("#hour-one").text(hourOne);
$("#hour-two").text(hourTwo);
$("#hour-three").text(hourThree);
$("#hour-four").text(hourFour);
$("#hour-five").text(hourFive);

// sets current time in header
$("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));

// saves events to and loads events from local storage
function saveEvents() {
    hourNineInput = $("#event-hour-nine").text();
    hourTenInput = $("#event-hour-ten").text();
    hourElevenInput = $("#event-hour-eleven").text();
    hourTwelveInput = $("#event-hour-twelve").text();
    hourOneInput = $("#event-hour-one").text();
    hourTwoInput = $("#event-hour-two").text();
    hourThreeInput = $("#event-hour-three").text();
    hourFourInput = $("#event-hour-four").text();
    hourFiveInput = $("#event-hour-five").text();

    function retrieveEvents() {
        JSON.parse(localStorage.getItem(hourNineInput)) || [];
      }
  
    var newEvent = {
        hour9: hourNineInput,
        hour10: hourTenInput,
        hour11: hourElevenInput,
        hour12: hourTwelveInput,
        hour1: hourOneInput,
        hour2: hourTwoInput,
        hour3: hourThreeInput,
        hour4: hourFourInput,
        hour5: hourFiveInput,
    };

    function storeEvents() {
        localStorage.setItem("hour-9", hourNineInput);
        localStorage.setItem("hour-10", hourTenInput);
        localStorage.setItem("hour-11", hourElevenInput);
        localStorage.setItem("hour-12", hourTwelveInput);
        localStorage.setItem("hour-1", hourOneInput);
        localStorage.setItem("hour-2", hourTwoInput);
        localStorage.setItem("hour-3", hourThreeInput);
        localStorage.setItem("hour-4", hourFourInput);
        localStorage.setItem("hour-5", hourFiveInput);
      }

 retrieveEvents();
 storeEvents();
}

// adds event listener to save button to save events
$(".saveBtn").on("click", saveEvents);

// applies classes to events based on time
var auditEvents = function () {
  $(".time-block").removeClass("past present future");
};
if (moment().isAfter(moment().hour(17))) {
    $("#event-hour-nine").addClass("past");
    $("#event-hour-ten").addClass("past");
    $("#event-hour-eleven").addClass("past");
    $("#event-hour-twelve").addClass("past");
    $("#event-hour-one").addClass("past");
    $("#event-hour-two").addClass("past");
    $("#event-hour-three").addClass("past");
    $("#event-hour-four").addClass("past");
    $("#event-hour-five").addClass("past");
  } else if (moment().isAfter(moment().hour(16))) {
    $("#event-hour-nine").addClass("past");
    $("#event-hour-ten").addClass("past");
    $("#event-hour-eleven").addClass("past");
    $("#event-hour-twelve").addClass("past");
    $("#event-hour-one").addClass("past");
    $("#event-hour-two").addClass("past");
    $("#event-hour-three").addClass("past");
    $("#event-hour-four").addClass("past");
    $("#event-hour-five").addClass("present");
  } else if (moment().isAfter(moment().hour(15))) {
    $("#event-hour-nine").addClass("past");
    $("#event-hour-ten").addClass("past");
    $("#event-hour-eleven").addClass("past");
    $("#event-hour-twelve").addClass("past");
    $("#event-hour-one").addClass("past");
    $("#event-hour-two").addClass("past");
    $("#event-hour-three").addClass("past");
    $("#event-hour-four").addClass("present");
    $("#event-hour-five").addClass("future");
  } else if (moment().isAfter(moment().hour(14))) {
    $("#event-hour-nine").addClass("past");
    $("#event-hour-ten").addClass("past");
    $("#event-hour-eleven").addClass("past");
    $("#event-hour-twelve").addClass("past");
    $("#event-hour-one").addClass("past");
    $("#event-hour-two").addClass("past");
    $("#event-hour-three").addClass("present");
    $("#event-hour-four").addClass("future");
    $("#event-hour-five").addClass("future");
  } else if (moment().isAfter(moment().hour(13))) {
    $("#event-hour-nine").addClass("past");
    $("#event-hour-ten").addClass("past");
    $("#event-hour-eleven").addClass("past");
    $("#event-hour-twelve").addClass("past");
    $("#event-hour-one").addClass("past");
    $("#event-hour-two").addClass("present");
    $("#event-hour-three").addClass("future");
    $("#event-hour-four").addClass("future");
    $("#event-hour-five").addClass("future");
  } else if (moment().isAfter(moment().hour(12))) {
    $("#event-hour-nine").addClass("past");
    $("#event-hour-ten").addClass("past");
    $("#event-hour-eleven").addClass("past");
    $("#event-hour-twelve").addClass("past");
    $("#event-hour-one").addClass("present");
    $("#event-hour-two").addClass("future");
    $("#event-hour-three").addClass("future");
    $("#event-hour-four").addClass("future");
    $("#event-hour-five").addClass("future");
  } else if (moment().isAfter(moment().hour(11))) {
    $("#event-hour-nine").addClass("past");
    $("#event-hour-ten").addClass("past");
    $("#event-hour-eleven").addClass("past");
    $("#event-hour-twelve").addClass("present");
    $("#event-hour-one").addClass("future");
    $("#event-hour-two").addClass("future");
    $("#event-hour-three").addClass("future");
    $("#event-hour-four").addClass("future");
    $("#event-hour-five").addClass("future");
  } else if (moment().isAfter(moment().hour(10))) {
    $("#event-hour-nine").addClass("past");
    $("#event-hour-ten").addClass("past");
    $("#event-hour-eleven").addClass("present");
    $("#event-hour-twelve").addClass("future");
    $("#event-hour-one").addClass("future");
    $("#event-hour-two").addClass("future");
    $("#event-hour-three").addClass("future");
    $("#event-hour-four").addClass("future");
    $("#event-hour-five").addClass("future");
  } else if (moment().isAfter(moment().hour(9))) {
    $("#event-hour-nine").addClass("past");
    $("#event-hour-ten").addClass("present");
    $("#event-hour-eleven").addClass("future");
    $("#event-hour-twelve").addClass("future");
    $("#event-hour-one").addClass("future");
    $("#event-hour-two").addClass("future");
    $("#event-hour-three").addClass("future");
    $("#event-hour-four").addClass("future");
    $("#event-hour-five").addClass("future");
  } else if (moment().isAfter(moment().hour(8))) {
    $("#event-hour-nine").addClass("present");
    $("#event-hour-ten").addClass("future");
    $("#event-hour-eleven").addClass("future");
    $("#event-hour-twelve").addClass("future");
    $("#event-hour-one").addClass("future");
    $("#event-hour-two").addClass("future");
    $("#event-hour-three").addClass("future");
    $("#event-hour-four").addClass("future");
    $("#event-hour-five").addClass("future");
  }


  // adds text area functionality
$(".time-block").on("click", "p", function () {
  var eventText = $(this).text().trim();
  var textInput = $("<textarea>").addClass("form-control").val(eventText);
  $(this).replaceWith(textInput);
  textInput.trigger("focus");
});

$(".time-block").on("blur", "textarea", function () {
  var eventText = $(this).val();
  var eventP = $("<p>").text(eventText);
  $(this).replaceWith(eventP);
});

// sets interval for updating event statuses based on time
setInterval(function () {
  auditEvents();
}, 1000);
