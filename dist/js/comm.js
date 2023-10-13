// 1
gsap.to(".marquee-track.l h1", {
  scrollTrigger: {
    trigger: ".marquee-track.l h1",
    start: "top bottom",
    end: "400% top",
    scrub: 0.6,
  },
  xPercent: 25,
  duration: 3,
  ease: "linear",
});

gsap.to(".marquee-track.r h1", {
  scrollTrigger: {
    trigger: ".marquee-track.r h1",
    end: "bottom top",
    scrub: 0.6,
  },
  xPercent: -25,
  duration: 3,
  ease: "linear",
});

// 2
gsap.set(".marquee-track-2", {
  rotation: (index) => Math.PI * (index + 1) * 45,
  transformOrigin: "center",
});

gsap.to(".marquee-track-2.l h1", {
  scrollTrigger: {
    trigger: ".marquee-2",
    endTrigger: ".marquee-2",
    scrub: 0.6,
  },
  xPercent: 25,
  duration: 3,
  ease: "linear",
});

gsap.to(".marquee-track-2.r h1", {
  scrollTrigger: {
    trigger: ".marquee-2",
    endTrigger: ".marquee-2",
    scrub: 0.6,
  },
  xPercent: -25,
  duration: 3,
  ease: "linear",
});

// 3
gsap.set(".callout-col", { opacity: 0, yPercent: (index) => index * 20 });

gsap.to(".callout-col", {
  scrollTrigger: {
    trigger: ".callout",
    start: "top bottom",
    end: "50% 75%",
    scrub: 0.6,
  },
  opacity: 1,
  duration: 3,
  stagger: 0.6,
  ease: "linear",
});

gsap.to(".callout-col", {
  scrollTrigger: {
    trigger: ".callout",
    start: "top bottom",
    end: "center center",
    scrub: 0.6,
  },
  yPercent: 0,
  duration: 3,
  ease: "linear",
});

// 4
gsap.registerPlugin(ScrollTrigger);
const scroll_panels = gsap.utils.toArray(
  ".horizontal-scroll .horizontal-panel"
);
const pin_panels = gsap.utils.toArray(".horizontal-pin .horizontal-panel");

gsap.to(scroll_panels, {
  xPercent: -100 * (scroll_panels.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-scroll",
    pin: true,
    scrub: 0.6,
    end: () =>
      "+=" +
      document.querySelector(".horizontal-scroll").offsetWidth *
        scroll_panels.length,
  },
});

pin_panels.forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    pin: true,
    pinSpacing: false,
    start: "top top",
  });
});
