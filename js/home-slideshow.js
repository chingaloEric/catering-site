var slideshow = document.querySelector(".slideshow");
var count = 0;

var images = [
  "image-1.jpg",
  "image-2.jpg",
  "image-3.jpg",
  "image-6.jpg",
  "image-7.jpg",
  "image-8.jpg",
  "image-9.jpg",
  "image-10.jpg"
];
var imageLimit = images.length - 1;

function presentSlideshow() {
  count === imageLimit ? (count = 0) : count++;
  slideshow.style.backgroundImage = `url(images/caterers/${images[count]})`;
  setTimeout(presentSlideshow, 4000);
}
window.addEventListener(["load", "change"], presentSlideshow());
