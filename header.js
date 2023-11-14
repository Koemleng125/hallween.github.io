
let leng = document.getElementById("leng");
window.onclick = function(event){
    if(event.target == leng){
      leng.style.opacity="0";
    }
}
let menu = document.querySelector('.navbar');
document.querySelector('#btnbar').onclick = () =>{
    menu.classList.toggle('active');
}