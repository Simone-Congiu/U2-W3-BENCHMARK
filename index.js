let mybody=document.querySelector('body')
mybody.style.backgroundColor='#E3E6E6'






const URL='https://striveschool-api.herokuapp.com/api/product/'
console.log(URL)




const getProductToApi=function(){
    fetch(URL, {
headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGE3M2NkM2RhNTNjMTAwMTRhOTY4ZWEiLCJpYXQiOjE2ODg2ODE2ODMsImV4cCI6MTY4OTg5MTI4M30.t53WU5sEXgRuiZfgdn9_CqON91ODGKN2HFaYD7X1Sas"
}
})
.then((res)=>{
    if(res.ok){
        console.log(res)
        return res.json()
    }else{
        throw new Error('Errore nella risposta')
    }
})

.then((product)=>{
    let spinner=document.getElementById('spinner')
    spinner.classList.add('d-none')
    product.forEach(el=>{
        let newCol=document.createElement('div')
        newCol.classList.add('col','col-12','col-sm-6','col-md-4','col-lg-3','d-flex', "justify-content-center")
        newCol.innerHTML=`<div class="card  rounded"  >
        <img src=${el.imageUrl} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${el.name}</h5>
          <p class="card-text">${el.description}</p>
          <p class="card-text">${el.brand}</p>
          <p class="card-text">${el.price}€</p>
          <a href="detail.html?id=${el._id}" class="btn btn-primary">Scopri di più</a>
          <a href="back-office.html?id=${el._id}" class="btn btn-warning m-2">modifica</a>

        </div>
      </div>`

      let myRow=document.querySelector('.row')
      myRow.appendChild(newCol)
    })
})

.catch((err)=>{
    console.log(err)
})



}
getProductToApi()