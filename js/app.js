$(function() {
  // console.log("loaded");
  $('a[href*=#]').each(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname
    && this.hash.replace(/#/,'') ) {
      var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
      var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
      if ($target) {
        var targetOffset = $target.offset().top;
        $(this).click(function() {
          $('#myNav li a').removeClass('isActive');
          $(this).addClass('isActive');
          $('html, body').animate({scrollTop: targetOffset}, 1000);
          // if ($('#homeLink').hasClass('isActive')) {
          //   $('#header1').css('visibility', 'visible');
          //   $('#myNav').css('margin-top', '0px');
          //   $('#header').css('height', '120px');
          // } else {
          //   $('#header1').css('visibility', 'hidden');
          //   $('#myNav').css('margin-top', '-65px');
          //   $('#header').css('height', '60px');
          // }
          return false;
        });
      }
    }
  });
});

// $('#submitButton').on('click', function() {
//   $('#contactForm').submit();
//   $('#contactForm').reset();
// });
