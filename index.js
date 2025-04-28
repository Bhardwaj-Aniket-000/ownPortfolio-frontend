const showAboutPage = document.querySelector(".about");
const aboutBtn = document.querySelector(".aboutBtn ");
const aboutClosebtn = document.querySelector(".aboutClosebtn ");

if (window.innerWidth >= 1024) {
  const script = document.createElement("script");
  script.src = "./gsap.js";
  console.log(script);
  document.body.append(script);
} else {
  applyGsapAnimation();
}
aboutBtn.addEventListener("click", (e) => {
  showAboutPage.style.display = "block";
  gsap.from(".about", {
    scale: 2,
    y: -700,
    x: -700,
    height: 1000,
    duration: 1,
    background: "#000",
  });
});

aboutClosebtn.addEventListener("click", async (e) => {
  showAboutPage.style.translateX = 700;
  showAboutPage.style.translateY = 700;
  showAboutPage.style.scale = 0;
  showAboutPage.style.transition = "1s linear";
  setTimeout(() => {
    showAboutPage.style.display = "none";
    showAboutPage.style.translateX = -700;
    showAboutPage.style.translateY = -700;
    showAboutPage.style.scale = 1;
    showAboutPage.style.transition = "none";
  }, 1000);
});

const username = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const btn = document.getElementById("submit-btn");
const btnImg = document.getElementById("btn-img");
const spanBtn = document.querySelector("#submit-btn span");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  btnImg.style.display = "block";
  spanBtn.style.display = "none";

  const data = {
    name: username.value,
    userEmail: email.value,
    userMessage: message.value,
  };
  if (username.value === "" || email.value === "" || message.value === "") {
    btn.style.backgroundColor = "red";
    btn.style.color = "#fff";
    btn.innerText = "Fill All Fields";
    setTimeout(() => {
      btn.style.backgroundColor = "#1280A4";
      btn.style.color = "#fff";
      btn.innerText = "Send";
    }, 2000);
    return;
  }
  // fetch("https://newspulse-server.vercel.app/api/v3/portfoliofeeds", {
  // fetch("https://own-portfolio-backend.vercel.app/api/getEmail", {
  fetch("http://localhost:7000/api/getEmail", {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "Application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
      if (res.success) {
        alertbox("Your Message Sent Successfully !");
        btnImg.style.display = "none";
        spanBtn.style.display = "block";
        username.value = "";
        email.value = "";
        message.value = "";
        return;
      }
    })
    .catch((err) => {
      console.log(err);
      username.value = "";
      email.value = "";
      message.value = "";
      document.querySelector("#submit-btn img").style.display = "none";
      document.querySelector("#submit-btn span").style.display = "block";
      alertbox("Error : Message not Sent , try again !");
    });
});

