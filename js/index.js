const burgerBtn = document.getElementById("burgerBtn");
const mobile = document.getElementById("mobile");

burgerBtn.addEventListener("click", () => {
  mobile.classList.toggle("navigation");
});

// tooltips
$('[data-toggle="tooltip"]').tooltip();
