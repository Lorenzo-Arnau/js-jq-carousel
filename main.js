// funzione ready documento
$(document).ready(function(){

// funzione on click freccia sinistra carousel
$('.prev').click(function(){
  var attiva = $('.active') ;
  attiva.removeClass('active');
  if (attiva.hasClass('first') === true) {
      $('.last').addClass('active');
    }else {
    attiva.prev().addClass('active');
  }
});
// funzione on click freccia destra carousel
  $('.next').click(function(){
    var attiva = $('.active') ;
    attiva.removeClass('active');
    if (attiva.hasClass('last') === true) {
      $('.first').addClass('active');
    }else {
      attiva.next().addClass('active');
    }
  });

// funzione on click frecce tastiera
  $("body").keydown(function(e) {
    if(e.keyCode == 37) { // sinistra
      var attiva = $('.active') ;
      attiva.removeClass('active');
      if (attiva.hasClass('first') === true) {
          $('.last').addClass('active');
        }else {
        attiva.prev().addClass('active');
      }
    }
    if(e.keyCode == 39) { // destra
      var attiva = $('.active') ;
      attiva.removeClass('active');
      if (attiva.hasClass('last') === true) {
        $('.first').addClass('active');
      }else {
        attiva.next().addClass('active');
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
