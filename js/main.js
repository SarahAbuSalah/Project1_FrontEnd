// $('.carousel').carousel({
//     interval: 2000
//   })



$(document).scroll(function () {
    if ($(document).scrollTop() >7) {
        $('.navbar').addClass('navbar-bg');
    } else {
        $('.navbar').removeClass('navbar-bg');
    }
})

$(document).scroll(function () {
    if ($(document).scrollTop() > 300) {
        $('.top').fadeIn();
    } else {
        $('.top').fadeOut();
    }
})

$('.top').click(function () {

    $('body, html').animate({
        scrollTop: 0
    }, 1500);

})



$(function () {
    $('.fa-search').click(function () {
      $('body').toggleClass('noscroll');
    })
  });




  $('.button').click(function () {
    $('body').toggleClass('pop-overlay')
})



// Search

$('#open-search').click(function(e) {
    e.preventDefault();
    $('.search-auto').addClass('open')
})


$('#close-search').click(function(e) {
    e.preventDefault();
    $('.search-auto').removeClass('open')
})

