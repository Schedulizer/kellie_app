
$(document).ready(function() {

    $('#calendar').fullCalendar({

      events: {
        url: "/calendar/feed",
        type: "GET",
        color: "blue"
      },

      dayClick: function() {
        var text = prompt("Add your event", " ");
        var data = $(this).data();
        console.log(data);
        $.ajax({
          type: "POST",
          url: "/calendar",
          data: {title: text, start: data.date}
        }).done(function(response){
          $('#calendar').fullCalendar( 'refetchEvents' );
          console.log(response);
        });
      }
    });

});
