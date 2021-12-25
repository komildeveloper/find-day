const form = document.querySelector(".form");
const dayNumber = document.querySelector(".day-number");
const day = document.querySelector(".day");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (dayNumber.value == 1) {
    day.textContent = "Monday";
  } else if (dayNumber.value == 2) {
    day.textContent = "Tuesday";
  } else if (dayNumber.value == 3) {
    day.textContent = "Wednesday";
  } else if (dayNumber.value == 4) {
    day.textContent = "Thursday";
  } else if (dayNumber.value == 5) {
    day.textContent = "Friday";
  } else if (dayNumber.value == 6) {
    day.textContent = "Saturday";
  } else if (dayNumber.value == 7) {
    day.textContent = "Sunday";
  } else {
    day.textContent = "This day not found";
  }
});
