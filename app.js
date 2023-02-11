let textWrapper = document.querySelector(".loader-text");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

gsap.from(".loader-wrapper", 2, {
  scale: 0.8,
  ease: "power1.inOut",
});

gsap.from(".loader", 2, {
  top: "100%",
  ease: "power3.inOut",
});

gsap.to(
  ".loader-wrapper, .pre-loader",
  1,
  {
    scale: 1.5,
    opacity: 0,
    display: "none",
    ease: "power3.inOut",
    delay: 2,
  },
  "-=1"
);

gsap.from(".revealer", 1, {
  width: "0",
  ease: "power3.inOut",
  delay: 3,
});

gsap.to(".revealer", 0.8, {
  left: "100%",
  ease: "power3.inOut",
  delay: 4,
});

gsap.to(".loader-text-wrapper", 0.2, {
  opacity: 0,
  display: "none",
  ease: "power3.inOut",
  delay: 4,
});

gsap.from(".col-left", 1, {
  left: "-100%",
  ease: "power3.inOut",
  delay: 4.5,
});

gsap.from(".col-left .copy > div", 1.5, {
  x: -40,
  opacity: 0,
  ease: "power3.inOut",
  delay: 5,
  stagger: {
    amount: 0.3,
  },
});

gsap.from(".col-right .header", 1, {
  x: -20,
  opacity: 0,
  ease: "power3.inOut",
  delay: 5.5,
});
