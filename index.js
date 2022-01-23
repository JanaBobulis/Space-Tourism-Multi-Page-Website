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
  createCrewPage(data);
  // console.log(data)
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
      <img width="170" height="170" src="${data.destinations[0].images.webp}">
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
        // console.log(item)
        item.addEventListener('click', function (event) {
          event.preventDefault();
          
          if (item.dataset.item === response.name) {
            destinationImg.innerHTML = `
          <img width="170" height="170" src="${response.images.webp}">
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

//crew page

function createCrewPage(data) {
  let crewImg = document.getElementById('crew-member-img');
  let crewName = document.querySelector('.crew-name');
  let crewRole = document.querySelector('.crew-role');
  let crewBio = document.querySelector('.crew-bio');
  let carouselButtons = document.getElementById('carousel-buttons').children;
  let buttonsArray = Array.from(carouselButtons)
  let dataCrew = data.crew
  

    dataCrew.forEach(response => {

      crewImg.innerHTML = `
      <img src="${data.crew[0].images.webp}">
      `
      crewRole.innerHTML = `
      <h2>${data.crew[0].role}</h2>
      `

      crewName.innerHTML = `
      <h3>${data.crew[0].name}</h3>
      `

      crewBio.innerHTML = `
          <p>${data.crew[0].bio}</p>
          `

          buttonsArray.forEach((item) => {
            console.log(item)
            item.addEventListener('click', function (event) {
              event.preventDefault();

              console.log(item.dataset)
              console.log(response.name)
              
              if (item.dataset.item === response.name) {
                crewImg.innerHTML = `
              <img src="${response.images.webp}">
              `
                crewRole.innerHTML = `
              <h2>${response.role}</h2>
              `
              crewName.innerHTML = `
              <h3>${response.name}</h3>
              `
                crewBio.innerHTML = `
              <p>${response.bio}</p>
              `
    
              // facts.innerHTML = `
              // <div class="distance">
              //   <h3>AVG. DISTANCE</h3>
              //   <p>${response.distance}</p>
              // </div>
              // <div class="travel-time">
              //   <h3>EST. TRAVEL TIME</h3>
              //   <p>${response.travel}</p>
              // </div>`
              }
    
              //set an active element
              let activeEl = document.querySelector('.active-link')
              activeEl.classList.remove('active-link');
              item.className += " active-link"
    
            })
          })
    })
          
}

