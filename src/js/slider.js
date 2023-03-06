 
$('.slider').slick({
  dots: false,
  arrows: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  adaptiveWidth: true,
  lazyLoad: 'ondemand',
  infinite: true,
  variableWidth: true,
  autoplay: false,
  // responsive: [
  //   {
  //     breakpoint: 375,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 1,
  //       infinite: true,
  //       // dots: true
  //     }
  //   },
    
    
  //   // You can unslick at a given breakpoint now by adding:
  //   // settings: "unslick"
  //   // instead of a settings object
  // ]
});
    

      

      // $('.multiple-items-two').slick({
      //   infinite: true,
      //   slidesToShow: 2,
      //   slidesToScroll: 2
      // });