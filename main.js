const menu = document.querySelector('#menu-icon')
const navList = document.querySelector('.nav-list')
console.log(menu,navList);
menu.onclick=()=>{
    menu.classList.toggle('bx-x')
    navList.classList.toggle('open')    
}
