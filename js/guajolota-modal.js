

//boton naranja
const priceButton = document.getElementById('btn-price')

// sabores de las bebidas disponible , click en la caja y se agregara
// su precio de 12 pesos al precio final
const champurrado = document.getElementById('box-champurrado')
const atole = document.getElementById('box-atole')
const chocolate = document.getElementById('box-chocolate')
const cafe = document.getElementById('box-cafe')

//id de los checkbox de cada bebida
const checkboxChampurrado = document.getElementById('checkbox-champurrado')
const checkboxAtole = document.getElementById('checkbox-atole')
const checkboxChocolate = document.getElementById('checkbox-chocolate')
const checkboxCafe = document.getElementById('checkbox-cafe')

// console.log(priceButton.textContent)

checkboxChampurrado.addEventListener('click',() => {
  const priceDrink = 12
  if (checkboxChampurrado.checked == true) {
    priceButton.textContent = Number(priceButton.textContent) + priceDrink
    // console.log(priceButton.innerHTML
  } else if (checkboxChampurrado.checked == false) {
    priceButton.textContent = Number(priceButton.textContent) - priceDrink
  }
})

checkboxAtole.addEventListener('click',() => {
  const priceDrink = 12
  if (checkboxAtole.checked == true) {
    priceButton.textContent = Number(priceButton.textContent) + priceDrink
    // console.log(priceButton.innerHTML
  } else if (checkboxAtole.checked == false) {
    priceButton.textContent = Number(priceButton.textContent) - priceDrink
  }
})

checkboxChocolate.addEventListener('click',() => {
  const priceDrink = 12
  if (checkboxChocolate.checked == true) {
    priceButton.textContent = Number(priceButton.textContent) + priceDrink
  } else if (checkboxChocolate.checked == false) {
    priceButton.textContent = Number(priceButton.textContent) - priceDrink
  }
})

checkboxCafe.addEventListener('click',() => {
  const priceDrink = 12
  if (checkboxCafe.checked == true) {
    priceButton.textContent = Number(priceButton.textContent) + priceDrink
  } else if (checkboxCafe.checked == false) {
    priceButton.textContent = Number(priceButton.textContent) - priceDrink
  }
})


//agregar / quitando  productos
const mas = document.getElementById('agregar')
const menos = document.getElementById('quitar')
const cantidadProducts = document.getElementById('number-products')

mas.addEventListener('click', () =>{
  cantidadProducts.innerHTML = Number(cantidadProducts.textContent) + 1
  priceButton.innerHTML = Number(priceButton.textContent) + 25
})

menos.addEventListener('click', () => {
  if (Number(cantidadProducts.textContent) > 1) {
    cantidadProducts.innerHTML = Number(cantidadProducts.textContent) - 1
    priceButton.innerHTML = Number(priceButton.textContent) - 25
  }
})

//cambiando img del header segun el sabor que se elige
const imageGuajalotaHeader = document.getElementById('header-img-guajalota')

const saborVerde = document.getElementById('saborVerde')
saborVerde.addEventListener('click', () => {
  imageGuajalotaHeader.src = 'images/verde.png'
  guajalotas()
  saborVerde.style.opacity = '1'
})

const saborMole = document.getElementById('saborMole')
saborMole.addEventListener('click', () => {
  imageGuajalotaHeader.src = 'images/moles.png'
  guajalotas()
  saborMole.style.opacity = '1'
})

const saborRajas = document.getElementById('saborRajas')
saborRajas.addEventListener('click', () => {
  imageGuajalotaHeader.src = 'images/verde.png'
  guajalotas()
  saborRajas.style.opacity = '1'
})

const saborPina = document.getElementById('saborPina')
saborPina.addEventListener('click', () => {
  imageGuajalotaHeader.src = 'images/moles.png'
  guajalotas()
  saborPina.style.opacity = '1'
})

const saborPasas = document.getElementById('saborPasas')
saborPasas.addEventListener('click', () => {
  imageGuajalotaHeader.src = 'images/verde.png'
  guajalotas()
  saborPasas.style.opacity = '1'
})

const saborGuayaba = document.getElementById('saborGuayaba')
saborGuayaba.addEventListener('click', () => {
  imageGuajalotaHeader.src = 'images/moles.png'
  guajalotas()
  saborGuayaba.style.opacity = '1'
})

function guajalotas() {
  saborVerde.style.opacity = '.5'
  saborMole.style.opacity = '.5'
  saborRajas.style.opacity = '.5'
  saborPina.style.opacity = '.5'
  saborPasas.style.opacity = '.5'
  saborGuayaba.style.opacity = '.5'
}