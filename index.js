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
    if (document.documentElement.clientWidth >= 768){
      y.style.display = "flex";
    } else if(document.documentElement.clientWidth <= 769) {
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
  let test = document.getElementById('test');
  // if (test) {
  //   test.innerHTML = `<h1>${data.crew[1].name}</h1>`
  // }
  console.log(data); 
  console.log(data.destinations[0].images.png); 

  let destinationPage = document.getElementById('destination-content');

  if(destinationPage) {
 
  let destinationImg = document.getElementById('destination-img');
  let destinationLinks = document.getElementById('destinations');
  let destinationName = document.querySelector('.destination-name')
  let destinationLinksChildren = document.getElementById('destinations').children;
  let destinationArray = Array.from(destinationLinksChildren)
  console.log(destinationLinksChildren)

    destinationImg.innerHTML = `
    <img src="${data.destinations[0].images.png}">
    `
    destinationName.innerHTML = `
    <h2>${data.destinations[0].name}</h2>
    `

    destinationArray.forEach((item) => {
      console.log(item.dataset.item)
      item.addEventListener('click', function(e) {
        console.log(item.dataset.item)
        // item.classList.add('active')
        
        if(item.dataset.item === "moon") {
          destinationImg.innerHTML = `
            <img src="${data.destinations[0].images.png}">
          `
          destinationName.innerHTML = `
          <h2>${data.destinations[0].name}</h2>
          `
  
        } else if (item.dataset.item === "mars") {
          destinationImg.innerHTML = `
            <img src="${data.destinations[1].images.png}">
          `
          destinationName.innerHTML = `
          <h2>${data.destinations[1].name}</h2>
          `
        } else if (item.dataset.item === "europa") {
          destinationImg.innerHTML = `
            <img src="${data.destinations[2].images.png}">
          `
          destinationName.innerHTML = `
          <h2>${data.destinations[2].name}</h2>
          `
        }
        else if (item.dataset.item === "titan") {
          destinationImg.innerHTML = `
            <img src="${data.destinations[3].images.png}">
          `
          destinationName.innerHTML = `
          <h2>${data.destinations[3].name}</h2>
          `
        }
      })
    })
    
  }
}

  // destinationLinks.addEventListener('click', destinationClick);


  
  // function destinationClick(e) {
  //   e.preventDefault();
  //   console.log(destinationLinks.children[1].dataset.type)
    // if (destinationLinks.children[0].dataset.type === "moon") {
    //   console.log('moon')
    // } else if (destinationLinks.children[1].dataset.type === "mars") {
    //   console.log('mars')
    // }
  // }
  
  
  

  

  
  // if(destinationPage) {
  //   moonImg.innerHTML = `
  //   <img src="${data.destinations[0].images.png}">
  //   `
  // }
  


