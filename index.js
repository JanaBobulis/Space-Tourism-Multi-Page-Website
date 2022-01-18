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
            <img src="starter-code/assets/shared/logo.svg">
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
            <a href="/">
              <span>02</span>Crew
            </a>
          </li>
          <li><a href="/">
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

//fetching data.json file
async function loadData() {
  const response = await fetch('/starter-code/data.json');
  const data = await response.json();
  createDestinationPage(data);
}
loadData();

function createDestinationPage(data) {
  let destinationPage = document.getElementById('destination-content');

  if (destinationPage) {

    let destinationImg = document.getElementById('destination-img');
    let destinationName = document.querySelector('.destination-name')
    let destinationDescription = document.querySelector('.destination-description')
    let facts = document.querySelector(".facts");
    let destinationLinksChildren = document.getElementById('destinations').children;
    let destinationArray = Array.from(destinationLinksChildren)
    let dataDestinations = data.destinations

    dataDestinations.forEach(response => {

      destinationImg.innerHTML = `
      <img src="${data.destinations[0].images.png}">
      `
      destinationName.innerHTML = `
      <h2>${data.destinations[0].name}</h2>
      `

      destinationDescription.innerHTML = `
          <p>${data.destinations[0].description}</p>
          `

          facts.innerHTML = `
          <div class="distance">
            <h3>AVG. DISTANCE</h3>
            <p>${data.destinations[0].distance}</p>
          </div>
          <div class="travel-time">
            <h3>EST. TRAVEL TIME</h3>
            <p>${data.destinations[0].travel}</p>
          </div>`
          
     

      destinationArray.forEach((item) => {
        console.log(item)
        item.addEventListener('click', function (event) {
          event.preventDefault();
          
          if (item.dataset.item === response.name) {
            destinationImg.innerHTML = `
          <img src="${response.images.png}">
          `
            destinationName.innerHTML = `
          <h2>${response.name}</h2>
          `
            destinationDescription.innerHTML = `
          <p>${response.description}</p>
          `

          facts.innerHTML = `
          <div class="distance">
            <h3>AVG. DISTANCE</h3>
            <p>${response.distance}</p>
          </div>
          <div class="travel-time">
            <h3>EST. TRAVEL TIME</h3>
            <p>${response.travel}</p>
          </div>`
          }

          //set an active element
          let activeEl = document.querySelector('.active')
          activeEl.classList.remove('active');
          item.className += " active"

        })
      })
    })
  }
}

