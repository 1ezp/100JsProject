let btn = document.querySelector("#emoji");

const emojies = [
    "😁",
    "🤩",
    "💀",
    "💻",
    "😂",
    "😎",
    "🏫",
    "👋",
    "😍",
    "😊",
]

btn.addEventListener("mouseover",()=>{
    btn.innerHTML = emojies[Math.floor(Math.random()*emojies.length)]
})