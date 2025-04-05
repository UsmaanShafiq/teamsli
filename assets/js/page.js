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
              breakpoint: 1025, // When screen width is 1024px or less
              settings: {
                  vertical: true, // Switch to horizontal mode
                  verticalSwiping: true,
                  slidesToShow: 2, // Adjust number of slides
                  slidesToScroll: 1,
              }
          },
          {
              breakpoint: 768, // When screen width is 768px or less
              settings: {
                  vertical: true,
                  verticalSwiping: true,
                  slidesToShow: 2,
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
