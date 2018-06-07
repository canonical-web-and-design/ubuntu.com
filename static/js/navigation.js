var navDropdowns = document.querySelectorAll('.p-navigation__dropdown-link');
var dropdownWindow = document.querySelector('.dropdown-window');
var dropdownWindowOverlay = document.querySelector('.dropdown-window-overlay');
var closeMenuLink = document.querySelector('.p-navigation__toggle--close');
var navigationThresholdBreakpoint = 900;

var globalNav = document.querySelector('.global-nav');
var globalNavDropdown = document.querySelector('.global-nav__link--dropdown');
var globalNavContent = document.querySelector('.global-nav__dropdown-content');

globalNavDropdown.addEventListener('click', function(event) {
  event.stopPropagation();
  globalNavDropdown.classList.toggle('is-selected');
  globalNavContent.classList.toggle('u-hide');

  if (window.innerWidth < navigationThresholdBreakpoint) {
    window.scrollTo(0, globalNav.offsetTop);
  }
});

document.addEventListener('click', function(event) {
  if (globalNavDropdown.classList.contains('is-selected')) {
    var clickInsideGlobal = globalNav.contains(event.target);

    if (!clickInsideGlobal) {
      globalNavDropdown.classList.remove('is-selected');
      globalNavContent.classList.add('u-hide');
    }
  }
});

closeMenuLink.addEventListener('click', function(event) {
  navDropdowns.forEach(function(dropdown) {
    var dropdownContent = document.getElementById(dropdown.id + "-content");

    if (dropdown.classList.contains('is-selected')) {
      closeMenu(dropdown, dropdownContent);
    }
  });
});

function closeMenu(dropdown, dropdownContent) {
  dropdown.classList.remove('is-selected');
  dropdownWindow.classList.add('fade-animation');
  dropdownWindowOverlay.classList.add('fade-animation');
  dropdownContent.classList.add('fade-animation');
}
