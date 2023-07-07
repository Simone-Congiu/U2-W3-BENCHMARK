let mybody=document.querySelector('body')

mybody.style.backgroundColor='#E3E6E6'

const URL = "https://striveschool-api.herokuapp.com/api/product/";
const addressBar = new URLSearchParams(location.search);
const idAddress = addressBar.get("id");

if (idAddress) {
  let deleteB = document.createElement("button");
  deleteB.classList.add("btn", "btn-danger", "mx-3");
  deleteB.innerHTML = "Elimina";
  let modificaB = document.querySelector(".btn-primary");
  modificaB.innerHTML = "Modifica";
  let myTitle = document.querySelector("h1");
  myTitle.innerText = "Modifica evento";
  modificaB.appendChild(deleteB);

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

    .then((product) => {
      let nameInput = document.getElementById("product-name");
      let descriptionInput = document.getElementById("product-description");
      let brandInput = document.getElementById("brand-product");
      console.log(brandInput);
      let imageInput = document.getElementById("image-product");
      console.log(imageInput)
      let priceInput = document.getElementById("price-product");

      nameInput.value = product.name;
      descriptionInput.value = product.description;
      brandInput.value = product.brand;
      console.log(brandInput);
      imageInput.value = product.imageUrl;
      priceInput.value = product.price;
    })
    .catch((err) => {
      console.log(err);
    });

  deleteB.addEventListener("click", () => {
    fetch(URL + idAddress, {
        method:'DELETE',
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGE3M2NkM2RhNTNjMTAwMTRhOTY4ZWEiLCJpYXQiOjE2ODg2ODE2ODMsImV4cCI6MTY4OTg5MTI4M30.t53WU5sEXgRuiZfgdn9_CqON91ODGKN2HFaYD7X1Sas",
      },
      })
      .then((res)=>{
        if(res.ok){
            alert('PRODOTTO ELIMINATO')
            location.assign('index.html')
        }
      })
      .catch((err)=>{ 
        console.log(err)
      })
})
}

let myForm = document.getElementById("product-form");
console.log("product-form");
myForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let nameInput = document.getElementById("product-name");
  let descriptionInput = document.getElementById("product-description");
  let brandInput = document.getElementById("brand-product");
  let imageInput = document.getElementById("image-product");
  let priceInput = document.getElementById("price-product");

  const newProduct = {
    name: nameInput.value,
    description: descriptionInput.value,
    brand: brandInput.value,
    imageUrl: imageInput.value,
    price: priceInput.value,
  };
  console.log(newProduct);

  const URL = "https://striveschool-api.herokuapp.com/api/product";

  let urlUse;
  if (idAddress) {
    urlUse = URL + "/" + idAddress;
  } else {
    urlUse = URL;
  }

  let method;
  if (idAddress) {
    method = "PUT";
  } else {
    method = "POST";
  }

  fetch(urlUse, {
    method: method,
    body: JSON.stringify(newProduct),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGE3M2NkM2RhNTNjMTAwMTRhOTY4ZWEiLCJpYXQiOjE2ODg2ODE2ODMsImV4cCI6MTY4OTg5MTI4M30.t53WU5sEXgRuiZfgdn9_CqON91ODGKN2HFaYD7X1Sas",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.ok) {
        console.log(res);
        alert("ESEGUITO CORRETAMENTE");
        nameInput.value = "";
        descriptionInput.value = "";
        brandInput.value = "";
        imageInput.value = "";
        priceInput.value = "";

        location.assign("index.html");
      } else {
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
