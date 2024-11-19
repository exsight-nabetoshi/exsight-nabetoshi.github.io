AOS.init();

var logoHeight_before = 0;
var logoHeight_after = 0;
var positionChanged = false;
const positionThreshold = 200;
const positionOffset = 20;

$(function() {
  logoHeight_before = $(".logo").height();
});

$(window).on("scroll", function() {
  let scrollPosition = $(window).scrollTop();
  console.log(`scroll position: ${scrollPosition}`);

  if (scrollPosition > positionThreshold) {
    if (!$(".logo").hasClass("small")) {
      $(".logo").addClass("small");
      adjustScrollPosition(scrollPosition);
    }
  }
  else {
    if ($(".logo").hasClass("small")) {
      $(".logo").removeClass("small");
      adjustScrollPosition(scrollPosition);
    }
  }

  if (scrollPosition > 100) {
    pagetop.fadeIn();
  }
  else {
    pagetop.fadeOut();
  }
});

// // transitionプロパティ
// $(".logo").on("transitionend webkitTransitionEnd", function() {
//   console.log("transition end");
//   let scrollPosition = $(window).scrollTop();

//   if ($(".logo").hasClass("small")) {
//     let newPosition = scrollPosition + positionOffset;
//     $(window).scrollTop(newPosition);
//   }
//   else {
//     let newPosition = scrollPosition - positionOffset;
//     $(window).scrollTop(newPosition);
//   }
// });

function adjustScrollPosition(scrollPosition) {
  logoHeight_after = $(".logo").height();
  // let diff = logoHeight_after - logoHeight_before;
  let diff = logoHeight_before - logoHeight_after;
  if (diff != 0) {
    let newPosition = scrollPosition + diff;
    $(window).scrollTop(newPosition);
    logoHeight_before = logoHeight_after;
  }
}

$('#page-top').click(function() {
  $('body, html').animate({ scrollTop: 0 }, 300);
  return false;
});

var pagetop = $('#page-top');
pagetop.hide();
