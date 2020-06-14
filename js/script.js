function animScroll(){
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

/*Otherwise sometimes too many scroll events make animation fail*/
var animScrollThrotteled = _.throttle(animScroll, 100);

$(window).on("load",function() {
    $(window).scroll(animScrollThrotteled).scroll(); //invoke scroll-handler on page-load
  });

$(document).ready(function() {
    $('.fade-on-load').each( function(i){
        $(this).animate({'opacity':'1'},2000);
    });
});