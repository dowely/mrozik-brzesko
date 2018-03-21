import $ from 'jquery';

class MobileMenu {
  constructor() {
    this.menuBar = $(".menu-bar");
    this.menuIcon = $(".menu-bar__menu-icon");
    this.menuContent = $(".menu-bar__nav-container");
    this.events();
  }

  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu() {
    this.menuContent.toggleClass("menu-bar__nav-container--is-visible");
    this.menuBar.toggleClass("menu-bar--is-expanded");
  }
}

export default MobileMenu;
