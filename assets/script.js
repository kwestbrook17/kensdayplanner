$(function () {

  $(".saveBtn").on("click", function () {
    var usertext = $(this).siblings(".description").val();
    var timeBlockID= $(this).parent().attr("id");
    localStorage.setItem(timeBlockID, usertext);
  });

  var currentHour = dayjs().hour();

  $(".time-block").each(function () {
    var timeBlockHour = parseInt($(this).attr("id").split("-")[1]);

    if (timeBlockHour < currentHour) {
      $(this).addClass("past");
      $(this).removeClass("present future");
    } else if (timeBlockHour === currentHour) {
      $(this).addClass("present");
      $(this).removeClass("past future");
    } else {
      $(this).addClass("future");
      $(this).removeClass("past present");
    }
 
    var timeBlockID = $(this).attr("id");
    var usertext= localStorage.getItem(timeBlockID);
    $(this).children(".description").val(usertext);
  });

    $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
  });
