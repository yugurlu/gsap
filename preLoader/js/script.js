document.addEventListener("DOMContentLoaded", function () {
  const progress = document.querySelector(".pace-progress");
  const preloader = document.querySelector(".preloader");
  const wrapper = document.querySelectorAll(".element");
  const header = document.querySelectorAll(".header");

  gsap.to(progress, {
    width: "400px",
    duration: 3,
    delay: 1,
    onComplete() {
      gsap.to(wrapper, {
        filter: "blur(20px)",
        duration: 1,
      });
      gsap.to(preloader, {
        y: -1000,
        delay: 0.5,
      });
      gsap.from(header, {
        filter: "blur(20px)",
        delay: 1,
      })
    },
  });
});
