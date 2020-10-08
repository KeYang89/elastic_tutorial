$('slide').first().addClass('active').find('segment').first().addClass('visible');


$('slide:not(:last-of-type)').each(function(slide) {
  $('navigation').append($('<item></item>'));
});


$('navigation item').first().addClass('active');


var onUserInput = function(e) {
  if (e.which == 32 || e.which == 1) {
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
    } else {
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

$('slide').on('mousedown', onUserInput);

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