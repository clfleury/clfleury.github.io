$(function(onResize){

if ( $(window).width() > 767) {
  $(window).scroll(function() {
    if ($(this).scrollTop()< 200) {
      $('section').removeClass("visible");
    } else {
       $('section').addClass("visible");
    }
  });
} else {
    $('section').addClass("visible");
}

var $logo = $('#topbar img');
var $nav = $('.menu ul li');
  
/// Menu scroll functionality when 440px from the top 
var onResize = function(){
  if ( $(window).width() > 767) {
  $(window).scroll(function() {
    if ($(this).scrollTop()< 440) {
      $logo.addClass("top-img");
      $logo.removeClass("scroll-img");
      $nav.removeClass('listPaddingDown');
      $nav.addClass('listPaddingTop');
      $('#topbar h1').removeClass("title-scroll");
    } else {
      $('section').fadeIn();  
      $logo.removeClass("top-img");
      $logo.addClass("scroll-img");
      $nav.removeClass('listPaddingTop');
      $nav.addClass('listPaddingDown');
      $('#topbar h1').addClass("title-scroll");
    }
  });
} else if ($(window).width() <= 767){
    $(window).scroll(function() {
      $logo.addClass("top-img");
    });
  }
}

// Slideshow
var width = 1500;
var animationSpeed = 500;
var pause = 6000;
var slider = $('#slider');
var slideContainer= slider.find('.slides');
var slides = slideContainer.find('.slide');
var slideRight = $('.slide-right');
var slideLeft = $('.slide-left');
var currentSlide = 1;
var interval;

function startSlider() {
  interval = setInterval(function() {
    if(slideContainer.css("marginLeft") < -(width * slides.length)) {
      slideContainer.css('margin-left', 0);
      currentSlide = 1;
    } else {
        slideContainer.animate({'margin-left': '-=' +width}, animationSpeed, function(){                               
        currentSlide++;
        if(currentSlide === slides.length) {
          currentSlide = 1;
          slideContainer.css('margin-left', 0);
        }
      });
    }
  }, pause);
}


function pauseSlider(){
  clearInterval(interval);
}

slideRight.on('mouseenter', pauseSlider).on('mouseleave', startSlider);
slideLeft.on('mouseenter', pauseSlider).on('mouseleave', startSlider);


slideRight.click( function() {
  slideContainer.animate({'margin-left': '-=' +width}, animationSpeed, function(){                               
    currentSlide++;
    if(currentSlide === slides.length) {
      currentSlide = 1;
      slideContainer.css('margin-left', 0);
    }
  });
});

slideLeft.click( function() {
  if (currentSlide === 1) {
    currentSlide = slides.length - 1;
    slideContainer.css('margin-left', -4500);
    slideContainer.animate({'margin-left': '-' +3000}, animationSpeed);
  } else {
    slideContainer.animate({'margin-left': '+=' +width}, animationSpeed, function(){                               
      currentSlide--;
      if(currentSlide === 1) {
        currentSlide = slides.length;
        slideContainer.css('margin-left', -4500);
      } else if(currentSlide === slides.length) {
          currentSlide = slides.length - 1;
      }
    });
  }
});

startSlider();

var menu = $('.menu');

$('.menu-button').click(function() {
  if(menu.hasClass('hidden-menu')) {
    menu.removeClass('hidden-menu');
    menu.addClass('visible-menu');
  } else if (menu.hasClass('visible-menu')){
    menu.addClass('hidden-menu');
    menu.removeClass('visible-menu');
  }
});

$(document).ready(onResize);
$(window).resize(onResize);

}); //Main Function
