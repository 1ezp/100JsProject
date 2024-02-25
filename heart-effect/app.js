
let gray_heart = document.querySelector('.gray-heart');
let red_heart = document.querySelector('.red-heart');

console.log(gray_heart);
console.log(red_heart);

gray_heart.addEventListener("click",()=>{
    gray_heart.classList.add("fill-color")
    red_heart.classList.add("anitmation");
})
red_heart.addEventListener("click",()=>{
    red_heart.classList.remove("anitmation");
    gray_heart.classList.remove("fill-color")

})
