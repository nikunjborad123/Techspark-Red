var header = $("header");
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        header.addClass("navbar-fixed-top");
    } else {
        header.removeClass('navbar-fixed-top');
    }
});	

$(window).resize(function () {
    if (window.innerWidth > 992) {
        $('.header_wrapper').removeClass('open_menu');
        $('html').removeClass('cm-overflow');
    }
});


$(document).ready(function () {

    $('.menu_block li').click(function(){
        $('.menu_block li').removeClass("active");
        $(this).addClass("active");
        $('.header_wrapper').removeClass('open_menu');
        $('html').removeClass('cm-overflow');
    });

    //Menu Js
    $('.menu_toggle_btn').click(function () {
        $('.header_wrapper').toggleClass('open_menu');
        $('html').toggleClass('cm-overflow');
    });


    // timer countdown
    function makeTimer() {

        //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
        var endTime = new Date("5 November 2022 9:56:00 GMT+01:00");
        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }

        $("#days").html("<span class='timer_number'>" + days + "</span>" + "<span class='timer_dhms'>Days</span>");
        $("#hours").html("<span class='timer_number'>" + hours + "</span>" + "<span class='timer_dhms'>Hours</span>");
        $("#minutes").html("<span class='timer_number'>" + minutes + "</span>" + "<span class='timer_dhms'>Minutes</span>");
        $("#seconds").html("<span class='timer_number'>" + seconds + "</span>" + "<span class='timer_dhms'>Seconds</span>");

    }

    setInterval(function () { makeTimer(); }, 1000);

    $('#banner_slider.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        dots : true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

   


    
    // Speaker slider
    function postsCarousel() {
    var checkWidth = $(window).width();
    var owlPost = $(".speakers_section #speaker_slider");
    if (checkWidth > 575) {
      owlPost.addClass('owl-carousel');
      owlPost.owlCarousel({
        loop: true,
        margin: 0,
        rows: 2,
        responsiveClass: true,
        dots: false,
        responsive: {
          0: {
            items: 1,
            nav: true
          },
          577: {
            items: 2,
            nav: true,
            loop: false,
            mouseDrag: false
          },
          992: {
            items: 3,
            nav: true,
            loop: false,
            mouseDrag: false
          },
          1200: {
            items: 4,
            nav: true
          }
        }
      });
    } else if (checkWidth < 576) {
      if (typeof owlPost.data('owl.carousel') != 'undefined') {
        owlPost.data('owl.carousel').destroy();
      }
      owlPost.removeClass('owl-carousel');
    }
  }

  postsCarousel();
  $(window).resize(postsCarousel);

    $("#banner_slider .owl-prev").html('<svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="11.3869" y="2.63402" width="12" height="3" rx="1.5" transform="rotate(135 11.3869 2.63402)" fill="white"/><rect x="2.90159" y="6.91478" width="12" height="3" rx="1.5" transform="rotate(45 2.90159 6.91478)" fill="white"/></svg>');
    $("#banner_slider .owl-next").html('<svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="11.563" y="15.4001" width="12" height="3" rx="1.5" transform="rotate(-45 11.563 15.4001)" fill="white"/><rect x="20.0483" y="11.1194" width="12" height="3" rx="1.5" transform="rotate(-135 20.0483 11.1194)" fill="white"/></svg>');

    $("#team_slider .owl-prev").html('<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x = "8.73633" y = "1.60693" width = "8.84883" height = "2.21221" rx = "1.1061" transform = "rotate(135 8.73633 1.60693)" fill = "#4BB1F5" /><rect x="2.479" y="4.76367" width="8.84883" height="2.21221" rx="1.1061" transform="rotate(45 2.479 4.76367)" fill="#4BB1F5"/><rect x="1.93945" y="5.19336" width="14.7481" height="2.21221" rx="1.1061" fill="#4BB1F5"/></svg >');
    $("#team_slider .owl-next").html('<svg width="17" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8.09375" y="11.0205" width="8.84883" height="2.21221" rx="1.1061" transform="rotate(-45 8.09375 11.0205)" fill="#4BB1F5"/><rect x="14.3511" y="7.86377" width="8.84883" height="2.21221" rx="1.1061" transform="rotate(-135 14.3511 7.86377)" fill="#4BB1F5"/><rect x="14.8901" y="7.43408" width="14.7481" height="2.21221" rx="1.1061" transform="rotate(180 14.8901 7.43408)" fill="#4BB1F5"/></svg>');

    $("#speaker_slider .owl-prev").html('<svg width="21" height="17" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x = "8.73633" y = "1.60693" width = "8.84883" height = "2.21221" rx = "1.1061" transform = "rotate(135 8.73633 1.60693)" fill = "#4BB1F5" /><rect x="2.479" y="4.76367" width="8.84883" height="2.21221" rx="1.1061" transform="rotate(45 2.479 4.76367)" fill="#4BB1F5"/><rect x="1.93945" y="5.19336" width="14.7481" height="2.21221" rx="1.1061" fill="#4BB1F5"/></svg >');
    $("#speaker_slider .owl-next").html('<svg width="21" height="17" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8.09375" y="11.0205" width="8.84883" height="2.21221" rx="1.1061" transform="rotate(-45 8.09375 11.0205)" fill="#4BB1F5"/><rect x="14.3511" y="7.86377" width="8.84883" height="2.21221" rx="1.1061" transform="rotate(-135 14.3511 7.86377)" fill="#4BB1F5"/><rect x="14.8901" y="7.43408" width="14.7481" height="2.21221" rx="1.1061" transform="rotate(180 14.8901 7.43408)" fill="#4BB1F5"/></svg>');


})


