//fetching data.json file
async function loadData() {
    const response = await fetch('/starter-code/data.json');
    const data = await response.json();
    createTechPage(data)
  }
  loadData();


function createTechPage(data) {
    console.log('test')
    let techImg = document.getElementById('technology-img')
    let techName = document.querySelector('.tech-name');
    let techDescription = document.querySelector('.tech-description');
    let carouselButtonsTech = document.getElementById('carousel-buttons-technology');
    let buttonsChildren = carouselButtonsTech.children;
    console.log(buttonsChildren)
    let buttonsArray = Array.from(buttonsChildren)

    console.log(window.innerWidth)
   
    let dataTech = data.technology;
    
      dataTech.forEach(response => {

        if (window.innerWidth <= 1024) {
          techImg.innerHTML = `
          <img class="${data.technology[0].name}" src="${data.technology[0].images.landscape}" alt="${data.technology[0].name}">
          `
        }  else {
          techImg.innerHTML = `
          <img class="${data.technology[0].name}" src="${data.technology[0].images.portrait}" alt="${data.technology[0].name}">
          `
        }

        window.addEventListener('resize', function() {
          if (window.innerWidth <= 1024) {
            techImg.innerHTML = `
            <img class="${data.technology[0].name}" src="${data.technology[0].images.landscape}" alt="${data.technology[0].name}">
            `
          }  else {
            techImg.innerHTML = `
            <img class="${data.technology[0].name}" src="${data.technology[0].images.portrait}" alt="${data.technology[0].name}">
            `
          }
        }, true);

        techNameTerminology = 'THE TERMINOLOGY...'
  
        techName.innerHTML = `
        <span>${techNameTerminology}</span>
        <h3>${data.technology[0].name}</h3>
        `
  
        techDescription.innerHTML = `
            <p>${data.technology[0].description}</p>
            `
  
            buttonsArray.forEach((item) => {
              console.log(item)
              item.addEventListener('click', function (event) {
                event.preventDefault();
                console.log(item.dataset.item, 'dataset item')
                console.log(response.name, 'response name')
  
                if (item.dataset.item === response.name) {

                  window.addEventListener('resize', function() {
                    if (window.innerWidth <= 1024) {
                      techImg.innerHTML = `
                      <img class="${data.technology[0].name}" src="${data.technology[0].images.landscape}" alt="${data.technology[0].name}">
                      `
                    }  else {
                      techImg.innerHTML = `
                      <img class="${data.technology[0].name}" src="${data.technology[0].images.portrait}" alt="${data.technology[0].name}">
                      `
                    }
                  }, true);

                  
                techName.innerHTML = `
                <h3>${response.name}</h3>
                `
                  techDescription.innerHTML = `
                <p>${response.description}</p>
                `
                }
      
                //set an active element
                let activeEl = document.querySelector('.active-link-tech')
                activeEl.classList.remove('active-link-tech');
                item.className += " active-link-tech"
      
              })
            })
      })
            
  }