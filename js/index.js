// homepage slider
$('.owl-carousel.image__slider').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
})
// homepage slider end
// homepage room slider
$('.owl-carousel.rooms__slider').owlCarousel({
    loop:true,
    margin:40,
    autoplay: true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
// homepage  roomslider end