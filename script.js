const btnLeft = document.querySelector(".left-btn");

const btnRight = document.querySelector(".right-btn");

const tabMenu = document.querySelector(".tab-menu");

const IconVisibility = () => {
    let scrollLeftValue = Math.ceil(tabMenu.scrollLeft);
    console.log("1.", scrollLeftValue);
    let scrollableWidth = tabMenu.scrollwidth - tabMenu.clientWidth;
    console.log("2.", scrollableWidth);


    btnLeft.style.display = scrollLeftValue > 0 ? "block": "none"; 
    btnRight.style.display = scrollablewidth > scrollLeftValue ? "block" : "none"

}

btnRight.addEventListener("click", () => {
tabMenu.scrollLeft += 150;
//IconVisibility();
setTimeout(() => IconVisibility(), 50);

});

btnLeft.addEventListener("click", () => {
tabMenu.scrollLeft -= 150;
//IconVisibility();
setTimeout(() => IconVisibility(), 50);
});

window.onload = function(){
    btnRight.style.display = tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth >= window.innerWidth ? "block" : "none"
    btnLeft.style.display = tabMenu.scrollWidth >= window.innerWidth ? "" : "none";
}

window.onresize = function(){
    btnRight.style.display = tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth >= window.innerWidth ? "block" : "none"
    btnLeft.style.display = tabMenu.scrollWidth >= window.innerWidth ? "" : "none";

    let scrollLeftValue = Math.round(tabMenu.scrollLeft);
    btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
}

let activeDrag = false;

tabMenu.addEventListener("mousemove", (drag) => { 
    if(!activeDrag) return; 
    tabMenu.scrollLeft -= drag.movementX;
    IconVisibility();
   

});

document.addEventListener("mouseup", () => {
    activeDrag = false;
   

})

tabMenu.addEventListener("mousedown", () => { 
    activeDrag = true; 
});


const tabs = document.querySelectorAll(".tab"); 
const tabBtns= document.querySelectorAll(".tab-btn");

const tab_Nav = function(tabBtnClick){
    tabBtns.forEach((tabBtn) => {
        tabBtn.classList.remove("active");
    });

    tabs.forEach((tab) =>{
        tab.classList.remove("active");
    })

tabBtns[tabBtnClick].classList.add("active"); 
tabs[tabBtnClick].classList.add("active"); }

tabBtns.forEach((tabBtn, i) => { tabBtn.addEventListener("click", () => {

tab_Nav(i);

});

});



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//Loader

const preLoader=document.querySelector("#loading");
function preLoad(){
    preLoader.style.display='none';
}

//Slider
