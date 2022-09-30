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