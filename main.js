// funzione ready documento
$(document).ready(function(){

// funzione on click freccia sinistra carousel
$('.prev').click(function(){
  $('img.active').removeClass('active').prev().addClass('active');
  $('i.active').removeClass('active').prev().addClass('active');
  if ($('img.active').hasClass('first') === true) {
    $('img.first').removeClass('active');
    $('img.last').addClass('active');
    $('i.first').removeClass('active')
    $('i.last').addClass('active');
  }
});
// funzione on click freccia destra carousel
  $('.next').click(function(){
    $('img.active').removeClass('active').next().addClass('active');
    $('i.active').removeClass('active').next().addClass('active');
    if ($('img.active').hasClass('last') === true) {
      $('img.last').removeClass('active');
      $('img.first').addClass('active');
      $('i.last').removeClass('active')
      $('i.first').addClass('active');
    }
  });

// funzione on click frecce tastiera
  $("body").keydown(function(e) {
    if(e.keyCode == 37) { // sinistra
      $('img.active').removeClass('active').prev().addClass('active');
      $('i.active').removeClass('active').prev().addClass('active');
      if ($('img.active').hasClass('first') === true) {
        $('img.first').removeClass('active');
        $('img.last').addClass('active');
        $('i.first').removeClass('active')
        $('i.last').addClass('active');
      }
    }
    if(e.keyCode == 39) { // destra
      $('img.active').removeClass('active').next().addClass('active');
      $('i.active').removeClass('active').next().addClass('active');
      if ($('img.active').hasClass('last') === true) {
        $('img.last').removeClass('active');
        $('img.first').addClass('active');
        $('i.last').removeClass('active')
        $('i.first').addClass('active');
      }
    }
  });


  // funzione click sui pallini per vedere le immagini
  $('.nav i:first-child').click(function(){
    $('img.active').removeClass('active');
    $('.images img:first-child').addClass('active');
    $('i.active').removeClass('active');
    $(this).addClass('active');

  })
  $('.nav i:nth-child(2)').click(function(){
    $('img.active').removeClass('active');
    $('.images img:nth-child(2)').addClass('active');
    $('i.active').removeClass('active');
    $(this).addClass('active');

  })
  $('.nav i:nth-child(3)').click(function(){
    $('img.active').removeClass('active');
    $('.images img:nth-child(3)').addClass('active');
    $('i.active').removeClass('active');
    $(this).addClass('active');

  })
  $('.nav i:last-child').click(function(){
    $('img.active').removeClass('active');
    $('.images img:last-child').addClass('active');
    $('i.active').removeClass('active');
    $(this).addClass('active');

  })



});
