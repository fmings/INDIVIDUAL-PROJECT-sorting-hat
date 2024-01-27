
console.log("testing the link");

const dataList = [
  {
  id: 1,
  name: "Felicia",
  house: "Ravenclaw",
  expelled: false
}]

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender
}

const welcomeCardOnDom = () => {
  let domString = `
  <div class="card" id="welcomeCard">
  <div class="card-body">
    <h5 class="card-title">Welcome to the Sorting Hat's Sorting House!</h5>
    <p class="card-text">Click below to start the sorting process</p>
    <a href="#" class="btn btn-primary">deligitor prodeas</a>
  </div>
</div>`;

renderToDom("#welcome-card-container", domString)
}

const cardsOnDom = (array) => {
  let domString = "";
  for (const member of array) {
    domString += `<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${member.name}</h5>
      <p class="card-text">${member.house}</p>
      <a href="#" class="btn btn-primary">Expel</a>
    </div>
  </div>`
  }
  renderToDom("#card-container",domString)
}



const startApp = () => {
  welcomeCardOnDom()
}

startApp();
