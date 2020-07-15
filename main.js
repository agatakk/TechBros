const burger = document.querySelector('.menu-hamburger');
const navList = document.querySelector('.main-menu');
const menuItems = document.querySelectorAll('.main-menu__menu-item');


const navSlideIn = function(){
    navList.classList.toggle('nav-active');
    console.log('click');
    menuItems.forEach((link, index)=>{
        if(link.style.animation){
            link.style.animation = '';
        }else{
            link.style.animation = `navLinksFade .3s ease forwards ${index / 7 + 0.3}s`;
        }
    })
    
}

burger.addEventListener('click', navSlideIn);