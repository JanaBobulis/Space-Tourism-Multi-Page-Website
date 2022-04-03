//fetching data.json file
async function loadData() {
    const response = await fetch('/starter-code/data.json');
    const data = await response.json();
    createDestinationPage(data);
    console.log(data)
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
  