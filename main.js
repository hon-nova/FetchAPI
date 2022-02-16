const loadPhotoBtn = document.getElementById("load-photo");
loadPhotoBtn.addEventListener("click", getRandomDog);

//1 2 3 4 5
const url = "https://dog.ceo/api/breeds/image/random";
function APIExample() {
  fetch(url).then((res) =>
    res
      .json()
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
  );
}

//9
async function init() {
  loadSpinner();
  const data = await fetch(url).then((res) =>
    res
      .json()
      .then((data) => {
        console.log(data);
        loadPhotoBtn.innerHTML = `<img src="${data.message}">`;
      })
      .catch((error) => console.log(error))
  );
  removeSpinner();
  loadData(data);
  getRandomDogPhoto();
  renderDogPhoto(url);
}
//test
init();

//8
function getRandomDogPhoto() {
  const url = "https://dog.ceo/api/breeds/image/random";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      loadPhotoBtn.innerHTML = `<img src="${data.message}">`;
    });
}
//10
function renderDogPhoto(url) {
  fetch(url).then((res) =>
    res.json().then((data) => {
      console.log(data);
      loadPhotoBtn.innerHTML = `<img src="${data.message}">`;
    })
  );
}

//11
function loadSpinner() {
  const spinner = `../assets/loader.svg`;
  const img = `<img src="${spinner}" id="spinner" />`;
  document
    .querySelector(`#container`)
    .insertAdjacentHTML(`beforeend`, `<div>${data}</div>`);
  loadPhotoBtn.disabled = true;
}

function removeSpinner() {
  const spinner = document.querySelector(`img#spinner`);
  spinner.parentElement.removeChild(spinner);
}
