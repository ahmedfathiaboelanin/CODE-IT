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
// ----------------------------------------------

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
// ------------------------

// filter by search input
// --------------------------

// show and hide popup
for (let i = 0; i < courseBtn.length; i++){
    courseBtn[i].removeAttribute("href")
    courseBtn[i].addEventListener("click",() => {
        popup.setAttribute("style", "display:flex;")
        popCreator.innerHTML = courseBtn[i].parentElement.children[4].childNodes[1].innerHTML;
        popDate.innerHTML = courseBtn[i].parentElement.children[3].innerHTML;
        popCImg.src = courseBtn[i].parentElement.children[0].src;
        layer.setAttribute("style","display:flex;")
    })
}
closePop.addEventListener("click", () => {
    popup.setAttribute("style", "display:none;");
    layer.setAttribute("style", "display:none;");
})
// ----------------------------------------