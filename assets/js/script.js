// sets current time in header
$("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));

// loads saved events, color-codes events when page is loaded
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
function auditEvents() {
  var currentHour = moment().hours();
  $(".time-block").each(function () {
    var timeBlockHour = parseInt($(".hour").attr("id"));
    $(".time-block").removeClass("past present future");
    if (currentHour > timeBlockHour) {
      $(".time-block").addClass("past");
    }
    if (currentHour === timeBlockHour) {
      $(".time-block").addClass("present");
    }
    if (currentHour < timeBlockHour) {
      $(".time-block").addClass("future");
    }
  });
}
// sets interval for updating event statuses based on time
setInterval(function () {
  auditEvents();
}, 1000);