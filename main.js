function nextImg(){
  var attiva = $('.active') ;
  attiva.removeClass('active');
  if (attiva.hasClass('last') === true) {
    $('.first').addClass('active');
  }else {
    attiva.next().addClass('active');
  }
}
function prevImg(){
  var attiva = $('.active') ;
  attiva.removeClass('active');
  if (attiva.hasClass('first') === true) {
      $('.last').addClass('active');
    }else {
    attiva.prev().addClass('active');
  }
}



// funzione ready documento
$(document).ready(function(){

// funzione on click freccia sinistra carousel
$('.prev').click(function(){
  prevImg();
});
// funzione on click freccia destra carousel
  $('.next').click(function(){
  nextImg();
  });

// funzione on click frecce tastiera
  $(document).keydown(function(e) {
    if(e.keyCode == 37) { // sinistra
    prevImg();
    }
    if(e.keyCode == 39) { // destra
    nextImg();
    }
  });

  // funzione click sui pallini per vedere le immagini
  $('.nav i').click(function(){
    $('.nav i').removeClass('active');
    $(this).addClass('active');
    var index = $('.nav i').index(this)+1;
    $('img').removeClass('active');
    $('img:nth-child('+index+')').addClass('active');

  })
});
