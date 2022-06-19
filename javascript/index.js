
// when scrolled header gets class sticky and sticky is added prop]erty of box-shadow
window.addEventListener("scroll", function(){
    const header =document.querySelector("header")
    header.classList.toggle("sticky", window.scrollY>0)
});

// to one and close project
const portfolioModals =document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioClosedBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function (modalClick){
    portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) =>{
    imgCard.addEventListener("click", () => {
        portfolioModal(i);
    });
});

portfolioClosedBtns.forEach((portfolioClosedBtns) =>{
    portfolioClosedBtns.addEventListener("click", () =>{
        portfolioModals.forEach((portfolioModalView) =>{
            portfolioModalView.classList.remove("active");
        });
    });
});

// navigation menu
const menuBtn=document.querySelector(".nav-menu-btn");
const closeBtn=document.querySelector(".nav-close-btn");
const navigation=document.querySelector(".navigation");
const navItems =document.querySelectorAll(".nav-items a");



menuBtn.addEventListener("click",() =>{
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", ()=>{
    navigation.classList.remove("active");
});

navItems.forEach((navItem)=>{
    navItem.addEventListener("click", () =>{
        navigation.classList.remove("active");
    });
});
