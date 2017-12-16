/*==========================================================================
                       NAVIGATION
=========================================================================*/
$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() < 50){
            //hide nav
            $("nav").removeClass("bibsy-top-nav");
            $("#back-to-top").fadeOut();
            
        }else{
            //show nav
            $("nav").addClass("bibsy-top-nav");
            $("#back-to-top").fadeIn();
            
           
        }
        
        
    });
});

//smooth scrolling
/*$(function(){
   $("a.smooth-scroll").click(function(event){
     event.preventDefault(); 
        //get/retrun id like #about, #work, #team 
            var section = $(this).attr("href"); 
       
       $('html,body').animate({
           scrollTop: $(section).offset().top
       },1250)
   });
});*/

/*==========================================================================
                        SERVICES
=========================================================================*/

$(function () {

    //animate on scroll(it is a plugin)
    new WOW().init();
});

/*==========================================================================
                            TEAM MEMBERS
=========================================================================*/
/*owl-carousel slider*/
$(function () {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});

/*==========================================================================
                            TESTIMONIALS
=========================================================================*/
/*owl-carousel slider*/
$(function () {
    $("#customer-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});

/*==========================================================================
                            STAT
=========================================================================*/
/*(COUNTER UP)*/
$(function () {

    $('.counter').counterUp({
        delay: 10,
        time: 3000 /* 1000 = 1s*/
    });
});

/*==========================================================================
                            CLIENTS
=========================================================================*/
/*owl-carousel slider*/
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});