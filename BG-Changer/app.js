
let btn = document.querySelector("#btn");
let code = document.querySelector(".Code");

function randomColor(){
    let l = "0123456789ABCDF"
    let color = "#"
    for(let i = 0;i<6;i++){
        color += l[Math.floor(Math.random() * 15)]
    }
    return color
}

btn.addEventListener("click",()=>{
    let c = randomColor();
    document.body.style.backgroundColor = c;
    code.innerHTML = c
})

code.addEventListener("click",()=>{
    navigator.clipboard.writeText(code.innerHTML);
    let c = code.innerHTML
    code.innerHTML = "Copied !!"
    setTimeout(()=>{
        code.innerHTML = c
    },1000)
})

