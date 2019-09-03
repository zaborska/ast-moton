const burgerBtn = document.getElementById("burgerBtn");
const mobile = document.getElementById("mobile");

burgerBtn.addEventListener("click", () => {
  mobile.classList.toggle("navigation");
});

// tooltips
// TEMP SOLUTION

setTimeout(function() {
  $('[data-toggle="tooltip"]').tooltip();
}, 1000);
