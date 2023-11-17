let num= document.querySelector('.number');
let decrease=document.querySelector('#low');
let reset=document.querySelector('#reset');
let increase=document.querySelector('#high');
decrease.addEventListener('click',()=>{
    num.innerText=num.innerText-1;
})
reset.addEventListener('click',()=>{
    num.innerText=0;
})
increase.addEventListener('click',()=>{
    num.innerText++;
})