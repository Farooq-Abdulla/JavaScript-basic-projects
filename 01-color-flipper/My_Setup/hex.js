let btn=document.querySelector('button');
let body=document.querySelector('body');
let it=document.querySelector('#color');
let colors=['A','B','C','D','E','F',0,1,2,3,4,5,6,7,8,9];
btn.addEventListener('click',()=>{
    let x=generatecolor();
    body.style.background=`#${x}`;
    it.innerText=x;


})

function generatecolor(){
    let ans='';
    for(let i=0;i<6;i++){
        ans=ans+colors[Math.floor(Math.random()*15)];
    }
    return ans;
    
}