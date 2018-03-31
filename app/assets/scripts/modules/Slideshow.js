import $ from 'jquery';

class Slideshow {
  constructor() {

    this.slideIndex = 0;

    this.slides = $('.slideshow');
    this.tabletNav = $('.slideshow-tablet-nav');

    this.events();

  }

  events() {
    this.slides.on('click', this, this.exposeSlide);
    this.tabletNav.on('click', 'li', this, this.jumpTo);
  }

  exposeSlide(event) {
    event.stopPropagation();
    var that = event.data;
    that.slideIndex = $(this).index(".slideshow");

    if($(this).hasClass('slideshow--current')) return 0;
    $(this).siblings('.slideshow--current')
           .removeClass('slideshow--current slideshow--fadeIn');
    $(this).addClass('slideshow--current slideshow--fadeIn');

  }

  jumpTo(event) {
    event.stopPropagation();
    var that = event.data;
    that.slideIndex = $(this).data('index');

    that.slides.eq(that.slideIndex).siblings().removeClass('slideshow--current slideshow--fadeIn');
    that.slides.eq(that.slideIndex).addClass('slideshow--current');
    setTimeout(function(){
      that.slides.eq(that.slideIndex).addClass('slideshow--fadeIn');
    }, 100);
  }

}

export default Slideshow;

/*
$('html, body').animate({
 scrollTop: $(this).prev().offset().top-20 //20 is collapsing margin from __label-text in .slide-content css
},500);
*/
