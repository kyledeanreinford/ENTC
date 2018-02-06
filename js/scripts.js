// Change nav background color on nav on scroll
document.body.onscroll = function changeNavBackground() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById('nav').className = "navOnScroll";
  } else {
    document.getElementById('nav').className = "";
  };
}
