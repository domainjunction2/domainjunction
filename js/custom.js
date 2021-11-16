$(document).ready(function() {
    $('.accordion-title').click(function(event) {
        if($('.accordion').hasClass('one')){
            $('.accordion-title').not($(this)).removeClass('active');
            $('.accordion-text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });

});
 $(function() {
      $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        dots: true,       
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
         })
});
 $(function() {
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
const menuBtn = document.querySelector('.navBurger');
const menu = document.querySelector('.menu-wrap');
const body = document.querySelector('body');

menuBtn.addEventListener("click", function (e) {
    e.preventDefault();
    this.classList.toggle('is-active')
    menu.classList.toggle('is-opened');
    body.classList.toggle('is-locked');
});

$('a.popup-link').click(function(e){
    $('.bg,.popup').fadeToggle(500);
});
$('.bg').click(function(e){
    $('.bg,.popup').fadeToggle(500);
});