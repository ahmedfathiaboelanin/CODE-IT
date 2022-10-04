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
let popBtn = document.querySelector(".btn")
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
    console.log(courseBtn[i].parentElement.children[1].innerHTML)
}
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
        let courseContent = courseBtn[i].parentElement.children[1].innerHTML;
        let catContent =
          courseBtn[i].parentElement.parentElement.parentElement.parentElement
                .parentElement.parentElement.parentElement.dataset.search;
        popBtn.href = `${courseBtn[i].parentElement.dataset.path}`
        for (let j = 0; j < courseContent.size; j++){
            let list = document.createElement("li");
            let listContent = document.createTextNode(`${catContent.courseContent[j]}`)
            list.appendChild(listContent);
            popList.appendChild(list)
        }
        layer.setAttribute("style","display:flex;")
    })
}
closePop.addEventListener("click", () => {
    popup.setAttribute("style", "display:none;");
    layer.setAttribute("style", "display:none;");
})
// ----------------------------------------