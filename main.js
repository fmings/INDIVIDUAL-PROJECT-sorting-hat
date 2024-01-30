
console.log("testing the link");

const houseArray = ["Ravenclaw", "Hufflepuff", "Gryffindor", "Slytherin"];

const dataList = [
  {
  id: 1,
  name: "Felicia",
  house: "Ravenclaw",
  nonexpelled: true
}]

//function used to render content to the DOM
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender
}


//function for rendering the object/sorting cards
const cardsOnDom = (array) => {
  let domString = "";
  for (const member of array) {
    domString += 
    `<div class="card" style="width: 18rem;">
      <div class="card-color-segment" id="card-color-${member.house}"></div>
      <div class="card-body">
        <h5 class="card-title">${member.name}</h5>
        <p class="card-text">${member.house}</p>
        <a href="#" class="btn btn-primary">Expel</a>
      </div>
    </div>`
  };
  renderToDom("#card-container",domString)
}

//variable to hide the form until button click
const hiddenform = document.querySelector("#form-div").style.display = "none";

//function to show the form once button is clicked
function showForm() {
  const showForm = document.querySelector("#form-div").style.display = "block"
}

//query and function to make the button work/to show the form
const entryButtonEl = document.querySelector("#start-sorting-btn");

entryButtonEl.addEventListener("click", () => {
  console.log("button clicked");
  showForm(); 
})

const form = document.querySelector("form")

//() => {
  //return dataList.map((e) => (dataList.type === "Ravenclaw"))
//})

//const ravenclawHouse = () => dataList.map((e) => (dataList.house === "Ravenclaw"))

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
  cardsOnDom(dataList);
  form.reset();
}

form.addEventListener("submit", createCard)



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
}

document.querySelector(".filter-container").addEventListener("click", houseFilter)
//const startApp = () => {
  //welcomeCardOnDom()
//}

//startApp();
