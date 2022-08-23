const sections=document.querySelectorAll('.section');
const secbtns=document.querySelectorAll('.buttons');
const secbtn=document.querySelectorAll('.button');
const All=document.querySelector('.main');

function Transitions(){
    for(let i=0; i<secbtn.length;i++){
        secbtn[i].addEventListener('click',function(){
            let btn=document.querySelectorAll('.active-btn');
            btn[0].className=btn[0].className.replace('active-btn','');
            this.className+=' active-btn';
        })
    }
    All.addEventListener('click',(event)=>{
        const id=event.target.dataset.id;
        if(id){
            secbtns.forEach ((btnn)=>{
                btnn.classList.remove('active')
            })
            event.target.classList.add('active')
            sections.forEach ((section)=>{
                section.classList.remove('active')
            })
            const emnt=document.getElementById(id);
            emnt.classList.add('active');
        }
    })
}

Transitions();

