//mobile navigation menu
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
  if (document.documentElement.clientWidth >= 768) {
    y.style.display = "flex";
  } else if (document.documentElement.clientWidth <= 769) {
    y.style.display = "none";
  }
}

window.onresize = mobileDisplay;

function toggleMenu() {
  let menu = document.getElementById("burger");
  menu.classList.toggle('open');
}

//reausable header element
class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header>
      <nav class="navigation">
        <div class="top-nav flex flex-row flex-jc-sb flex-ai-c">
          <div class="logo">
          <a href="./index.html">
            <img width="48" height="48" src="starter-code/assets/shared/logo.svg">
          </a>
            
          </div>
          <a id="toggle-menu" class="toggle-menu hidden-lg" onclick="closeBtn(); toggleMenu()">
            <div id="burger">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
        </div>
        
        <ul class="nav-menu flex flex-column">
          <li>
            <a href="/">
              <span>00</span>Home
            </a>
          </li>
          <li>
            <a href="./destination.html"> 
              <span>01</span>Destination
            </a>
          </li>
          <li>
            <a href="./crew.html">
              <span>02</span>Crew
            </a>
          </li>
          <li><a href="./technology.html">
            <span>03</span>Technology
          </a></li>
        </ul>
      </nav>
    </header>
    `;
  }
}

//assigning header element to <main header> element
customElements.define('main-header', Header)


