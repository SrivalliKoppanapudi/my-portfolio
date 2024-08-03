const linksEl=document.querySelector(".links-toggle");
const iconEl=document.querySelector("#icon i");
const submitEl=document.getElementById("s-btn");
const imgEl=document.querySelector(".prof1");
iconEl.onclick=()=>{
   // linksEl.classList.toggle("links-toggle")
    linksEl.classList.toggle("active")
    iconEl.classList.toggle("fa-x")
    header.classList.toggle("sticky");

}
linksEl.onclick=()=>{
    linksEl.classList.toggle("active")
    iconEl.classList.toggle("fa-x")
}
var typed=new Typed(".text",{
    strings:["WEB DEVELOPER","FRONTEND EXPERTISE"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})
const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 50);

});
