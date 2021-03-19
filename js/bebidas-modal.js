

export const precioFinal = document.getElementById('btn-price-bebidas')

import { priceButton } from "./guajolota-modal.js";
import { btnTamal } from "./tamal-modal.js";

// let pagar1 = document.getElementById('btn-precio-pagar')
// pagar1 = Number(priceButton.textContent) + Number(precioFinal.textContent) + Number(btnTamal.textContent)


//numero de cantidad selecionada
const cantidadBebidas = document.getElementById('number-products-bebidas')

const agregarBebidas = document.getElementById('agregar-bebidas')
agregarBebidas.addEventListener('click', () => {
  cantidadBebidas.innerHTML = Number(cantidadBebidas.textContent) + 1
  precioFinal.innerHTML = Number(precioFinal.textContent) + 12
})

const disminuirBebidas = document.getElementById('quitar-bebidas')
disminuirBebidas.addEventListener('click', () => {
  if (Number(cantidadBebidas.textContent) > 0) {
    cantidadBebidas.innerHTML = Number(cantidadBebidas.textContent) - 1
    precioFinal.innerHTML = Number(precioFinal.textContent) - 12
  }
})

// imagen principal de la bebida
const imageBebida = document.getElementById('header-img-bebida')

// cada sobre de bebida cambia la imagne principal (imageBebida)
const saborChampurrado = document.getElementById('sabor-champurrado')
saborChampurrado.addEventListener('click', () => {
  chooseDrinks()
  saborChampurrado.style.opacity = '1'
  imageBebida.src = '../images/cham1.png'
  const precio = Number(cantidadBebidas.textContent) * 12
  window.buyAllProducts6.innerHTML = printElementBebidas('champurrado', 'Champurrado', cantidadBebidas.textContent, precio)
})

const saborAroozLeche = document.getElementById('sabor-arroz')
saborAroozLeche.addEventListener('click', () => {
  chooseDrinks()
  saborAroozLeche.style.opacity = '1'
  imageBebida.src = '../images/arro1.png'
  const precio = Number(cantidadBebidas.textContent) * 12
  window.buyAllProducts6.innerHTML = printElementBebidas('arroz', 'Atole de Arroz con Leche', cantidadBebidas.textContent, precio)
})

const saborChocolate = document.getElementById('sabor-chocolate')
saborChocolate.addEventListener('click', () => {
  chooseDrinks()
  saborChocolate.style.opacity = '1'
  imageBebida.src = '../images/cham1.png'
  const precio = Number(cantidadBebidas.textContent) * 12
  window.buyAllProducts6.innerHTML = printElementBebidas('chocolate', 'Chocolate caliente', cantidadBebidas.textContent, precio)
})

const saborPiña = document.getElementById('sabor-piña')
saborPiña.addEventListener('click', () => {
  chooseDrinks()
  saborPiña.style.opacity = '1'
  imageBebida.src = '../images/arro1.png'
  const precio = Number(cantidadBebidas.textContent) * 12
  window.buyAllProducts6.innerHTML = printElementBebidas('arroz', 'Bebida de Piña', cantidadBebidas.textContent, precio)
})

const saborCafe = document.getElementById('sabor-cafe')
saborCafe.addEventListener('click', () => {
  chooseDrinks()
  saborCafe.style.opacity = '1'
  imageBebida.src = '../images/cham1.png'
  const precio = Number(cantidadBebidas.textContent) * 12
  window.buyAllProducts6.innerHTML = printElementBebidas('cafe', 'Café caliente', cantidadBebidas.textContent, precio)
})

const saborGuayabaB = document.getElementById('sabor-guayaba')
saborGuayabaB.addEventListener('click', () => {
  chooseDrinks()
  saborGuayabaB.style.opacity = '1'
  imageBebida.src = '../images/arro1.png'
  const precio = Number(cantidadBebidas.textContent) * 12
  window.buyAllProducts6.innerHTML = printElementBebidas('cafe', 'Chocolate caliente', cantidadBebidas.textContent,precio)
})

