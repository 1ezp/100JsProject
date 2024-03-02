let toggler = document.querySelector("#switch");

toggler.addEventListener("click",()=>{
    if(toggler.checked){
        document.body.style.backgroundColor = 'Black'; 
    }else{
        document.body.style.backgroundColor = 'White'; 
    }
})
