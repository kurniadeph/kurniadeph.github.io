/* ------- SCRIPT NAV BAR FUNCTION ------- */
function myMenuFunction(iconX){
    iconX.classList.toggle('changeX');
    let menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.className == "nav-menu") {
        menuBtn.className += " responsive"
    } else {
        menuBtn.className = "nav-menu"
    }
};
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
};
/* ----- TYPING EFFECT ----- */
let typingEffect = new Typed(".typeText",{
    string : [],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 2000
});

/* ----- CHANGE ACTIVE LINK ----- */
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
  const scrollY = window.scrollY;

  sections.forEach( current => {
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
    } else {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  });
};
window.addEventListener('scroll', scrollActive)

/* ----- Animations Scroll ----- */
const sr = ScrollReveal({
  origin: 'top',
  distance: '85px',
  duration: 2500,
  //delay: 100,
  reset: true
})

sr.reveal(`.image`, {reset: false})
sr.reveal('.style-text-name', {delay: 400, origin: 'left', interval: 200})
sr.reveal('.style-text-lead', {reset: false})
sr.reveal('.style-text-caption', {reset: false})
sr.reveal('.social-icon', {delay: 200, reset: false, distance: "30px"})
sr.reveal('.top-header', {reset: false})
sr.reveal('.profil-info', {delay: 200})
sr.reveal('.skill-header', {delay: 200, reset: false})
//sr.reveal('.skill-list', {delay: 200, distance: '60px', interval: 200})
sr.reveal('.skill-list p', {easing: 'ease-in-out', interval: 50})
sr.reveal('.form-btn', {delay: 300, distance: "25px"})

/* ----- Animations Reveal Left ----- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})
srLeft.reveal('.style-text-name', {delay: 400, interval: 200})
srLeft.reveal('.style-text-btn, .btn color-btn', {delay: 200, distance: '100px', interval: 900})
srLeft.reveal(".conten-work, .l1", {delay: 100})
srLeft.reveal(".kontak-info", {delay: 100, reset: false})

/* ----- Animations Reveal Right ----- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.style-text-btn, .btn', {delay: 100})
srRight.reveal(".conten-work, .r1", {delay: 100})
srRight.reveal(".form-card", {delay: 200, reset: false})
