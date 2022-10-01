//Displays today's date in the top of the browser
var todayDate = moment().format('dddd, MMMM Do ');
$("#currentDay").text(todayDate);

// When user clicks the save button the information is saved to local storage
$('.saveBtn').on('click', function() {
    var text = $(this).siblings('.description').val().trim();
    // Using .prop instead of .attr and found through 👉🏽https://api.jquery.com/prop/
    var rowId = $(this).parent().prop('id');

    localStorage.setItem(rowId, text);
});

// Get item from local storage so event remains even after refresh
$('#hour8 .description').val(localStorage.getItem('hour8'));
$('#hour9 .description').val(localStorage.getItem('hour9'));
$('#hour10 .description').val(localStorage.getItem('hour10'));
$('#hour11 .description').val(localStorage.getItem('hour11'));
$('#hour12 .description').val(localStorage.getItem('hour12'));
$('#hour13 .description').val(localStorage.getItem('hour13'));
$('#hour14 .description').val(localStorage.getItem('hour14'));
$('#hour15 .description').val(localStorage.getItem('hour15'));
$('#hour16 .description').val(localStorage.getItem('hour16'));




//Function that changes the colors of the calender in corespondence with the time.
function workdayTimes(){
    var currentHour = moment().format('H')
    
    // runs a check for each time-block
    $('.time-block').each(function() {
        var timeNow = parseInt($(this).prop('id').split('hour')[1]);
        
        
        //if timeNow is less then current hour add class "past"
        if (timeNow < currentHour) {
            $(this).addClass('past');
          } 
          //else if time now is equal to current hour add class "present"
          else if (timeNow == currentHour) {
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