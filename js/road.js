window.onload = () => {
  document.querySelector(".preloader").setAttribute("style", "display:none");
};
let course = document.querySelectorAll(".courses >div");
let courseBtn = document.querySelectorAll(".item a");
let popup = document.querySelector(".popup");
let layer = document.querySelector(".layer");
let closePop = document.querySelector(".close");
let popImg = document.getElementById("mapImg");


for (let i = 0; i < courseBtn.length; i++) {
  // remove all buttons href
  courseBtn[i].removeAttribute("href");

  // add click event to all buttons
  courseBtn[i].addEventListener("click", () => {
    // show popup with layer
    popup.setAttribute("style", "display:flex;");
    layer.setAttribute("style", "display:flex;");
    popImg.src = courseBtn[i].parentElement.dataset.path;
  });
}
// close popup with layer
closePop.addEventListener("click", () => {
  popup.setAttribute("style", "display:none;");
  layer.setAttribute("style", "display:none;");
});
// ----------------------------------------
