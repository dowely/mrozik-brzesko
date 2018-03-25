import $ from 'jquery';

class Slideshow {
  constructor() {
    this.slides = $('.slideshow').find('.slideshow__slide');
    this.events();
  }

  events() {
    this.slides.on('click', this.exposeSlide);
  }

  exposeSlide(event) {
    event.stopPropagation();

    if($(this).hasClass('slideshow__slide--exposed')) return 0;

    $(this).siblings('.slideshow__slide--exposed')
           .removeClass('slideshow__slide--exposed');

    $(this).addClass('slideshow__slide--exposed');
  }
}

export default Slideshow;

/*
$('html, body').animate({
 scrollTop: $(this).prev().offset().top-20 //20 is collapsing margin from __label-text in .slide-content css
},500);
*/
