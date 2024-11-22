AOS.init();

const positionThreshold_Low = 185;
const positionThreshold_High = 200;
// const positionOffset = 20;

// for log image transition
$(window).on("scroll", function() {
  let scrollPosition = $(window).scrollTop();
  // console.log(`scrollPosition: ${scrollPosition}`);

  if (scrollPosition > positionThreshold_High) {
    $(".logo").addClass("small");
  }
  if (scrollPosition < positionThreshold_Low) {
    $(".logo").removeClass("small");
  }
});

// function adjustScrollPosition(scrollPosition) {
//   logoHeight_after = $(".logo").height();
//   // let diff = logoHeight_after - logoHeight_before;
//   let diff = logoHeight_before - logoHeight_after;
//   if (diff != 0) {
//     let newPosition = scrollPosition + diff;
//     $(window).scrollTop(newPosition);
//     logoHeight_before = logoHeight_after;
//   }
// }

// for scroll to top
var $pagetop = $('#page-top');
$pagetop.click(function() {
  $('body, html').animate({ scrollTop: 0 }, 300);
  return false;
});
$pagetop.hide();
$(window).on("scroll", function() {
  let scrollPosition = $(window).scrollTop();
  if (scrollPosition > 100) {
    $pagetop.fadeIn();
  }
  else {
    $pagetop.fadeOut();
  }
});
