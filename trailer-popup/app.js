

let btn = document.querySelector(".btn")
let closeIcon = document.querySelector(".close-icon")
let trailerContainer = document.querySelector(".trailer-container")
let video = document.querySelector("video")

btn.addEventListener("click",()=>{
    trailerContainer.classList.remove("active")
})
closeIcon.addEventListener("click",()=>{
    trailerContainer.classList.add("active")
    video.pause();
})

