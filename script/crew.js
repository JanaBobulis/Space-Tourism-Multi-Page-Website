//fetching data.json file
async function loadData() {
    const response = await fetch('/starter-code/data.json');
    const data = await response.json();
    createCrewPage(data);
    console.log(data)
  }
  loadData();
  
  
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
        <img class="${data.crew[0].name}" src="${data.crew[0].images.webp}" alt="${data.crew[0].name}">
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
                <img class="${response.name}" src="${response.images.webp}" alt="${response.name}">
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
  