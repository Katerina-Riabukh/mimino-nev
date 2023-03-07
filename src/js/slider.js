


 $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
 });
      

 
$('.slider').slick({
  dots: false,
  arrows: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  adaptiveWidth: true,
  adaptiveHeigth: true,
  lazyLoad: 'ondemand',
  infinite: true,
  variableWidth: true,
  autoplay: false,
 
});

$('.slider-1').slick({
  dots: false,
  arrows: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  adaptiveWidth: true,
  adaptiveHeigth: true,
  lazyLoad: 'ondemand',
  infinite: true,
  variableWidth: true,
  autoplay: false,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        // dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        // dots: true
      }
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        // dots: true
      }
    },
    
    
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.slider-2').slick({
  dots: false,
  arrows: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  adaptiveWidth: true,
  adaptiveHeigth: true,
  lazyLoad: 'ondemand',
  infinite: true,
  variableWidth: true,
  autoplay: false,
 
});

      

     


