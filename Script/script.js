/* ------- SCRIPT NAV BAR FUNCTION ------- */
function myMenuFunction(){
    let menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}
/* ----- ADD SHADOW ON NAV BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
    const navHeader = document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 1px 8px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}
/* ----- TYPING EFFECT ----- */
let typingEffect = new Typed(".typeText",{
    string : [],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 2000
})

/* -----# SCROLLING ANIMATION #----- */
const sr = ScrollReveal({
      origin = 'top',
      distance = '80px',
      duration = 2000,
      reset = true
})
/* ----- HOME ----- */
sr.reveal('.style-text-box',{})
sr.reveal('.style-text-name',{delay: 100})
sr.reveal('.style-text-caption',{delay: 200})
sr.reveal('.style-text-btn',{delay: 200})
sr.reveal('.social-icon',{delay: 200})
sr.reveal('.style-image',{delay: 300})

/* ----- Project Box ----- */
sr.reveal('.col-project',{interval: 200})

/* ----- Heading ----- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */

const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srleft.reveal('.profil-info',{delay: 100})
srleft.reveal('.kontak-info',{delay: 100})

/* -- Skill & Kontak Info -- */

const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srleft.reveal('.skill-box',{delay: 100})
srleft.reveal('.form-card',{delay: 100})

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)
