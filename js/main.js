$(function () {
  $(".menu_btn_bars").click(function () {
    $("body").css("overflow", "hidden");
    $(".menu_ul").css("transform", "translateY(-5%)");
  });
  $(".menu_btn_close").click(function () {
    $("body").css("overflow", "auto");
    $(".menu_ul").css("transform", "translateY(-107%)");
  });

  let link = $(".menuItem");

  link.on("click", function (e) {
    e.preventDefault();
    let selector = $(this).addClass("active").attr("href");
    let target = $(selector);
    $("html, body").animate({ scrollTop: target.offset().top - 120 }, 1000);
    if ($(window).width() < 767) {
      $(".menu_ul").css("transform", "translateY(-107%)");
      $("body").css("overflow", "auto");
    }
  });
});

const swiper = new Swiper(".swiper-container", {
  loop: true,
  spaceBetween: 30,
  slidesPerGroup: 1,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
  },
});
