
console.log("testing the link");

//const houseArray = ["Ravenclaw", "Hufflepuff", "Gryffindor", "Slytherin"]
//const randomHouse = Math.floor(Math.random()*houseArray.length)
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

//function for rendering the welcome card upon start of application
//const welcomeCardOnDom = () => {
  //let domString = `
  //<div class="card" id="welcomeCard">
  //<div class="card-body">
    //<h5 class="card-title">Welcome to the Sorting Hat's Sorting House!</h5>
    //<p class="card-text">Click below to start the sorting process</p>
    //<a href="#" class="btn btn-primary" id="start-sorting-btn">deligitor prodeas</a>
  //</div>
//</div>`;

//renderToDom("#welcome-card-container", domString)
//}

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

const hiddenform = document.querySelector("#form-div").style.display = "none";

function showForm() {
  const showForm = document.querySelector("#form-div").style.display = "block"
}


const entryButtonEl = document.querySelector("#start-sorting-btn");

entryButtonEl.addEventListener("click", () => {
  console.log("button clicked");
  showForm(); 
})

const form = document.querySelector("form")


const createCard = (e) => {
  e.preventDefault();

  const newSortObject = {
    id: dataList.length + 1,
    name: document.querySelector("#name-input").value,
    house: "slytherin",
    nonexpelled: true 
  };
  dataList.push(newSortObject);
  cardsOnDom(dataList);
  form.reset();
}

form.addEventListener("submit", createCard)

//const startApp = () => {
  //welcomeCardOnDom()
//}

//startApp();
