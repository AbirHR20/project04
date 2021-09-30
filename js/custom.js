$(document).ready(function(){
    //banner slider;
    $('.banner-slider').slick({
        arrows : false,
        autoplay : true,
    });

    var typed = new Typed('.element', {
        strings: ["Club", "Bird"],
        typeSpeed: 70,
        loop : true,
      });

      $('.venobox').venobox({
        arrowsColor : '#ff5f83',
      });

      $('.dj-slider').slick({
        prevArrow : '<i class="fa fa-chevron-left prev-arrow"></i>',
        nextArrow : '<i class="fa fa-chevron-right next-arrow"></i>',
        slidesToShow : 3 ,
        slidesToScroll : 1,
        centerMode : true ,
        centerPadding : '0px',
        autoplay : true,
    });

    new WOW().init();

    $(function(){
        $('#countdown').countdown({
          year: 2021, // YYYY Format
          month: 10, // 1-12
          day: 26, // 1-31
          hour: 9, // 24 hour format 0-23
          minute: 0, // 0-59
          second: 0, // 0-59
        });
      });

      $('.blogs-slider').slick({
        prevArrow : '<i class="fa fa-chevron-left prev-arrow"></i>',
        nextArrow : '<i class="fa fa-chevron-right next-arrow"></i>',
        slidesToShow : 3 ,
        slidesToScroll : 1,
        centerMode : true ,
        centerPadding : '0px',
        autoplay : true,
    });

    $('.test-slider').slick({
      arrows : false,
      autoplay : true,
      slidesToShow : 2 ,
  });
    
});