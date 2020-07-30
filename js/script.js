/*Only show the "About me" section when at the top of the page*/
var visibleBottom = $('.visible-top-only').position().top + $('.visible-top-only').outerHeight(false);
/*NOT robust (needs fix): fails if window is resized when the "About me" section isn't visible*/
$(window).resize(function() {
    visibleBottom = $('.visible-top-only').position().top + $('.visible-top-only').outerHeight(false);
});

function visibleTopOnlyScroll() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    // if ($(this).scrollTop() > 100) {
    if (windowBottom > visibleBottom + 150 && $(this).scrollTop() > 100) {
      $('.visible-top-only').fadeOut(function(){
          $('.content').fadeIn();
      })
    } else {
      $('.content').fadeOut(function(){
          $('.visible-top-only').fadeIn();
      });
    }
}

function fadeOnScroll(){
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade-on-scroll").each(function() {
        /* Check the location of each desired element */
        var objectTop = $(this).offset().top;
        
        /* If the element is completely within bounds of the window, fade it in */
        if (objectTop + 120 < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(1000,1);}
        } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(1000,0);}
        }
    });
}

function animScroll(){
    fadeOnScroll();
    visibleTopOnlyScroll();
}

/*Otherwise sometimes too many scroll events make the animation fail*/
var animScrollThrotteled = _.throttle(animScroll, 100);

$(window).on("load",function() {
    $(window).scroll(animScrollThrotteled).scroll(); //invoke scroll-handler on page-load
  });

$(document).ready(function() {
    $('.fade-on-load').each( function(i){
        $(this).animate({'opacity':'1'},2000);
    });
});
