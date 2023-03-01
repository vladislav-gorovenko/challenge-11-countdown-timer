import { parseTime } from "./utils.js";

// querySelectors
const daysNumberEl = document.querySelector(".cards__number--days");
const hoursNumberEl = document.querySelector(".cards__number--hours");
const minutesNumberEl = document.querySelector(".cards__number--minutes");
const secondsNumberEl = document.querySelector(".cards__number--seconds");
const daysCardEl = document.querySelector(".cards__card--days");
const hoursCardEl = document.querySelector(".cards__card--hours");
const minutesCardEl = document.querySelector(".cards__card--minutes");
const secondsCardEl = document.querySelector(".cards__card--seconds");
const lightModeSwitchEl = document.querySelector(".light-mode-switch");

const futureTime = new Date().getTime() + 8 * 1000 * 60 * 60 * 24;

var interval = setInterval(() => {
  let nowTime = new Date().getTime();
  let remainingTime = futureTime - nowTime;
  const { days, hours, minutes, seconds } = parseTime(remainingTime);
  if (remainingTime < 1000) {
    clearInterval(interval);
  }

  renderNumbers({ days, hours, minutes, seconds });
}, 1000);

// event listeners
lightModeSwitchEl.addEventListener("click", () => {
  console.log("hey");
  if (document.body.classList.contains("day-mode")) {
    document.body.classList.remove("day-mode");
    lightModeSwitchEl.classList.value = "fa-solid fa-moon fa light-mode-switch";
  } else {
    document.body.classList.add("day-mode");
    lightModeSwitchEl.classList.value = "fa-solid fa-sun fa light-mode-switch";
  }
});

// functions

function renderNumbers(data) {
  const { days, hours, minutes, seconds } = data;
  setTimeout(() => {
    if (seconds != secondsNumberEl.innerHTML) {
      secondsCardEl.classList.add("animated");
    }
    if (minutes != minutesNumberEl.innerHTML) {
      minutesCardEl.classList.add("animated");
    }
    if (hours != hoursNumberEl.innerHTML) {
      hoursCardEl.classList.add("animated");
    }
    if (days != daysNumberEl.innerHTML) {
      daysCardEl.classList.add("animated");
    }
  }, 200);
  setTimeout(() => {
    daysNumberEl.innerHTML = days;
    hoursNumberEl.innerHTML = hours;
    minutesNumberEl.innerHTML = minutes;
    secondsNumberEl.innerHTML = seconds;
  }, 400);
  removeAnimatedClasses();
}

function removeAnimatedClasses(data) {
  document.querySelectorAll(".cards__card").forEach((card) => {
    setTimeout(() => {
      card.classList.remove("animated");
    }, 900);
  });
}
