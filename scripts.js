const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.transform = `translate(${e.clientX - 15}px, ${
    e.clientY - 15
  }px)`;
});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".content1", {
  scrollTrigger: {
    trigger: ".content1",
    start: "top 70%",
    end: "top 20%",
    toggleActions: "play none none reverse",
    scrub: true,
  },
  opacity: 1,
  filter: "blur(0px)",
  duration: 10,
});

var covers = document.querySelectorAll(".img-cover");

gsap.defaults({overwrite: "auto"});

gsap.to(covers, {
  scrollTrigger: {
    trigger: covers,
    start: "top 70%",
    end: "top 10%",
    scrub: true,
  },
  y: -200,
  opacity: 1,
  stagger: 2,
  duration: 10,
});


gsap.to(".title", {
  scrollTrigger: {
    trigger: ".title",
    start: "top 71%",
    scrub: 1,
  },
  x: "-100%",
});

const splitTypes = document.querySelectorAll(".title");

splitTypes.forEach((char) => {
  const text = new SplitType(char, { types: "chars" });

  gsap.from(text.chars, {
    y: 500,
    duration: 1,
    stagger: 0.05,
  });
});
