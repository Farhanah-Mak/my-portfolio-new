//opening and closing of the menu

const menuBtn= document.querySelector('.menu-btn')
const menu= document.querySelector('.menu')
const closeBtn= document.querySelector('.close-button')
const links= document.querySelectorAll('.link')
menuBtn.addEventListener('click', ()=>{
    menu.classList.add('active')
    
})
closeBtn.addEventListener('click', ()=>{
    menu.classList.remove('active')
    
})
links.forEach(link=>{
    link.addEventListener('click',()=>{
        menu.classList.remove('active')
    })
})


// sticky navbar

const navBar= document.querySelector('.navbar')
console.log(navBar.offsetTop)

window.addEventListener('scroll', ()=>{
    if(window.scrollY > navBar.offsetHeight){
        navBar.classList.add('sticky')
    }else{
        navBar.classList.remove('sticky')
    }
})


// const toggle= document.getElementById('toggle-btn')
// toggle.addEventListener('change',()=>{
//     document.body.classList.toggle('dark')
// })