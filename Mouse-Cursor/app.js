let cursor = document.querySelector(".cursor")


document.addEventListener("mousemove",(event)=>{
    moveCursor(event.pageX,event.pageY)
})


let moveCursor = function(pageX,pageY){
    cursor.style.left = pageX + "px";
    cursor.style.top = pageY  + "px"
}

