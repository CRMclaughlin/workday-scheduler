var hourNow = parseInt(moment().format('H'));
var workHours = ["hour8","hour9", "hour10", "hour11", "hour12", "hour13", "hour14", "hour15", "hour16"]
var time = [8,9,10,11,12,13,14,15,16]
console.log()

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
var todayDate = moment().format('dddd, MMMM D, YYYY');
$("#currentDay").html(todayDate);




// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
if (hourNow < 8) {
    showFuture();
}
else if (hourNow > 16) {
    showPast();
}
else {
    formatTimes()
}

function showFuture() {
    for (i = 0; i < workHours.length; i++) {
        $(workHours[i]).addClass("future");
    }
    $(workHours[0]).addClass("present");
}

function showPast() {
    for (i = 0; i < workHours.length - 1; i++) {
        $(workHours[i]).addClass("past");
    }
    $(workHours[time.length - 1]).addClass("present");
}

function formatTimes() {
    $(classes[classIndex]).addClass("present");
    for (i = 0; i < classIndex; i++) {
        $(workHours[i]).addClass("past");
    }
    for (i = classIndex + 1; i < workHours.length; i++) {
        $(workHours[i]).addClass("future");
    }
}





// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist



