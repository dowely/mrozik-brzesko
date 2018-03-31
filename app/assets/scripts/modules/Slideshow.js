import $ from 'jquery';

class Slideshow {
  constructor() {

    this.slideIndex = 0;

    this.slides = $('.slideshow');
    this.tabletNav = $('.slideshow-tablet-nav');
    this.nextBtn = $('.slideshow-desktop-nav__next');
    this.prevBtn = $('.slideshow-desktop-nav__prev');
    this.dots = $('.slideshow-desktop-nav__dots');

    this.events();

  }

  events() {
    this.slides.on('click', this, this.exposeSlide);
    this.tabletNav.on('click', 'li', this, this.jumpTo);
    this.nextBtn.on('click', this, function(event){
      event.stopPropagation();
      var that = event.data;
      that.moveBy(1);
      that.showCurrentSlide();
    });
  }

  exposeSlide(event) {
    event.stopPropagation();
    var that = event.data;
    that.slideIndex = $(this).index(".slideshow");

    if($(this).hasClass('slideshow--current')) return 0;
    $(this).siblings('.slideshow--current')
           .removeClass('slideshow--current');
    $(this).addClass('slideshow--current');

  }

  showCurrentSlide() {
    this.slides.eq(this.slideIndex).siblings().removeClass('slideshow--current');
    this.slides.eq(this.slideIndex).addClass('slideshow--current');
    this.slides.eq(this.slideIndex)
      .css({opacity: "0.3"})
      .animate({opacity: "1"}, 1000);
  }

  jumpTo(event) {
    event.stopPropagation();
    var that = event.data;
    that.slideIndex = $(this).data('index');

    that.slides.eq(that.slideIndex).siblings().removeClass('slideshow--current');
    that.slides.eq(that.slideIndex).addClass('slideshow--current');
    that.slides.eq(that.slideIndex)
      .css({opacity: "0"})
      .animate({opacity: "1"}, 1000);

  }

  moveBy(vector) {
    if(this.slideIndex < this.slides.length - 1) {
      this.slideIndex += vector;
    } else {
      this.slideIndex = 0;
    }
  }

}

export default Slideshow;

/*
$('html, body').animate({
 scrollTop: $(this).prev().offset().top-20 //20 is collapsing margin from __label-text in .slide-content css
},500);
*/
