// funzione ready documento
$(document).ready(function(){

// funzione on click freccia sinistra carousel
$('.prev').click(function(){
  var imgAttiva = $('img.active') ;
  var iAttiva = $('i.active') ;
  imgAttiva.removeClass('active');
  iAttiva.removeClass('active');
  if (imgAttiva.hasClass('first') === true) {
      $('img.last').addClass('active');
      $('i.last').addClass('active');
    }else {
    imgAttiva.prev().addClass('active');
    iAttiva.prev().addClass('active');
  }
});
// funzione on click freccia destra carousel
  $('.next').click(function(){
    var imgAttiva = $('img.active') ;
    var iAttiva = $('i.active') ;
    imgAttiva.removeClass('active');
    iAttiva.removeClass('active');
    if (imgAttiva.hasClass('last') === true) {
      $('img.first').addClass('active');
      $('i.first').addClass('active');
    }else {
      imgAttiva.next().addClass('active');
      iAttiva.next().addClass('active');
    }
  });

// funzione on click frecce tastiera
  $("body").keydown(function(e) {
    if(e.keyCode == 37) { // sinistra
      var imgAttiva = $('img.active') ;
      var iAttiva = $('i.active') ;
      imgAttiva.removeClass('active');
      iAttiva.removeClass('active');
      if (imgAttiva.hasClass('first') === true) {
          $('img.last').addClass('active');
          $('i.last').addClass('active');
        }else {
        imgAttiva.prev().addClass('active');
        iAttiva.prev().addClass('active');
      }
    }
    if(e.keyCode == 39) { // destra
        var imgAttiva = $('img.active') ;
        var iAttiva = $('i.active') ;
        imgAttiva.removeClass('active');
        iAttiva.removeClass('active');
        if (imgAttiva.hasClass('last') === true) {
          $('img.first').addClass('active');
          $('i.first').addClass('active');
        }else {
          imgAttiva.next().addClass('active');
          iAttiva.next().addClass('active');
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
