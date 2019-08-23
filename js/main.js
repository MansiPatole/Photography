$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
})

$('.testi').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items1:1,
            nav:true
        },
        600:{
            items1:1,
            nav:false
        },
        900:{
            items1:2,
            nav:true,
            loop:false
        },

        1000:{
            items1:2,
            nav:true,
            loop:false
        }
    }
})


// form validation


$(document).ready(function () {
    
                $("#contact-form").validate({
                    rules: {
                        "username": {
                            required: true,
                                  minlength: 3
                             }, 
                                  "email": {
                            required: true,
                            email: true
                        }, 
                                   "mobile": {
                            required: true,
                            minlength: 10,
                                  maxlength: 10
                        },
                        
                    }

                });


            });

$(window).scroll(function () {
     var scroll = $(window).scrollTop();

     if (scroll >= 500) {
         $('.scroll-top').css('opacity', '1');
     } else {
         $('.scroll-top').css('opacity', '0');
     }
 });
