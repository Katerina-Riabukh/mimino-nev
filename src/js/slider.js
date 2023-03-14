//  Слайдер для ресторан-меню
$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
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
  infinite: true,
  speed: 200,
  autoplay: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        autoplay: false,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
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


// $('.project_slider').slick({
//   arrows: true,
//   speed: 300,
//   dots: false,
//   infinite: true,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   adaptiveWidth: true,
//   lazyLoad: 'ondemand',
//   variableWidth: true,
//   adaptiveHeight: true,
//   autoplay: false
// });
     
$('.slider-3').slick({
  dots: false,
  infinite: true,
  speed: 300,
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: 'ondemand',
  variableWidth: true,
  adaptiveWidth: true,
adaptiveHeigth: true,
});

