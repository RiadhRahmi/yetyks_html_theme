/*-----------------------------------------------------------------------------------
 Theme Name: Yetyks
 Theme URI: http://themeforest.net/user/codimth
 Description: Yetyks - Personal Portfolio Template.
 Author: codimth
 Author URI: http://themeforest.net/user/codimth
 Version: 1.0
 -----------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------

 TABLE OF CONTENTS

 1 preloader
 2 stellar
 3 typed js
 4 fixed header
 5 scroll to
 6 add class active to menu
 7 smooth scroll
 8 progress bar
 9 portfolio filter
 10 magnific Popup
 11 testimonial carousel

 -----------------------------------------------------------------------------------*/

(function($) {
  "use strict";

  /*-------------------------------------
     preloader
     ----------------------------------------*/
  $(window).on("load", function() {
    $("#preloader").fadeOut(5000);
    $("#preloader").remove();
  });

  /*-------------------------------------
     stellar
     ----------------------------------------*/
  $(window).stellar();

  /*-------------------------------------
     typed js
     ----------------------------------------*/
  var element = $(".typejs");
  element.typed({
    strings: ["Alewn Babou."],
    typeSpeed: 100,
    loop: true
  });

  /*-------------------------------------
     fixed header
     ----------------------------------------*/
  var headerFixed = function() {
    var hd_height = $(".navbar-default").height();
    $(window).on("load scroll", function() {
      if ($(window).scrollTop() > hd_height + 30) {
        $(".navbar-default").addClass("nav-scroll");
      } else {
        $(".navbar-default").removeClass("nav-scroll");
      }
    });
  };
  headerFixed();

  /*-------------------------------------
     scroll To
     ----------------------------------------*/
  var aScroll = $('a[data-scroll="scrollTo"]');
  aScroll.on("click", function(event) {
    var target = $($(this).attr("href"));
    if (target.length) {
      event.preventDefault();
      $(".navbar-collapse")
        .removeClass("in")
        .addClass("collapse");
      $("html, body").animate(
        {
          scrollTop: target.offset().top
        },
        1000
      );
    }
  });

  /*-------------------------------------
     add class active to menu
     ----------------------------------------*/
  $("ul.navbar-nav li").on("click", function(event) {
    $("ul.navbar-nav li").removeClass("active");
    $(this).addClass("active");
  });

  /*-------------------------------------
     smooth scroll
     ----------------------------------------*/
  $(window).on("scroll", function() {
    $(".block").each(function() {
      if ($(window).scrollTop() > $(this).offset().top - 20) {
        var blockID = $(this).attr("id");
        $("ul.navbar-nav li").removeClass("active");
        $('ul.navbar-nav li a[href="#' + blockID + '"]')
          .parent()
          .addClass("active");
      }
    });
  });

  /*-------------------------------------
     progress bar
     ----------------------------------------*/
  var $skill = $(".skills"),
    $pBar = $(".progress-bar");
  if ($skill.length > 0) {
    $(window).scroll(function() {
      var skillsTop = $skill.offset().top - 100,
        skillsHight = $(this).outerHeight(),
        wScroll = $(window).scrollTop();
      if (wScroll > skillsTop - 1 && wScroll < skillsTop + skillsHight - 1) {
        $pBar.each(function() {
          $(this).width($(this).attr("aria-valuenow") + "%");
        });
      }
    });
  }

  /*-------------------------------------
     portfolio filter
     ----------------------------------------*/
  var $portfolioFilter = $(".portfolio-filter"),
    portfolioLength = $portfolioFilter.length,
    protfolioFinder = $portfolioFilter.find("a"),
    $portfolioAll = $("#portfolio-all");

  // init Isotope For Portfolio
  protfolioFinder.on("click", function(e) {
    e.preventDefault();
    $portfolioFilter.find("a.active-filter").removeClass("active-filter");
    $(this).addClass("active-filter");
  });
  if (portfolioLength > 0) {
    $portfolioAll.imagesLoaded().progress(function() {
      $portfolioAll.isotope({
        filter: "*",
        animationOptions: {
          duration: 750,
          itemSelector: ".portfolio-item",
          easing: "linear",
          queue: false
        }
      });
    });
  }
  protfolioFinder.on("click", function(e) {
    e.preventDefault();
    var $selector = $(this).attr("data-filter");
    $portfolioAll.imagesLoaded().progress(function() {
      $portfolioAll.isotope({
        filter: $selector,
        animationOptions: {
          duration: 750,
          itemSelector: ".portfolio-item",
          easing: "linear",
          queue: false
        }
      });
      return false;
    });
  });

  /*-------------------------------------
     magnific Popup
     ----------------------------------------*/
  var $imgPopup = $(".img-popup");
  $imgPopup.magnificPopup({
    type: "image"
  });

  /*-------------------------------------
     testimonial carousel
     ----------------------------------------*/
  var $testimonialCarousel = $("#testimonial-carousel");

  $testimonialCarousel.owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });


  
})(jQuery);
