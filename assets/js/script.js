
// sets current time in header
$("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));
$(document).ready(function () {
    auditEvents();
    $("#event-hour-nine").val(localStorage.getItem("hour-9"));
    $("#event-hour-ten").val(localStorage.getItem("hour-10"));
    $("#event-hour-eleven").val(localStorage.getItem("hour-11"));
    $("#event-hour-twelve").val(localStorage.getItem("hour-12"));
    $("#event-hour-one").val(localStorage.getItem("hour-1"));
    $("#event-hour-two").val(localStorage.getItem("hour-2"));
    $("#event-hour-three").val(localStorage.getItem("hour-3"));
    $("#event-hour-four").val(localStorage.getItem("hour-4"));
    $("#event-hour-five").val(localStorage.getItem("hour-5"));
  });

// saves events to and loads events from local storage
function saveEvents() {
  hourNineInput = $("#event-hour-nine").val();
  hourTenInput = $("#event-hour-ten").val();
  hourElevenInput = $("#event-hour-eleven").val();
  hourTwelveInput = $("#event-hour-twelve").val();
  hourOneInput = $("#event-hour-one").val();
  hourTwoInput = $("#event-hour-two").val();
  hourThreeInput = $("#event-hour-three").val();
  hourFourInput = $("#event-hour-four").val();
  hourFiveInput = $("#event-hour-five").val();

console.log(hourTenInput);
    
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
 storeEvents();
}

// adds event listener to save button to save events
$(".saveBtn").on("click", saveEvents);

// applies classes to events based on time
 function auditEvents () {
    var currentHour = moment().hours();
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
