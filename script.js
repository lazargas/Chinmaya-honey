gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
  smooth: 2, // how long (in seconds) it takes to "catch up" to the native scroll position
  effects: true, // looks for data-speed and data-lag attributes on elements
  smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});

gsap.from(".text", { opacity: 0 }, "a");

var tl = gsap.timeline({
  ease: "expo.out",
  scrollTrigger: {
    trigger: ".text",
    // markers:true,
    start: "top top",
    end: "bottom top",
    scrub: 2,
  },
});
tl.to(".text", { opacity: 0 }, "a");

var tl1 = gsap.timeline();
var buyButton = document.querySelector(".buy-now");
tl1.to(".buy-now", { background: "#20201e",color:"#fff" });
tl1.pause();
buyButton.addEventListener("mouseenter", () => {
    tl1.play();
  });
buyButton.addEventListener("mouseleave", () => {
    tl1.reverse();
  });


  var tl2 = gsap.timeline({
    ease: "expo.out",
    scrollTrigger: {
      trigger: ".section-2",
      //  markers:true,
      start: "top top",
      end: "20% top",
      scrub: 2,
    },
  });

tl2.to(".section-2-heading",{opacity:0},'s').to(".section-2-grid",{opacity:0},'s'); 

var tl3 = gsap.timeline({
  ease: "expo.out",
  scrollTrigger: {
    trigger: ".section-2",
    // markers:true,
    start: "75% 50%",
    end: "120% 50%",
    scrub: 2,
    pin:true
  },
});

tl3.from(".card-1",{opacity:0},'a').from(".card-2",{opacity:0},'b').from(".card-3",{opacity:0},'c').from(".card-4",{opacity:0},'d');