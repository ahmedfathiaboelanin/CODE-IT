// select element
let select = document.getElementById("filter");
let search = document.querySelector(".searchInput");
let course = document.querySelectorAll(".courses >div");
let courseBtn = document.querySelectorAll(".item a");
let popup = document.querySelector(".popup");
let layer = document.querySelector(".layer");
let closePop = document.querySelector(".close");
let popCreator = popup.childNodes[3].children[2].children[1];
let popCImg = popup.childNodes[3].children[2].children[0];
let popDate = popup.childNodes[3].children[3];
let popList = document.querySelector(".popList");
let popBtn = document.getElementById("popBtn")
// ----------------------------------------------
// courses content
let front = {
  HTML: ["tags","comments","semantic","html5"],
  CSS: [],
  JavaScript: [],
  Bootstrap: [],
  Sass: [],
  Jquery: [],
  Angular: [],
  React: [],
  Vue: []
};
// filter by select
select.onchange = () => {
    for (let i = 0; i < course.length; i++){
        course[i].setAttribute("style","display:none")
            if (select.value === course[i].dataset.search) {
                course[i].setAttribute("style", "display:block");
            } else if (select.value === "all") {
                course[i].setAttribute("style", "display:block");
            }
        }
}
// -----------------------
for (let i = 0; i < courseBtn.length; i++){
    // console.log(courseBtn[i].parentElement.children[1].innerHTML)
}
// filter by search input
// --------------------------

// show and hide popup
for (let i = 0; i < courseBtn.length; i++){
    // remove all buttons href
    courseBtn[i].removeAttribute("href");

    // add click event to all buttons
    courseBtn[i].addEventListener("click", () => {
      // show popup with layer
      popup.setAttribute("style", "display:flex;");
      layer.setAttribute("style", "display:flex;");
      // get creator name from courseItem and assign it to popCreator
      popCreator.innerHTML =
        courseBtn[i].parentElement.children[4].childNodes[1].innerHTML;
      // get date from courseItem and assign it to popDate
      popDate.innerHTML = courseBtn[i].parentElement.children[3].innerHTML;
      // get img source from courseItem and assign it to popImg
      popCImg.src = courseBtn[i].parentElement.children[0].src;

      popBtn.href = `${courseBtn[i].parentElement.dataset.path}`;

    })
}
// close popup with layer
closePop.addEventListener("click", () => {
    popup.setAttribute("style", "display:none;");
    layer.setAttribute("style", "display:none;");
})
// ----------------------------------------