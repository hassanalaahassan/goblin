const menu = document.querySelector('#menu-icon')
const navList = document.querySelector('.nav-list')
const heroText = document.querySelector('.hero-text')
const heroImg = document.querySelector('.hero-img')
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.remove('translate-right')
            entry.target.classList.remove('translate-left')
            observer.unobserve(entry.target);
        }
    })
},{
    rootMargin:'-40px'
})
const aboutText = document.querySelectorAll('.about-text')
const aboutImage = document.querySelectorAll('.about-img')

aboutText.forEach((text)=>{
    observer.observe(text)
})
aboutImage.forEach((image)=>{
    observer.observe(image)
})
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
