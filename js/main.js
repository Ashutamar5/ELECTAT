
features carousel start
$('.features-carousel').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,    
        },
        600:{
            items:2,   
        },
        1000:{
            items:3,   
        }
    }
})
features carousel end