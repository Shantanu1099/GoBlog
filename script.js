const nav = document.querySelector(".toggleNavBar");
const navLinks = document.querySelector("nav_links");

nav.addEventListener('click', (event) => {
if(event.which){
    document.body.navLinks.style.display = block;
    event.which = 0;
}
else{
    navLinks.style.display = none;
}
});