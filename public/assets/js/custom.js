// $(window).load(function() {
//     $(".custom-loader").fadeOut(400, function(){
//         $("#home").fadeIn(100);
//     });
// });

$(document).ready(function () {
    handleScroll();
});

$(document).scroll(function () {
    handleScroll();
});

function handleScroll() {
    var scrollValue = $(this).scrollTop();
    handleNavbar(scrollValue);
    // handleParalax(scrollValue);
    // handleGotoTop(scrollValue);
}

// function handleParalax(scrollValue) {
//     $('.paralax').each(function () {
//         var $bgobj = $(this);
//         var yPos = -(scrollValue / 3);
//         var coords = 'center ' + yPos + 'px';
//         $bgobj.css({
//             backgroundPosition: coords
//         });
//     });

//     $('.paralax-box1').css({
//       'transform' : 'translateY(' + scrollValue/2 + 'px)'
//     });
// }

function handleNavbar(scrollValue) {
    if (scrollValue > 200) {
        // $('#hexadNav').hide();
        $('#hexadNav').addClass('navbar-white');
        $('#hexadNav').removeClass('navbar-transparent');
        $('#hexadLogo').attr('src', "{{'/assets/images/hexad-logo.png' | prepend: site.baseurl }}");

        // {{'/assets/images/hexad-logo-white.png' | prepend: site.baseurl }}
    }
    else {
        // $('#hexadNav').show();
        $('#hexadNav').addClass('navbar-transparent');
        $('#hexadNav').removeClass('navbar-white');
        $('#hexadLogo').attr('src', "{{'/assets/images/hexad-logo-white.png' | prepend: site.baseurl }}");
    }
}

// function handleGotoTop(scrollValue) {
//     if (scrollValue > 450) {
//         $('#gotoTop').fadeIn(600);
//     }
//     else {
//         $('#gotoTop').fadeOut(400);
//     }
// }

// function toggleNavigation(isActive) {
//     var current = $(window).scrollTop();
//     $(".button_container").css("z-index", 8000);
//     if(isActive) {
//         $('#main-menu').css("visibility", "hidden");
//         $('#main-menu').removeClass('opened');
//         $("#trigger").removeClass('active');
//         $("body").css("overflow", "initial") ;
//         $(window).off('scroll');
//     }
//     else {
//         $('#main-menu').css("visibility", "visible");
//         $('#main-menu').addClass('opened');
//         $('#main-menu .menu-overlay').css('top', current+'px');
//         $("#trigger").addClass('active');
//         $("body").css("overflow", "hidden") ;
//         $(window).scroll(function() {
//             $(window).scrollTop(current);
//         });
//     }
// }

// $('a.page-scroll').bind('click', function (event) {
//     event.preventDefault();
//     var $anchor = $(this);
//     $('html, body').stop().animate({
//         scrollTop: ($($anchor.attr('href')).offset().top + 1)
//     }, 130, 'easeInOutExpo');
// });

// $('#trigger').on('click', function(){
//     toggleNavigation($(this).hasClass("active"));
// });

// $('.menu-overlay').on('click', function(){
//     toggleNavigation(true);
// });

$('a.page-scroll').bind('click', function (event) {
    event.preventDefault();
    var $anchor = $(this);

    if($($anchor.attr('href')).offset() != undefined) {
      $('html, body').stop().animate({
          scrollTop: ($($anchor.attr('href')).offset().top + 1)
      }, 140, 'easeInOutExpo');
    }
});

// $('a.page-transition').bind('click', function(event) {
//     event.preventDefault();
//     var $anchor = $(this);
//     var current = $(window).scrollTop();

//     var elementPosition = $anchor.offset();
//     if($anchor.attr('href') != undefined) {
//         $("body").css("overflow", "hidden");
//         $('body').prepend('<div class="page-overlay"></div>')
//         $('.page-overlay').css('left', elementPosition.left);
//         $('.page-overlay').css('top', elementPosition.top);

//         setTimeout(function() {
//             window.location = $anchor.attr('href');
//         }, 500); //load page after animation

//     }
// });

