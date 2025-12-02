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


  const words = ["Front-end Developer", "UI Designer"];
  const typingElement = document.querySelector(".typing");
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentWord = words[wordIndex];
    const displayed = currentWord.substring(0, charIndex);
    typingElement.textContent = displayed;

    if (!isDeleting && charIndex < currentWord.length) {
      charIndex++;
      setTimeout(typeEffect, 120);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, 60);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeEffect, 1000);
    }
  }

typeEffect();