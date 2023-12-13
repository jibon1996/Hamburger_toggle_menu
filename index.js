const humbarger = document.querySelector(".humbarger");
const navMenu = document.querySelector(".nav-menu");
const navItems = document.querySelectorAll(".nav-item");
const navLinks = document.querySelectorAll(".nav-link");

// open and close menu humbarger 
humbarger.addEventListener("click", ()=> {
    humbarger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
// click menu item to close menubar 
navLinks.forEach(link => {
    link.addEventListener("click", ()=> {
        humbarger.classList.remove("active");
        navMenu.classList.remove("active");
        // menu items click active & remove 
        document.querySelector(".active")?.classList.remove("active");
        link.classList.add("active");
    })
})




