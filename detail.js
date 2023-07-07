let mybody=document.querySelector('body')

mybody.style.backgroundColor='#E3E6E6'



const URL = "https://striveschool-api.herokuapp.com/api/product/";
const addressBar = new URLSearchParams(location.search);
const idAddress = addressBar.get("id");

fetch(URL + idAddress, {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGE3M2NkM2RhNTNjMTAwMTRhOTY4ZWEiLCJpYXQiOjE2ODg2ODE2ODMsImV4cCI6MTY4OTg5MTI4M30.t53WU5sEXgRuiZfgdn9_CqON91ODGKN2HFaYD7X1Sas",
  },
})
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Errore Lettura");
    }
  })

  .then((detail) => {
    let title = document.createElement("h1");
    title.classList.add("text-center", "m-3");
    title.innerHTML = `${detail.name}`;
    let newCol = document.createElement("div");
    newCol.classList.add("col", "col-12", "d-flex", "justify-content-center");
    newCol.innerHTML = `<div class="card" style='widht:30rem' >
        <img src="${detail.imageUrl}" class="card-img-top" >
        <div class="card-body">
          <p class="card-text>${detail.description}
          
          <p class="card-text">${detail.price}€</p>
          <a href="index.html" class="btn btn-primary">Torna alla pagina principale</a>
        </div>
      </div>`;
    document.querySelector("main").appendChild(title);

    title.appendChild(document.querySelector(".row")).appendChild(newCol);
  })
  .catch((err) => {
    console.log(err);
  });
