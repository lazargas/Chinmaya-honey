// gsap.registerPlugin(ScrollTrigger);

let smoother = ScrollSmoother.create({
  smooth: 2,
  effects: true,
});


const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});




// var honeyImages = gsap.utils.toArray(".honey-image");
// honeyImage.addEventListener("mouseenter",()=>{
//       tl.play();
//     });
//     honeyImage.addEventListener("mouseleave",()=>{
//       tl.reverse();
//     });
// honeyImages.map((honeyImage,i)=>{
//   var tl = gsap.timeline();
//   tl.to(`honey-image`,{scale:1.2});
//  
// });
