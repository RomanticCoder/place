const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener("click",(e)=>{
    const filter = e.target.dataset.filter;
    if(!filter){
        return;
    }
    projectContainer.classList.add('anim-out');

    const categoryBtns = document.querySelectorAll(".category__btn");
    categoryBtns.forEach((btn)=>{
        btn.classList.remove("selected");
    })
    e.target.classList.add("selected");

    setTimeout(()=>{
        projects.forEach((project)=>{
            const type = project.dataset.type;
            if(filter === '*' || type.includes(filter)){
                project.classList.remove('invisible');
            }else{
                project.classList.add('invisible');
            }
        })
        projectContainer.classList.remove('anim-out');

    },300)

})

// !!! should be changed : scroll > 
const skills = document.querySelector("#skills");
const bar = document.querySelectorAll(".skill_value");
skills.addEventListener("mouseenter",()=>{
  bar.forEach((b)=>{

    b.style.height = b.innerText;
  })
})

const navbar = document.querySelector(".navbar__menu");
navbar.addEventListener("click",(e)=>{
    const target =  e.target;
    if(target.nodeName != 'LI' && target.nodeName != 'A'){
        return;
    }
    const lis = document.querySelectorAll(".navbar__menu__item");

    lis.forEach((li)=>{
        li.classList.remove("highlighted");
    })
    target.closest("li").classList.add("highlighted");

})