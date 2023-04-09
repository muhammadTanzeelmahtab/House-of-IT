
let navTab1 = document.querySelector("#nav-tab-02");
let navTab2 = document.querySelector("#nav-tab-03");
let navTab3 = document.querySelector("#nav-tab-04");
// let roadmap = document.querySelector("#nav-tab");
// let content = document.querySelectorAll(".roadmap-content")

// let arr = Array.from(content);

const classCheck1 = (e) => {
    if(e.target.classList.value.includes("active")){
        removeClass2();
        removeClass3();
    }
}
const classCheck2 = (evt) => {
    if(evt.target.classList.value.includes("active")){
        removeClass1();
        removeClass3();
    }
}
const classCheck3 = (evt2) =>{
    if(evt2.target.classList.value.includes("active")){
        removeClass1();
        removeClass2();
    }
}
const removeClass1 = () =>{
    for (let i=0;i<navTab1.children.length;i++){
        navTab1.children[i].classList.remove("active")
    }
}
const removeClass2 = () =>{
    for (let i=0;i<navTab2.children.length;i++){
        navTab2.children[i].classList.remove("active")
    }
}
const removeClass3 = () =>{
    for (let i=0;i<navTab3.children.length;i++){
        navTab3.children[i].classList.remove("active")
    }
}
// const hoverEffect = (evt3) =>{
//     if(evt3.target.classList.value.includes("active") !== true){
//         for (let i=0;i<roadmap.children.length;i++){
//             roadmap.children[i].classList.remove("active")
//             roadmap.children[i].setAttribute("aria-selected", "false");
//             arr.forEach((items)=>{
//                     items.classList.remove("show")
//                     setTimeout(()=>{
//                         items.classList.remove("active")
//                 },500)
//             })
//         }
//         evt3.target.classList.add("active");
//         evt3.target.setAttribute("aria-selected", "true");
//         let attr = evt3.target.getAttribute("data-bs-target");
//         if(attr !== ""){
//             const itemToken = document.querySelector(attr);
//                 setTimeout(()=>{
//                     itemToken.classList.add("active")
//                 },500)
//             itemToken.classList.add("show")
//         }
//     }
// }

$("#nav-tab button").mouseover(function() {
    $(this).trigger('click');
  });


navTab1.addEventListener("click", classCheck1);
navTab2.addEventListener("click", classCheck2);
navTab3.addEventListener("click", classCheck3);
// roadmap.addEventListener("mouseover", hoverEffect);



