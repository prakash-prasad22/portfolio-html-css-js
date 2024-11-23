//Typing Animation
var typed = new Typed(".typing" , {
    strings:["Web Developer" , "Android Developer" , "UI/UX Designer"],
    typeSpeed:200,
    BackSpeed:60,
    loop:true
})


//Dark - Light Theme Switcher
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click",()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})

window.addEventListener("load", ()=>{

    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.toggle("fa-sun");
    }else{
        dayNight.querySelector("i").classList.toggle("fa-moon");
    }
})

