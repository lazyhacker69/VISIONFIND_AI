document.addEventListener("DOMContentLoaded", () => {
  const slideItems = document.querySelectorAll(".slide-text");

  slideItems.forEach((el, index) => {
    setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateX(0)";
    }, index * 200); // delay each item by 200ms
  });
});
