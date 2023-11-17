let left=document.querySelector('#lessthan');
let right=document.querySelector('#greaterthan');
let img=document.querySelector('img');
let b=document.querySelector('b');
let j=document.querySelector('#webd');
let btn=document.querySelector('button');
let i=1;
obj={
    6:{
        id: 6,
        name: 'Peter Jones',
        job: 'intern',
        img: "person-6.avif",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius cupiditate reiciendis itaque nostrum ullam et, distinctio voluptatibus. Repellendus veritatis aliquid iure perspiciatis voluptatum. Libero repellat fuga incidunt magnam itaque amet!",
    },
    2:{
        id:2,
        name:'Bill Anderon',
        job: 'The Boss',
        img: 'person-4.jpeg',
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius cupiditate reiciendis itaque nostrum ullam et, distinctio voluptatibus. Repellendus veritatis aliquid iure perspiciatis voluptatum. Libero repellat fuga incidunt magnam itaque amet!"
    },
    3:{
        id:3,
        name:'Susan Smith',
        job: 'Web Developer',
        img: 'person-5.webp',
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius cupiditate reiciendis itaque nostrum ullam et, distinctio voluptatibus. Repellendus veritatis aliquid iure perspiciatis voluptatum. Libero repellat fuga incidunt magnam itaque amet!"
    },
    4:{
        id:4,
        name:'Christina Wallace',
        job: 'Senior Software Developer',
        img: 'person-2.jpeg',
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius cupiditate reiciendis itaque nostrum ullam et, distinctio voluptatibus. Repellendus veritatis aliquid iure perspiciatis voluptatum. Libero repellat fuga incidunt magnam itaque amet!"
    },
    5:{
        id:5,
        name:'Michael Sam',
        job: 'Intern',
        img: 'person-3.jpeg',
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius cupiditate reiciendis itaque nostrum ullam et, distinctio voluptatibus. Repellendus veritatis aliquid iure perspiciatis voluptatum. Libero repellat fuga incidunt magnam itaque amet!"
    },
    1:{
        id:1,
        name:'Anna Johanson',
        job: 'Web Designer',
        img: 'person-1.jpeg',
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius cupiditate reiciendis itaque nostrum ullam et, distinctio voluptatibus. Repellendus veritatis aliquid iure perspiciatis voluptatum. Libero repellat fuga incidunt magnam itaque amet!"
    }
};
// console.log(obj[1].img);
left.addEventListener('click',()=>{
    let num=leftClicked();
    img.setAttribute('src',obj[num].img);
    // console.log(obj[leftClicked()].img);
    b.innerText=obj[num].name;
    j.innerText=obj[num].job;


});
function leftClicked(){
    
    if(i===1){
        i=6;
    }else{
        i--;
    }
    return i;
};
right.addEventListener('click',()=>{
    let num=rightClicked();
    img.setAttribute('src',obj[num].img);
    // console.log(obj[leftClicked()].img);
    b.innerText=obj[num].name;
    j.innerText=obj[num].job;
});
function rightClicked(){
    if(i===6){
        i=1
    }else{
        i++;
    }
    return i;
};
btn.addEventListener('click',()=>{
    let num=randgen();
    img.setAttribute('src',obj[num].img);
    // console.log(obj[leftClicked()].img);
    b.innerText=obj[num].name;
    j.innerText=obj[num].job;
});
function randgen(){
    i=Math.floor(Math.random()*6)+1;
    return i;
}




