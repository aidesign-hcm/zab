// Login Form

$(".email-signup").hide();
$(".forgot-pass").hide();


$("#signup-box-link").click(function(){
  $(".email-login").fadeOut(100);
  $(".email-signup").delay(100).fadeIn(100);
});
$("#login-box-link").click(function(){
  $(".email-login").delay(100).fadeIn(100);
  $(".email-signup").fadeOut(100);
});

$("#forgot-box-link").click(function(){
  $(".email-login").fadeOut(100);
  $(".forgot-pass").delay(100).fadeIn(100);;
});

$("#login-box").click(function(){
  $(".forgot-pass").hide();
  $(".email-login").delay(100).fadeIn(100);
});

// Add Dropdown Menu

$('.dropdown-toggle').dropdown();
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// Add hieu ung carousule

$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 3,

      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

// Add Icon Feather

feather.replace();

// Add Khung soan thao

tinymce.init({
  selector: 'textarea#contentBox',
});

// Add menu scroll 


(function (window, document, undefined) {
  'use strict';
  // Select nav items that have submenus
  var hasSubmenu = document.querySelectorAll('[data-id]');
  var active = 'active';
  var i = 0;

  // Show the submenu by toggling the relevant class names
  function showSubmenu (event) {
    // We lose reference of this when filtering the nav items
    var self = this;

    // Select the relevant submenu, by the data-id attribute
    var submenu = document.getElementById(self.dataset.id);

    // Probably best to prevent clicks through
    event.preventDefault();

    // Referring to the submenu parentNode
    // find all elements that aren't the submenu and remove active class
    var otherSubmenu = Array.prototype.filter.call(
      submenu.parentNode.children, 
      function(child) {
        if ( child !== submenu ) {
          removeChildClass(child);
        }
      });

    // Referring to the the nav item parentNode
    // find all elements that aren't the submenu and remove active class
    var otherItem = Array.prototype.filter.call(
      self.parentNode.children, 
      function(child) {
        if ( child !== self ) {
          removeChildClass(child);
        }
      });

    self.classList.toggle(active);
    submenu.classList.toggle(active);
  }

  // Remove the active class
  function removeChildClass(el) {
    // Check if it exists, then remove
    if ( el.classList.contains(active) ) {
      el.classList.remove(active);
    }
  }

  // On clicks show submenus
  for ( i = 0; i < hasSubmenu.length; i++ ) {
    hasSubmenu[i].addEventListener('click', showSubmenu);
  }
})(window, document);

// Copy link

function copyFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}