$(document).ready(function(){
    // my slick slider options
    var options = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        adaptiveHeight: false,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: false
              }
            }
        ]
      };
      // my slick slider as constant object
      const mySlider = $('.testimonials__carousel').on('init', function(slick) {
  
        // on init run our multi slide adaptive height function
        multiSlideAdaptiveHeight(this);
  
      }).on('beforeChange', function(slick, currentSlide, nextSlide) {
  
        // on beforeChange run our multi slide adaptive height function
        multiSlideAdaptiveHeight(this);
  
      }).slick(options);
  
  
      // our multi slide adaptive height function passing slider object
      function multiSlideAdaptiveHeight(slider) {
  
        // set our vars
        let activeSlides = [];
        let tallestSlide = 0;
        // set item margin bottom 
        let marginBottomItem = 35;
  
        // very short delay in order for us get the correct active slides
        setTimeout(function() {
  
          // loop through each active slide for our current slider
          $('.slick-track .slick-active', slider).each(function(i) {
  
            // add current active slide height to our active slides array
            activeSlides[i] = $(this).outerHeight();
  
          });
  
          // for each of the active slides heights
          activeSlides.forEach(function(item) {
  
            // if current active slide height is greater than tallest slide height
            if (item > tallestSlide) {
  
              // override tallest slide height to current active slide height
              tallestSlide = item;
  
            }
  
          });
  
          // set the current slider slick list height to current active tallest slide height
          $('.slick-list', slider).height(tallestSlide+marginBottomItem);
  
        }, 10);
  
      }
  
  
      // when window is resized
      $(window).on('resize', function() {
  
        // run our multi slide adaptive height function incase current slider active slides change height responsively
        multiSlideAdaptiveHeight(mySlider);
  
      });
  
  
});

  
$(document).ready(function(){
    const top_nav_menu = document.querySelector('.top_nav_menu');
    const header_nav = document.querySelector('.header');
    const body = document.querySelector('body');
    const burger = document.querySelector('.burger');
    $('.burger').click(function(event){
        $('.top_nav_menu').toggleClass('top_nav_menu_active');
        $('.header').toggleClass('header_nav_stick_tothe_top');
        $(this).toggleClass('active_burger');
        $('body').toggleClass('lock');
        $('.about-form').toggleClass('zindex'); 
        $('.top_nav_ul').click(function(event){
            top_nav_menu.classList.remove('top_nav_menu_active');
            header_nav.classList.remove('header_nav_stick_tothe_top');
            burger.classList.remove('active_burger');
            body.classList.remove('lock');
            $('.about-form').removeClass('zindex'); 
        });
    });
});
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() != 0)
        $('#jumbBtn').fadeIn();
        else
        $('#jumbBtn').fadeOut();
    });
    $('#jumbBtn').click(function(){
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });
});
$(document).ready(function(){
    $('.about-form__when').on('input', function() {
        $(this).addClass('no-after');
    });
    $('.about-form__time').on('input', function() {
        $(this).addClass('no-after');
    });
});