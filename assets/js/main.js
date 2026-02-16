/*===== MENU SHOW/HIDE =====*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* وظيفة الفتح */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show')
    })
}

/* وظيفة الإغلاق */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show')
    })
}

/* إغلاق القائمة عند الضغط على أي رابط */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL REVEAL =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text, .link__card', {}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', {delay: 400}); 
sr.reveal('.home__social-icon', { interval: 200}); 
sr.reveal('.skills__data, .work__vid', {interval: 200});