//guajocombo / agregar un sabor de guajolota
//cada clase agrega o disminuye el precio , dependiendo de la concidicional
const checkboxVerde = document.getElementById('checkbox-verde')
checkboxVerde.addEventListener('click', () => {
  const priceDrink = 25
  if (checkboxVerde.checked == true) {
  precioFinal.textContent = Number(precioFinal.textContent) + priceDrink
  window.buyAllProducts7.innerHTML = printElementBebidas('g-verde', 'Guajolota de Tamal de Rajas', 1, 25)
  } else if (checkboxVerde.checked == false) {
  precioFinal.textContent = Number(precioFinal.textContent) - priceDrink
  window.buyAllProducts7.innerHTML = ''
  }
})

const checkboxMole = document.getElementById('checkbox-mole')
checkboxMole.addEventListener('click', () => {
  const priceDrink = 25
  if (checkboxMole.checked == true) {
  precioFinal.textContent = Number(precioFinal.textContent) + priceDrink
    window.buyAllProducts8.innerHTML = printElementBebidas('g-mole', 'Guajolota de Tamal de Mole', 1, 25)

  } else if (checkboxMole.checked == false) {
  precioFinal.textContent = Number(precioFinal.textContent) - priceDrink
  window.buyAllProducts8.innerHTML = ''
  }
})

const checkboxGuayaba = document.getElementById('checkbox-guayaba')
checkboxGuayaba.addEventListener('click', () => {
  const priceDrink = 25
  if (checkboxGuayaba.checked == true) {
  precioFinal.textContent = Number(precioFinal.textContent) + priceDrink
  window.buyAllProducts9.innerHTML = printElementBebidas('g-guayaba', 'Guajolota de Tamal de Guayaba', 1, 25)
  } else if (checkboxGuayaba.checked == false) {
  precioFinal.textContent = Number(precioFinal.textContent) - priceDrink
  window.buyAllProducts9.innerHTML = ''
  }
})

const checkboxPina = document.getElementById('checkbox-pina')
checkboxPina.addEventListener('click', () => {
  const priceDrink = 25
  if (checkboxPina.checked == true) {
  precioFinal.textContent = Number(precioFinal.textContent) + priceDrink
  window.buyAllProducts10.innerHTML = printElementBebidas('g-pina', 'Guajolota de Tamal de Piña', 1 , 25)
  } else if (checkboxPina.checked == false) {
  precioFinal.textContent = Number(precioFinal.textContent) - priceDrink
  window.buyAllProducts10.innerHTML = ''
  }
})

const checkboxPasas = document.getElementById('checkbox-pasas')
checkboxPasas.addEventListener('click', () => {
  const priceDrink = 25
  if (checkboxPasas.checked == true) {
  precioFinal.textContent = Number(precioFinal.textContent) + priceDrink
  window.buyAllProducts11.innerHTML = printElementBebidas('g-pasas', 'Guajolota de Tamal de Pasas', 1 , 25)
  } else if (checkboxPasas.checked == false) {
  precioFinal.textContent = Number(precioFinal.textContent) - priceDrink
  window.buyAllProducts11.innerHTML = ''
  }
})


function printElementBebidas (img, name, cantidad, precio) {
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

function chooseDrinks() {
  saborChampurrado.style.opacity = '.5'
  saborAroozLeche.style.opacity = '.5'
  saborChocolate.style.opacity = '.5'
  saborPiña.style.opacity = '.5'
  saborCafe.style.opacity = '.5'
  saborGuayabaB.style.opacity = '.5'
}


const btnBebidas = document.getElementById('btn-bebidas')
btnBebidas.addEventListener('click', () => {
  let cobrarBebidas = document.getElementById('btn-precio-pagar')
  cobrarBebidas.textContent = Number(priceButton.textContent) + Number(precioFinal.textContent) + Number(btnTamal.textContent)
})