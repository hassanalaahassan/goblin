const menu = document.querySelector('#menu-icon')
const navList = document.querySelector('.nav-list')
const heroText = document.querySelector('.hero-text')
const heroImg = document.querySelector('.hero-img')
menu.onclick=()=>{
    menu.classList.toggle('bx-x')
    navList.classList.toggle('open')    
}
window.onload = ()=>{
    setTimeout(() => {
            heroText.classList.remove('showdown')
    }, 500);
    setTimeout(()=>{
        heroImg.classList.remove('showdown')
    },700)
}