let tar = document.getElementById("header_content")
let ham = document.getElementById("hamburger")

ham.addEventListener("click",function(event){
    tar.classList.toggle("header_content_active")
});