import $ from 'jquery';

class MobileMenu {
  constructor() {
    this.menuBar = $(".menu-bar");
    this.menuIcon = $(".menu-bar__menu-icon");
    this.menuContent = $(".menu-bar__nav-container");
    this.listItems = document.querySelectorAll(".primary-nav li");
    this.events();
  }

  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu() {
    this.menuContent.toggleClass("menu-bar__nav-container--is-visible");
    this.menuBar.toggleClass("menu-bar--is-expanded");
    this.menuIcon.toggleClass("menu-bar__menu-icon--close-x");

    for(let i = 0 ; i < this.listItems.length ; i++) {
      let currentItem = this.listItems[i];
      setTimeout(function(){
        currentItem.classList.toggle("in-view");
      }, i*200);
    }
  }

}

export default MobileMenu;
