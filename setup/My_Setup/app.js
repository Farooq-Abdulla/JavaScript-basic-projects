let btn=document.querySelector('button');
let body=document.querySelector('body');
let it=document.querySelector('#color');
let colors=['Red','Green','Blue','Yellow','Pink','White']
btn.addEventListener('click',()=>{
    let x=colors[Math.floor(Math.random()*6)];
    body.style.background=x;
    it.innerText=x;


})