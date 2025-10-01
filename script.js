document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector('.carousel-track');
  const items = document.querySelectorAll('.options');
  const visibleItems = 3;
  let index = 0;

  function slideCarousel() {
    const offsetPercent = index * (100 / visibleItems);
    track.style.transform = `translateX(-${offsetPercent}%)`;
    index = (index + 1) % (items.length - visibleItems + 1);
  }

  setInterval(slideCarousel, 2000);
});
