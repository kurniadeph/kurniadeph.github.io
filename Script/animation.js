let tl = gsap.timeline();

tl.from(".image", {duration: 1.5, opacity: 0, scale: 0.3, ease:"back"});
tl.to(".image", {duration: 1, ease: "bounce"});

gsap.from('.conten-work li', {
  duration: 1,
  opacity: 0,
  x: "random(-200, 200)",
  stagger: 0.15
});
// gsap.registerPlugin(scrollTrigger);
// 
// gsap.to('.profil-info h3 p', {
//   scrollTrigger: '.profil-info h3 p',
//   x: 400,
//   rotation: 360,
//   duration: 1
// });