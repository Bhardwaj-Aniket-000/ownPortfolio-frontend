gsap.from(".main_header", {
  scale: 0.2,
  x: -300,
  background: "#1685A9",
  duration: 1,
});
gsap.from(".emp_name", {
  scale: 0.2,
  x: -700,
  duration: 1,
  opacity: 0,
  delay: 0.5,
});
// scrollTrigger
gsap.from(".emp_name", {
  scale: 6,
  duration: 1,
  // delay: 0.5,
  scrollTrigger: {
    trigger: ".emp_name",
    scroller: "body",
    scrub: 1,
  },
});

gsap.from(".side_links li", {
  scale: 0.2,
  x: 300,
  duration: 0.9,
  delay: 1,
  stagger: 0.2,
});
// scrollTrigger
gsap.from(".side_links li", {
  // scale: 2,
  y: 50,
  duration: 0.9,
  delay: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".side_links li",
    scroller: "body",
    scrub: 1,
  },
});
// scrollTrigger
gsap.from(".header_phone ", {
  // scale: 2,
  x: -1000,
  duration: 0.9,
  delay: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".header_phone",
    scroller: "body",
    scrub: 1,
  },
});
// scrollTrigger
gsap.from(".header_whatsapp ", {
  // scale: 2,
  x: 1000,
  duration: 0.9,
  delay: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".header_whatsapp",
    scroller: "body",
    scrub: 1,
  },
});
gsap.from(".center_logo", {
  scale: 0.5,
  duration: 1.5,
});
// scrollTrigger
gsap.from(".center_logo", {
  scale: 1.5,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".center_logo",
    scroller: "body",
    scrub: 1,
  },
});
// scrollTrigger
gsap.from(".news_parent", {
  x: 1000,
  duration: 1,
  scrollTrigger: {
    trigger: ".news_parent",
    scroller: "body",
    start: "top center",
    end: "bottom center",
    scrub: 1,
  },
});
// scrollTrigger
gsap.from(".chat_parent", {
  x: -1000,
  duration: 1,
  scrollTrigger: {
    trigger: ".chat_parent",
    scroller: "body",
    start: "top center",
    end: "bottom center",
    scrub: 1,
  },
});
// scrollTrigger
gsap.from(".harigurus_parent", {
  x: 1000,
  duration: 1,
  scrollTrigger: {
    trigger: ".harigurus_parent",
    scroller: "body",
    start: "top center",
    end: "bottom center",
    scrub: 1,
  },
});
// scrollTrigger
gsap.from(".yoga_parent", {
  x: -1000,
  duration: 1,
  scrollTrigger: {
    trigger: ".yoga_parent",
    scroller: "body",
    start: "top center",
    end: "bottom center",
    scrub: 1,
  },
});
// scrollTrigger
gsap.from(".currency_parent", {
  x: 1000,
  duration: 1,
  scrollTrigger: {
    trigger: ".currency_parent",
    scroller: "body",
    start: "top center",
    end: "bottom center",
    scrub: 1,
  },
});
// scrollTrigger
gsap.from(".weather_parent", {
  x: -1000,
  duration: 1,
  scrollTrigger: {
    trigger: ".weather_parent",
    scroller: "body",
    start: "top center",
    end: "bottom center",
    scrub: 1,
  },
});
// scrollTrigger
gsap.from(".bmi_parent", {
  x: 1000,
  duration: 1,
  scrollTrigger: {
    trigger: ".bmi_parent",
    scroller: "body",
    start: "top center",
    end: "bottom center",
    scrub: 1,
  },
});
// scrollTrigger
gsap.from(".calc_parent", {
  x: -1000,
  duration: 1,
  scrollTrigger: {
    trigger: ".calc_parent",
    scroller: "body",
    start: "top center",
    end: "bottom center",
    scrub: 1,
  },
});
// scrollTrigger
gsap.from(".joke_parent", {
  x: 1000,
  duration: 1,
  scrollTrigger: {
    trigger: ".joke_parent",
    scroller: "body",
    start: "top center",
    end: "bottom center",
    scrub: 1,
  },
});
// scrollTrigger
gsap.from(".number_parent", {
  x: -1000,
  duration: 1,
  scrollTrigger: {
    trigger: ".number_parent",
    scroller: "body",
    start: "top center",
    end: "bottom center",
    scrub: 1,
  },
});
// scrollTrigger
gsap.from(".tictactoe_parent", {
  x: 1000,
  duration: 1,
  scrollTrigger: {
    trigger: ".tictactoe_parent",
    scroller: "body",
    start: "top center",
    end: "bottom center",
    scrub: 1,
  },
});
gsap.from(".clock_parent", {
  x: -1000,
  duration: 1,
  scrollTrigger: {
    trigger: ".clock_parent",
    scroller: "body",
    start: "top center",
    end: "bottom center",
    scrub: 1,
  },
});
// scrollTrigger
gsap.from(".contact_img", {
  scale: 0.1,
  duration: 1,
  scrollTrigger: {
    trigger: ".contact_img",
    scroller: "body",
    scrub: 1,
  },
});
// scrollTrigger
gsap.from(".form", {
  scale: 0.1,
  x: 300,
  duration: 1,
  scrollTrigger: {
    trigger: ".form",
    scroller: "body",
    scrub: 1,
  },
});
