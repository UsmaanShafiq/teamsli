$(document).ready(function(){
  $('.slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      centerMode: true,
      arrows: false,
      vertical: true,
      verticalSwiping: true,
      focusOnSelect: true,
      responsive: [
          {
              breakpoint: 1024, // When screen width is 1024px or less
              settings: {
                  vertical: false, // Switch to horizontal mode
                  verticalSwiping: false,
                  slidesToShow: 2, // Adjust number of slides
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 768, // When screen width is 768px or less
              settings: {
                  vertical: false,
                  verticalSwiping: false,
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
      ]
  });
});


$(document).ready(function(){
  $('.multiple-items').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true
  });
});