// ======================================================================================================



// ------back to top btn
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '3 00');
});

// -----------tab with faqs
$(document).ready(function(){
    
    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })

})     

$(document).ready(function() {
$('.acc-container .acc:nth-child(1) .acc-head').addClass('active');
$('.acc-container .acc:nth-child(1) .acc-content').slideDown();
$('.acc-head').on('click', function() {
    if($(this).hasClass('active')) {
      $(this).siblings('.acc-content').slideUp();
      $(this).removeClass('active');
    }
    else {
      $('.acc-content').slideUp();
      $('.acc-head').removeClass('active');
      $(this).siblings('.acc-content').slideToggle();
      $(this).toggleClass('active');
    }
});     
});  



// -----logo slider
$('.logo-slider .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        992:{
            items:3
        },
        1199:{
            items:5
        }
    }
})

// ------our word
var $owl = $('.our-word .owl-carousel');



$owl.owlCarousel({
  center: false,
  dots:true,
  loop: true,
  responsive:{
        0:{
            items:1
        },
        767:{
             items:1
        },
        991:{
            items:1
        },
        992:{
            items:2
        },
        1200:{
            items:2
        }
    }
});

$(document).on('click', '.owl-item>div', function() {
  // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel
  var $speed = 300;  // in ms
  $owl.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
});


// ----------tracks slider img-----
$('.tracks-img-slider .owl-carousel').owlCarousel({
    stagePadding: 50,
    loop:true,
    margin:10,
    nav:false,
    dots : false,
    items:1
})

// -----------fancybox---

Fancybox.bind('[data-fancybox="gallery"]', {
      infinite: false
    });

// -----------fancybox video---
 jQuery(document).ready(function () {
      jQuery('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        callbacks: {
          elementParse: function (item) {
            console.log(item.el.context.className);
            if (item.el.context.className == 'video') {
              item.type = 'iframe',
                item.iframe = {
                  patterns: {
                    youtube: {
                      index: 'youtube.com/',
                      id: 'v=',
                      src: '//www.youtube.com/embed/%id%?autoplay=1'
                    },
                    vimeo: {
                      index: 'vimeo.com/',
                      id: '/',
                      src: '//player.vimeo.com/video/%id%?autoplay=1'
                    },
                    gmaps: {
                      index: '//maps.google.',
                      src: '%id%&output=embed'
                    }
                  }
                }
            } else {
              item.type = 'image',
                item.tLoading = 'Loading image #%curr%...',
                item.mainClass = 'mfp-img-mobile',
                item.image = {
                  tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
                }
            }

          }
        },
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0, 1]
        }

      });

    });


    $('.fancy_box_img').click(function () {
      console.log(true)
      width_full();
    })
    function width_full() {
      setTimeout(function() {
        console.log(true)
          let head = $(".mfp-iframe").contents().find("video[name='media']");
          $(head).css('width','100%');

          $('.mfp-arrow ').click(function () {
            width_full();
          })

      }, 400)
    }

// ---------our-word



// function sliderwidth(){
// var checkWidth= $(window).width();
// if(checkWidth < 767){

// jQuery(".our-word .our-word-box .our-title-text-box").appendTo($(".our-word .our-word-box .our-word-img"))
// sliderwidth()
  
// sliderwidth();
//   $(window).resize(sliderwidth);

  
// }}

