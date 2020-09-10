$(function(){
//fixed Header
let header = $("#header");
let intro = $("#intro");
let introH =intro.height();
let scrollPos = $(window).scrollTop();
let nav= $("nav");
let navToggle=$("#navToggle")
    $(window).on("scroll load resize", function(){
        introH =intro.height();
        scrollPos = $(this).scrollTop();
        if( scrollPos> introH){
           header.addClass("fixed").css('opacity','.8');
        } else{
            header.removeClass("fixed");
        }


    });

//    Smooth scroll

    $("[data-scroll]").on("click",function(event){
        event.preventDefault();
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        nav.removeClass("show");
        $("html, body").animate({
            scrollTop: elementOffset - 70
        },1000);
    });

//    navtoggle
        navToggle.on("click",function(event){
        event.preventDefault();
        nav.toggleClass("show");
    })




//    reviews
    let slider = $("#reviewsSlider");
        slider.slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
            fade:true,
            arrows: false
});




});
