const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  const totatlSlides = 4;
  const sectionHeight =
    (document.body.scrollHeight - window.innerHeight) / totatlSlides;
  const slides = document.querySelectorAll(".slide");
  
  slides.forEach((slide, index) => {
    gsap.fromTo(
      slide,
      {
        scale: index === 0 ? 1 : 0,
      },
      {
        scale: 1,
        scrollTrigger: {
          start: sectionHeight * index + " top",
          end: sectionHeight * (index + 1) + " top",
          scrub: 1,
        },
      }
    );
  });
});
