$(document).ready(function () {
    handleScroll();
});

$(document).scroll(function () {
    handleScroll();
});

function handleScroll() {
    var scrollValue = $(this).scrollTop();
    handleNavbar(scrollValue);
}

function handleNavbar(scrollValue) {
    if (scrollValue > 200) {
        // $('#hexadNav').hide();
        if (window.innerWidth > 768) {
          $('#hexadNav').addClass('navbar-white');
        }
        $('#hexadNav').removeClass('navbar-transparent');
        $('#hexadLogo').attr('src', "/assets/images/hexad-logo.png");
    }
    else {
        // $('#hexadNav').show();
        $('#hexadNav').addClass('navbar-transparent');
        $('#hexadNav').removeClass('navbar-white');
        $('#hexadLogo').attr('src', "/assets/images/hexad-logo-white.png");
    }
}


$('a.page-scroll').on('click', function (event) {
    event.preventDefault();
    var $anchor = $(this);

    if($($anchor.attr('href')).offset() != undefined) {
      $('html, body').stop().animate({
          scrollTop: ($($anchor.attr('href')).offset().top + 1)
      }, 110, 'easeInOutExpo');
    }
});
