$(document).ready(function(){

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

  $('.next').click(function(){
    $('img.active').removeClass('active').next().addClass('active');
    $('i.active').removeClass('active').next().addClass('active');
    if ($('img.active').hasClass('last') === true) {
      $('img.last').removeClass('active');
      $('img.first').addClass('active');
      $('i.last').removeClass('active')
      $('i.first').addClass('active');
    }
  })

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
