let hide = document.querySelector(".hide");
let btnYes = document.querySelector("#yes");

function run(){
    let btnNO = document.querySelector("#no");
    
    let winWidth = window.innerWidth;
    let winHeight = window.innerHeight;
    
    let x = winWidth - btnNO.offsetWidth;
    let y = winHeight - btnNO.offsetHeight;
    
    let randomX = Math.floor(Math.random()*x);
    let randomY = Math.floor(Math.random()*y);
    
    btnNO.style.left = randomX + "px";
    btnNO.style.top = randomY + "px";
}
const showmsg = () =>{
    hide.classList.remove("hide");
};


btnYes.addEventListener("click",showmsg);