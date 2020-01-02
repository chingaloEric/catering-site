window.onscroll = () => {
  setSticky();
};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function setSticky() {
  window.pageYOffset > sticky
    ? header.classList.add("sticky-header")
    : header.classList.remove("sticky-header");
}
