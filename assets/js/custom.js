// right-sidebar
function open_aside() {
  "use strict";
  const sidepanel = document.getElementById("mySidenav");
  if (sidepanel) {
    sidepanel.style.left = "0";
  } else {
    console.error("Error: Side panel element not found!");
  }
}
function close_aside() {
  "use strict";
  const sidepanel = document.getElementById("mySidenav");
  if (sidepanel) {
    sidepanel.style.left = "-355px";
  } else {
    console.error("Error: Side panel element not found!");
  }
}

let slid = document.getElementById("slid-btn");
if (slid !== null) {
  slid.onclick = () => {
    let dropdwon = document.getElementById("slid-drop");
    dropdwon.classList.toggle("aside-dropdwon");
  };
}

// update-sidebar
function open_update() {
  "use strict";
  const updatepanel = document.getElementById("myUpdatenav");
  if (updatepanel) {
    updatepanel.style.right = "0px";
  } else {
    console.error("Error: Side panel element not found!");
  }
}

function close_update() {
  "use strict";
  const updatepanel = document.getElementById("myUpdatenav");
  if (updatepanel) {
    updatepanel.style.right = "-620px";
  } else {
    console.error("Error: Side panel element not found!");
  }
}

// counter
$(".count").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 2000,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
      }
    );
});

// scroll counter
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const target = parseInt(counter.dataset.target);
  let count = 0;
  const updateCount = () => {
    const increment = Math.ceil((target - count) / 10);
    count += increment;
    counter.innerText = count;
    if (count < target) {
      setTimeout(updateCount, 30);
    }
  };

  // Individual scroll trigger for each counter
  const wrapper = counter.parentElement; // Get the counter's wrapper element
  const triggerPoint =
    wrapper.getBoundingClientRect().top + window.scrollY - 500; // Calculate trigger position based on scroll and wrapper top

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    if (
      scrollPosition > triggerPoint &&
      !counter.classList.contains("counted")
    ) {
      // Check scroll position and a "counted" class
      updateCount();
      counter.classList.add("counted"); // Add "counted" class to prevent future runs
    }
  });
});

// =====Logo slider====
$(".logo_slider").slick({
  dots: false,
  infinite: true,
  speed: 3500,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  prevArrow: false,
  nextArrow: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
  afterSlide: function (slider) {
    if ($(slider.$slides).length === slider.slickCurrentSlide() + 1) {
      slider.$slider.slick("slickGoTo", 0);
    }
  },
});

//countdown
const countDownDate = new Date("July 31, 2024 23:59:59").getTime();

const countdownFunction = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  let day = document.getElementById("days");
  if (day !== null) {
    day.innerHTML = days;
  }
  let hour = document.getElementById("hours");
  if (hour !== null) {
    hour.innerHTML = hours;
  }
  let minute = document.getElementById("minutes");
  if (minute !== null) {
    minute.innerHTML = minutes;
  }
  let second = document.getElementById("seconds");
  if (second !== null) {
    second.innerHTML = seconds;
  }

  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown").innerHTML = `<h3>Just a moment</h3>`;
  }
}, 1000);
