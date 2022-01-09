function closeBtn() {
    let screenOverflow = document.querySelector("body");
    var x = document.querySelector(".nav-menu");
    if (x.style.display === "flex") {
      x.style.display = "none";
      screenOverflow.style.overflow = "visible";
    } else {
      x.style.display = "flex";
      screenOverflow.style.overflow = "hidden";
    }
  }  
  
  function mobileDisplay() {
    var y = document.querySelector(".nav-menu");
    if (document.documentElement.clientWidth >= 1024){
      y.style.display = "flex";
    } else if(document.documentElement.clientWidth <= 1023) {
      y.style.display = "none";
    }
  }

  window.onresize = mobileDisplay;

  function toggleMenu() {
    let menu = document.getElementById("burger");
    menu.classList.toggle('open');
}
console.log('test')