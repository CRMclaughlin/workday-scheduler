var hourNow = parseInt(moment().format('H'));
var today = moment();


//Displays today's date in the top of the browser
var todayDate = moment().format('dddd, MMMM Do ');
$("#currentDay").text(todayDate);



//Function that changes the colors of the calender in corespondence with the time.
function workdayTimes(){
    var currentHour = today.hours()
    
    // runs a check for each time-block
    $('.time-block').each(function() {
        var timeNow = parseInt($(this).prop('id').split('hour')[1]);
        
        //if timeNow is less then current hour add class "past"
        if (timeNow < currentHour) {
            $(this).addClass('past');
          } 
          //else if time now is equal to current hour add class "present"
          else if (timeNow === currentHour) {
            $(this).removeClass('past');
            $(this).removeClass('future');
            $(this).addClass('present');
          } 
          //else add class "future"
          else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
          }
    })
}

workdayTimes();

// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist



