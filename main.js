
console.log("testing the link");

const houseArray = ["Ravenclaw", "Hufflepuff", "Gryffindor", "Slytherin"];

const dataList = [
  {
  id: 1,
  name: "Felicia",
  house: "Ravenclaw",
  nonexpelled: true
}]

const voldyArmy = [];

//function used to render content to the DOM
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender
}


//function for rendering the object/sorting cards
const cardsOnDom = (array) => {
  let domString = "";
  array.forEach((member) => {
    domString += 
    `<div class="card" id="house-card" style="width: 18rem;">
      <div class="card-color-segment" id="card-color-${member.house}"></div>
      <div class="card-body" id="house-card-body">
        <h5 class="card-title" id="house-card-title">${member.name}</h5>
        <p class="card-text" id="house-card-house">${member.house}</p>
        <a href="#" class="btn btn-primary" id="expel-button expel--${member.id}">Expel</a>
      </div>
    </div>`
  })
  renderToDom("#card-container",domString)
}

const voldyOnDom = (array) => {
  let domString = "";
  array.forEach((member) => {
    domString += 
    `<div class="card" id="voldemort-card" style="width: 18rem;">
      <div class="card-color-segment" id="card-color-voldemort"></div>
      <div class="card-body" id="house-card-body">
        <h5 class="card-title" id="house-card-title">${member.name} moved to the dark side!</h5>
        <p id="expelled">EXPELLED</p>
      </div>
    </div>`
  })
  renderToDom("#voldemort-container",domString)
}

//variable to hide the form until button click
const hiddenform = document.querySelector("#form-div").style.display = "none";

//function to show the form once button is clicked
function showForm() {
  const showForm = document.querySelector("#form-div").style.display = "block"
}

//variable to hide the filter buttons until button click
const hiddenFilter = document.querySelector(".hidden-container").style.display = "none";

//function to show the filter buttons once button is clicked
function showFilter() {
  const filterButtons = document.querySelector(".hidden-container").style.display = "block";
}

//query and function to make the button work/to show the form
const entryButtonEl = document.querySelector("#start-sorting-btn");

entryButtonEl.addEventListener("click", () => {
  console.log("button clicked");
  showForm();
  
})

const form = document.querySelector("form")

function random() {
    const randomHouse = Math.floor(Math.random()*houseArray.length);
    const randomHouseName = houseArray[randomHouse];
    return randomHouseName
}

//function to add card and assign new students a house
const createCard = (e) => {
  e.preventDefault();

  const newSortObject = {
    id: dataList.length + 1,
    name: document.querySelector("#name-input").value,
    house: random(),
    nonexpelled: true 
  };
  dataList.push(newSortObject);
  console.log(newSortObject)
  cardsOnDom(dataList.sort(function(a, b) {
    console.log(a.name)
    console.log(b.name)
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }));
  showFilter(); 
  form.reset();
}

form.addEventListener("submit", createCard)


//filter function to filter houses
const houseFilter = (event) => {
  if(event.target.id.includes('gryffindor-filter')) {
    const gryffindor = dataList.filter(item => item.house === "Gryffindor")
    console.log("gryffindor filter")
    cardsOnDom(gryffindor)
  }
  if(event.target.id.includes('ravenclaw-filter')) {
    const ravenclaw = dataList.filter(item => item.house === "Ravenclaw")
    cardsOnDom(ravenclaw)
  }
  if(event.target.id.includes('hufflepuff-filter')) {
    const hufflepuff = dataList.filter(item => item.house === "Hufflepuff")
    cardsOnDom(hufflepuff)
  }
  if(event.target.id.includes('slytherin-filter')) {
    const slytherin = dataList.filter(item => item.house === "Slytherin")
    cardsOnDom(slytherin)
  }
  if(event.target.id.includes('all-filter')){
    cardsOnDom(dataList)
  }
}

//query selector to make filter buttons work
document.querySelector(".filter-container").addEventListener("click", houseFilter)

const cards = document.querySelector("#card-container");

cards.addEventListener("click", (e) => {
  console.log("delete")
  if (e.target.id.includes("expel")) {
    const [ , id] = e.target.id.split("--");

    const index = dataList.findIndex((e) => e.id === Number(id)); 
    voldyArmy.push(dataList[index])
    dataList.splice(index,1);
    console.log(index)
    console.log(voldyArmy)
  }
  cardsOnDom(dataList)
  voldyOnDom(voldyArmy)
  
})
