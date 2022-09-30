// select nav
let nav = document.querySelector("nav");
// scroll nav animation
window.onscroll = function navChange() {
  console.log(window.scrollY);
  if (window.scrollY >= 67) {
    nav.setAttribute(
      "style",
      "background-color:#060807; padding:0 !important;"
    );
  } else {
    nav.setAttribute("style", "background-color:none");
  }
};
// ---------end vav transform
// btn scroll
let landingBtn = document.getElementById("landing-btn");
landingBtn.onclick = () => {
  window.scrollTo(0, 650);
};
// owl carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 1,
      nav: false,
    },
    1000: {
      items: 3,
      nav: true,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
    },
  },
});
