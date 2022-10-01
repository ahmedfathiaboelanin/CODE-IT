let select = document.getElementById("filter");
let search = document.querySelector(".searchInput");
let course = document.querySelectorAll(".courses >div");
console.log(course);
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
// filter by search input
