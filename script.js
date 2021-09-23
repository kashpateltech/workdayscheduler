$(document).ready(function() {

    //displaying current day
    $('#currentDay').text(moment().format('Do MMMM dddd hh:mm A'));

    //using if, else-if, else to track each hour as per the timeblocks in the HTML doc using CSS class for colouring(present, past, future)
    function hourlyTimeblock() {
        //using moment to get current hour
        var currHour = moment().hours();
        // traversing using.each 
        $('.time-block').each(function(){
        //using parseint to convert string into numbers
            var timeBlockHour = parseInt($(this).attr('id'));

            if (timeBlockHour === currHour) {
                $(this).addClass('present').children('textarea');
                $(this).removeClass('past').children('textarea');
            }
            else if (timeBlockHour < currHour) {
                $(this).addClass('past').children('textarea');          
            }
            else {
                $(this).removeClass('present').children('textarea');
                $(this).removeClass('past').children('textarea');
                $(this).addClass('future').children('textarea');
            }

        });
        
    }
    hourlyTimeblock();

     setInterval(hourlyTimeblock, 1000);
    
    
     //adding event listener to save button and local storage
     $('.saveBtn').on('click', function(){
        
        var entry = $(this).siblings('.description').val();

        var hour = $(this).parent().attr('id');
        
        localStorage.setItem(hour, entry);
        
        
     });
    // To save data
     $('.time-block').each(function(){
         var saveData = $(this).attr('id');
         $(this).children('textarea').val(localStorage.getItem(saveData));
     });


});
