export const priceButton = document.getElementById('btn-price')

import { precioFinal } from "./bebidas-modal.js";
import { btnTamal } from "./tamal-modal.js";

console.log(priceButton)

const checkboxChampurrado = document.getElementById('checkbox-champurrado')
checkboxChampurrado.addEventListener('click',() => {
  const priceDrink = 12
  if (checkboxChampurrado.checked == true) {
    priceButton.textContent = Number(priceButton.textContent) + priceDrink
    window.buyAllProducts2.innerHTML = printElementGuajolota('champurrado', 'Champurrado', 1, 12)
  } else if (checkboxChampurrado.checked == false){
    priceButton.textContent = Number(priceButton.textContent) - priceDrink
    window.buyAllProducts2.innerHTML = ''
  }
})

const checkboxAtole = document.getElementById('checkbox-atole')
checkboxAtole.addEventListener('click',() => {
  const priceDrink = 12
  if (checkboxAtole.checked == true) {
    priceButton.textContent = Number(priceButton.textContent) + priceDrink
    window.buyAllProducts3.innerHTML = printElementGuajolota('arroz', 'Atole de Arroz', 1, 12)
  } else if (checkboxAtole.checked == false) {
    priceButton.textContent = Number(priceButton.textContent) - priceDrink
    window.buyAllProducts3.innerHTML = ''
  }
})

const checkboxChocolate = document.getElementById('checkbox-chocolate')
checkboxChocolate.addEventListener('click',() => {
  const priceDrink = 12
  if (checkboxChocolate.checked == true) {
    priceButton.textContent = Number(priceButton.textContent) + priceDrink
    window.buyAllProducts4.innerHTML = printElementGuajolota('chocolate', 'Chocolate caliente', 1, 12)
  } else if (checkboxChocolate.checked == false) {
    priceButton.textContent = Number(priceButton.textContent) - priceDrink
    window.buyAllProducts4.innerHTML = ''
  }

})

const checkboxCafe = document.getElementById('checkbox-cafe')
checkboxCafe.addEventListener('click',() => {
  const priceDrink = 12
  if (checkboxCafe.checked == true) {
    priceButton.textContent = Number(priceButton.textContent) + priceDrink
  } else if (checkboxCafe.checked == false) {
    priceButton.textContent = Number(priceButton.textContent) - priceDrink
  }
  window.buyAllProducts5.innerHTML = printElementGuajolota('cafe', 'Café caliente', 1, 12)
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
  const precio = Number(cantidadProducts.textContent) * 25
  window.buyAllProducts1.innerHTML = printElementGuajolota('g-verde', 'Guajolota de Tamal Verde', cantidadProducts.textContent, precio)
})

const saborMole = document.getElementById('saborMole')
saborMole.addEventListener('click', () => {
  imageGuajalotaHeader.src = 'images/moles.png'
  guajalotas()
  saborMole.style.opacity = '1'
  const precio = Number(cantidadProducts.textContent) * 25
  window.buyAllProducts1.innerHTML = printElementGuajolota('g-mole', 'Guajolota de Tamal de Mole', cantidadProducts.textContent, precio)
})

const saborRajas = document.getElementById('saborRajas')
saborRajas.addEventListener('click', () => {
  imageGuajalotaHeader.src = 'images/verde.png'
  guajalotas()
  saborRajas.style.opacity = '1'
  const precio = Number(cantidadProducts.textContent) * 25
  window.buyAllProducts1.innerHTML = printElementGuajolota('g-guayaba', 'Guajolota de Tamal de Rajas', cantidadProducts.textContent, precio)
})

const saborPina = document.getElementById('saborPina')
saborPina.addEventListener('click', () => {
  imageGuajalotaHeader.src = 'images/moles.png'
  guajalotas()
  saborPina.style.opacity = '1'
  const precio = Number(cantidadProducts.textContent) * 25
  window.buyAllProducts1.innerHTML = printElementGuajolota('g-pina', 'Guajolota de Tamal de Piña', cantidadProducts.textContent, precio)
})

const saborPasas = document.getElementById('saborPasas')
saborPasas.addEventListener('click', () => {
  imageGuajalotaHeader.src = 'images/verde.png'
  guajalotas()
  saborPasas.style.opacity = '1'
  const precio = Number(cantidadProducts.textContent) * 25
  window.buyAllProducts1.innerHTML = printElementGuajolota('g-pasas', 'Guajolota de Tamal de Pasas', cantidadProducts.textContent, precio)
})

const saborGuayaba = document.getElementById('saborGuayaba')
saborGuayaba.addEventListener('click', () => {
  imageGuajalotaHeader.src = 'images/moles.png'
  guajalotas()
  saborGuayaba.style.opacity = '1'
  const precio = Number(cantidadProducts.textContent) * 25
  window.buyAllProducts1.innerHTML = printElementGuajolota('g-guayaba', 'Guajolota de Tamal de Guayaba', cantidadProducts.textContent, precio)
})

function printElementGuajolota(img, name, cantidad, precio) {
  return `
    <div class="product">
      <img src="images/${img}.png" alt="" width="100px">
      <div class="description-product">
        <p class="desciption-name">${name}</p>
        <p class="cantidad-product">Cantidad: <b id="cantidad-products">${cantidad}</b></p>
      </div>
      <p class="precio-product">$ <b id="final-price-product">${precio}</b></p>
    </div>
  `
}

function guajalotas() {
  saborVerde.style.opacity = '.5'
  saborMole.style.opacity = '.5'
  saborRajas.style.opacity = '.5'
  saborPina.style.opacity = '.5'
  saborPasas.style.opacity = '.5'
  saborGuayaba.style.opacity = '.5'
}

const btnGuajolota = document.getElementById('btn-guajolota')
btnGuajolota.addEventListener('click', () => {
  let cobrar = document.getElementById('btn-precio-pagar')
  cobrar.textContent = Number(priceButton.textContent) + Number(precioFinal.textContent) + Number(btnTamal.textContent)
})