function alertbox(text) {
  const div = document.createElement("div");
  div.style.width = "200px";
  div.style.backgroundColor = "#c6d3f7";
  div.style.position = "fixed";
  div.style.top = "5px";
  div.style.right = "5px";
  div.style.zIndex = "100";
  div.innerText = text;
  div.style.padding = "7px";
  div.style.fontFamily = "Arial";
  div.style.borderRadius = "5px";
  div.style.color = "gray";
  if (window.innerWidth > 480) {
    div.style.fontSize = "11px";
  } else {
    div.style.fontSize = "9px";
  }

  document.body.append(div);
  setTimeout(() => {
    div.style.display = "none";
  }, 3000);
}
function applyGsapAnimation() {
  gsap.from(".main_header", {
    scale: 0.2,
    x: -300,
    opacity: 0,
    background: "#1685A9",
    duration: 1,
  });
  gsap.from(".emp_name", {
    scale: 0.2,
    x: -300,
    duration: 1,
    opacity: 0,
    delay: 0.5,
  });
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
    x: 200,
    duration: 0.9,
    delay: 0.5,
    stagger: 0.2,
  });
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
  gsap.from(".center_logo", {
    scale: 1.5,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".center_logo",
      scroller: "body",
      scrub: 1,
    },
  });
  gsap.from(".news_parent", {
    // x: 100,
    y: -100,
    scale: 0.5,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".news_parent",
      scroller: "body",
      scrub: 1,
    },
  });
  gsap.from(".chat_parent", {
    // x: -100,
    y: -100,
    scale: 0.5,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".chat_parent",
      scroller: "body",
      // start: "top center",
      // end: "bottom center",
      scrub: 1,
    },
  });
  gsap.from(".harigurus_parent", {
    // x: 100,
    y: -100,
    opacity: 0,
    scale: 0.5,
    duration: 1,
    scrollTrigger: {
      trigger: ".harigurus_parent",
      scroller: "body",
      // start: "top center",
      // end: "bottom center",
      scrub: 1,
    },
  });
  gsap.from(".yoga_parent", {
    // x: -100,
    y: -100,
    opacity: 0,
    scale: 0.5,
    duration: 1,
    scrollTrigger: {
      trigger: ".yoga_parent",
      scroller: "body",
      // start: "top center",
      // end: "bottom center",
      scrub: 1,
    },
  });
  gsap.from(".currency_parent", {
    // x: 100,
    y: -100,
    opacity: 0,
    scale: 0.5,
    duration: 1,
    scrollTrigger: {
      trigger: ".currency_parent",
      scroller: "body",
      // start: "top center",
      // end: "bottom center",
      scrub: 1,
    },
  });
  gsap.from(".weather_parent", {
    // x: -100,
    y: -100,
    opacity: 0,
    scale: 0.5,
    duration: 1,
    scrollTrigger: {
      trigger: ".weather_parent",
      scroller: "body",
      // start: "top center",
      // end: "bottom center",
      scrub: 1,
    },
  });
  gsap.from(".bmi_parent", {
    // x: 100,
    y: -100,
    opacity: 0,
    scale: 0.5,
    duration: 1,
    scrollTrigger: {
      trigger: ".bmi_parent",
      scroller: "body",
      // start: "top center",
      // end: "bottom center",
      scrub: 1,
    },
  });
  gsap.from(".calc_parent", {
    // x: -100,
    y: -100,
    opacity: 0,
    scale: 0.5,
    duration: 1,
    scrollTrigger: {
      trigger: ".calc_parent",
      scroller: "body",
      // start: "top center",
      // end: "bottom center",
      scrub: 1,
    },
  });
  gsap.from(".joke_parent", {
    // x: 100,
    y: -100,
    opacity: 0,
    scale: 0.5,
    duration: 1,
    scrollTrigger: {
      trigger: ".joke_parent",
      scroller: "body",
      // start: "top center",
      // end: "bottom center",
      scrub: 1,
    },
  });
  gsap.from(".number_parent", {
    // x: -100,
    y: -100,
    opacity: 0,
    scale: 0.5,
    duration: 1,
    scrollTrigger: {
      trigger: ".number_parent",
      scroller: "body",
      // start: "top center",
      // end: "bottom center",
      scrub: 1,
    },
  });
  gsap.from(".tictactoe_parent", {
    // x: 100,
    y: -100,
    opacity: 0,
    scale: 0.5,
    duration: 1,
    scrollTrigger: {
      trigger: ".tictactoe_parent",
      scroller: "body",
      // start: "top center",
      // end: "bottom center",
      scrub: 1,
    },
  });
  gsap.from(".clock_parent", {
    // x: -100,
    y: -100,
    opacity: 0,
    scale: 0.5,
    duration: 1,
    scrollTrigger: {
      trigger: ".clock_parent",
      scroller: "body",
      // start: "top center",
      // end: "bottom center",
      scrub: 1,
    },
  });
  gsap.from(".contact_img", {
    scale: 0.1,
    duration: 1,
    rotate: 90,
    scrollTrigger: {
      trigger: ".contact_img",
      scroller: "body",
      scrub: 1,
    },
  });
  gsap.from(".form", {
    scale: 0.5,
    // x: 100,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: ".form",
      scroller: "body",
      scrub: 1,
    },
  });
}
