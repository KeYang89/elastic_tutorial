$('slide').first().addClass('active').find('segment').first().addClass('visible');


$('slide:not(:last-of-type)').each(function(slide) {
  $('navigation').append($('<item></item>'));
});


$('navigation item').first().addClass('active');


var onUserInput = function(e) {
  if (e.which == 32 || e.which == 13) {
    if ($('slide.active')
        .find('segment')
        .last()
        .hasClass('visible')) {
      
      if ($('slide')
          .last()
          .hasClass('active')) {
        //Restart
        $('slide')
          .removeClass('active').first().addClass('active');
        
        $('segment')
          .removeClass('visible')
          .first()
          .addClass('visible');
        
        $('navigation item')
          .removeClass('active')
          .first()
          .addClass('active');
      } else {
        //Go next
        $('slide.active')
          .removeClass('active')
          .next()
          .addClass('active')
          .find('segment')
          .first()
          .addClass('visible');

        $('navigation item.active')
          .removeClass('active')
          .next()
          .addClass('active');
      }
    } 
    else {
      //Next line of text
      $('slide.active')
      .find('segment.visible')
      .last()
      .next()
      .addClass('visible');
    }
  }
}

$(document).on('keydown', onUserInput);


$('navigation item').on('mousedown', function() {
  $('segment').removeClass('visible');
  
  $('slide')
    .removeClass('active')
    .eq($(this).index())
    .addClass('active')
    .find('segment').first()
    .addClass('visible')

  $('navigation item')
    .removeClass('active');
  
  $(this).addClass('active');
});


//timer

var timer;

var compareDate = new Date();
compareDate.setDate(compareDate.getDate() + 1); 

timer = setInterval(function() {
  timeBetweenDates(compareDate);
}, 1000);

function timeBetweenDates(toDate) {
  var dateEntered = toDate;
  var now = new Date();
  var difference = dateEntered.getTime() - now.getTime();

  if (difference <= 0) {

    // Timer done
    clearInterval(timer);
  
  } else {
    
    var seconds = Math.floor(difference / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    $("#days").text(days);
    $("#hours").text(hours);
    $("#minutes").text(minutes);
    $("#seconds").text(seconds);
  }
}


