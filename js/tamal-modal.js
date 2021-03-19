export const btnTamal = document.getElementById('btn-price-tamal')

import { priceButton } from "./guajolota-modal.js";
import { precioFinal } from "./bebidas-modal.js";

// let pagar3 = document.getElementById('btn-precio-pagar')
// pagar3 = Number(priceButton.textContent) + Number(precioFinal.textContent) + Number(btnTamal.textContent)

const cantidadTamal = document.getElementById('number-products-tamal')

const agregarTamal = document.getElementById('agregar-tamal')
agregarTamal.addEventListener('click' ,() => {
  cantidadTamal.innerHTML = Number(cantidadTamal.textContent) + 1
  btnTamal.innerHTML = Number(btnTamal.textContent) + 14
})

const quitarTamal = document.getElementById('quitar-tamal')
quitarTamal.addEventListener('click', () => {
  if (Number(cantidadTamal.textContent) > 0) {
    cantidadTamal.innerHTML = Number(cantidadTamal.textContent) - 1
    btnTamal.innerHTML = Number(btnTamal.textContent) - 14
  }
})

// sabores de tamal
const tamalImage = document.getElementById('header-img-tamal')

const saborVerdeTamal = document.getElementById('saborVerdeTamal')
saborVerdeTamal.addEventListener('click', () => {
  saboresTamalOpacity()
  saborVerdeTamal.style.opacity = '1'
  tamalImage.src = '../images/tamal-verde.png'
  const precio = Number(cantidadTamal.textContent) * 14
  const product12 = document.getElementById('buyAllProducts12')
  product12.innerHTML =printElementTamales('ver2', 'Tamal Verde', cantidadTamal.textContent, precio)
  product12.addEventListener('click', () => {
    let cobrar = document.getElementById('btn-precio-pagar')
    cobrar.textContent = (Number(priceButton.textContent) + Number(precioFinal.textContent) + Number(btnTamal.textContent)) - precio
    product12.innerHTML = ''
  })
})

const saborMoleTamal = document.getElementById('saborMoleTamal')
saborMoleTamal.addEventListener('click', () => {
  saboresTamalOpacity()
  saborMoleTamal.style.opacity = '1'
  tamalImage.src = '../images/tamal-mole.png'
  const precio = Number(cantidadTamal.textContent) * 14
  const product12 = document.getElementById('buyAllProducts12')
  product12.innerHTML =printElementTamales('mole2', 'Tamal de Mole', cantidadTamal.textContent, precio)
  product12.addEventListener('click', () => {
    let cobrar = document.getElementById('btn-precio-pagar')
    cobrar.textContent = (Number(priceButton.textContent) + Number(precioFinal.textContent) + Number(btnTamal.textContent)) - precio
    product12.innerHTML = ''
  })
})

const saborGuayabaTamal = document.getElementById('saborGuayabaTamal')
saborGuayabaTamal.addEventListener('click', () => {
  saboresTamalOpacity()
  saborGuayabaTamal.style.opacity = '1'
  tamalImage.src = '../images/tamal-verde.png'
  const precio = Number(cantidadTamal.textContent) * 14
  const product12 = document.getElementById('buyAllProducts12')
  product12.innerHTML =printElementTamales('tamal-gua', 'Tamal de Guayaba', cantidadTamal.textContent, precio)
  product12.addEventListener('click', () => {
    let cobrar = document.getElementById('btn-precio-pagar')
    cobrar.textContent = (Number(priceButton.textContent) + Number(precioFinal.textContent) + Number(btnTamal.textContent)) - precio
    product12.innerHTML = ''
  })
})

const saborPinaTamal = document.getElementById('saborPinaTamal')
saborPinaTamal.addEventListener('click', () => {
  saboresTamalOpacity()
  saborPinaTamal.style.opacity = '1'
  tamalImage.src = '../images/tamal-verde.png'
  const precio = Number(cantidadTamal.textContent) * 14
  const product12 = document.getElementById('buyAllProducts12')
  product12.innerHTML =printElementTamales('tamal-pina', 'Tamal de Piña', cantidadTamal.textContent, precio)
  product12.addEventListener('click', () => {
    let cobrar = document.getElementById('btn-precio-pagar')
    cobrar.textContent = (Number(priceButton.textContent) + Number(precioFinal.textContent) + Number(btnTamal.textContent)) - precio
    product12.innerHTML = ''
  })
})

const saborPasasTamal = document.getElementById('saborPasasTamal')
saborPasasTamal.addEventListener('click', () => {
  saboresTamalOpacity()
  saborPasasTamal.style.opacity = '1'
  tamalImage.src = '../images/tamal-verde.png'
  const precio = Number(cantidadTamal.textContent) * 14
  const product12 = document.getElementById('buyAllProducts12')
  product12.innerHTML =printElementTamales('tamal-pasas', 'Tamal de Pasas', cantidadTamal.textContent, precio)
  product12.addEventListener('click', () => {
    let cobrar = document.getElementById('btn-precio-pagar')
    cobrar.textContent = (Number(priceButton.textContent) + Number(precioFinal.textContent) + Number(btnTamal.textContent)) - precio
    product12.innerHTML = ''
  })
})

const saborRajasTamal = document.getElementById('saborRajasTamal')
saborRajasTamal.addEventListener('click', () => {
  saboresTamalOpacity()
  saborRajasTamal.style.opacity = '1'
  tamalImage.src = '../images/tamal-verde.png'
  const precio = Number(cantidadTamal.textContent) * 14
  const product12 = document.getElementById('buyAllProducts12')
  product12.innerHTML =printElementTamales('mole2', 'Tamal de Rajas', cantidadTamal.textContent, precio)
  product12.addEventListener('click', () => {
    let cobrar = document.getElementById('btn-precio-pagar')
    cobrar.textContent = (Number(priceButton.textContent) + Number(precioFinal.textContent) + Number(btnTamal.textContent)) - precio
    product12.innerHTML = ''
  })
})


// bebidas para hacer un juacombo
const comboChampurrado = document.getElementById('checkbox-champurrado-tamal')
comboChampurrado.addEventListener('click', () => {
  const priceDrink = 12
  const product13 = document.getElementById('buyAllProducts13')
  if (comboChampurrado.checked == true) {
    btnTamal.textContent = Number(btnTamal.textContent) + priceDrink
    product13.innerHTML = printElementTamales('champurrado', 'Bebida de Champurrado', 1, 12)
    product13.addEventListener('click', () => {
      let cobrar = document.getElementById('btn-precio-pagar')
      cobrar.textContent = (Number(priceButton.textContent) + Number(precioFinal.textContent) + Number(btnTamal.textContent)) - 12
      product13.innerHTML = ''
    })
  } else if (comboChampurrado.checked == false) {
    btnTamal.textContent = Number(btnTamal.textContent) - priceDrink
    product13.innerHTML = ''
  }
})

const comboAtole = document.getElementById('checkbox-atole-tamal')
comboAtole.addEventListener('click', () => {
  const priceDrink = 12
  const product14 = document.getElementById('buyAllProducts14')
  if (comboAtole.checked == true) {
    btnTamal.textContent = Number(btnTamal.textContent) + priceDrink
    product14.innerHTML = printElementTamales('arroz', 'Bebida de Atole de Arroz', 1, 12)
    product14.addEventListener('click', () => {
      let cobrar = document.getElementById('btn-precio-pagar')
      cobrar.textContent = (Number(priceButton.textContent) + Number(precioFinal.textContent) + Number(btnTamal.textContent)) - 12
      product14.innerHTML = ''
    })
  } else if (comboAtole.checked == false) {
    btnTamal.textContent = Number(btnTamal.textContent) - priceDrink
    product14.innerHTML = ''
  }
})

const comboChocolate = document.getElementById('checkbox-chocolate-tamal')
comboChocolate.addEventListener('click', () => {
  const priceDrink = 12
  const product15 = document.getElementById('buyAllProducts15')
  if (comboChocolate.checked == true) {
    btnTamal.textContent = Number(btnTamal.textContent) + priceDrink
    product15.innerHTML = printElementTamales('chocolate','Chocolate caliente', 1, 12)
    product15.addEventListener('click', () => {
      let cobrar = document.getElementById('btn-precio-pagar')
      cobrar.textContent = (Number(priceButton.textContent) + Number(precioFinal.textContent) + Number(btnTamal.textContent)) - 12
      product15.innerHTML = ''
    })
  } else if (comboChocolate.checked == false) {
    btnTamal.textContent = Number(btnTamal.textContent) - priceDrink
    product15.innerHTML = ''
  }
})

const comboCafe = document.getElementById('checkbox-cafe-tamal')
comboCafe.addEventListener('click', () => {
  const priceDrink = 12
  const product16 = document.getElementById('buyAllProducts16')
  if(comboCafe.checked == true) {
    btnTamal.textContent = Number(btnTamal.textContent) + priceDrink
    product16.innerHTML = printElementTamales('cafe', 'Café caliente', 1, 12)
    product16.addEventListener('click', () => {
      let cobrar = document.getElementById('btn-precio-pagar')
      cobrar.textContent = (Number(priceButton.textContent) + Number(precioFinal.textContent) + Number(btnTamal.textContent)) - 12
      product16.innerHTML = ''
    })
  } else if (comboCafe.checked == false) {
    btnTamal.textContent = Number(btnTamal.textContent) - priceDrink
    product16.innerHTML = ''
  }
})


function printElementTamales (img, name, cantidad, precio) {
  return `
  <div class="product" id='producto'>
    <img src="images/${img}.png" alt="" width="100px">
    <div class="description-product">
      <p class="desciption-name">${name}</p>
      <p class="cantidad-product">Cantidad: <b id="cantidad-products">${cantidad}</b></p>
    </div>
    <img src="images/closed.png" alt="" class="closed" id="closed">
    <p class="precio-product">$ <b id="final-price-product">${precio}</b></p>
  </div>
  `
}


function saboresTamalOpacity() {
  saborGuayabaTamal.style.opacity = '.5'
  saborVerdeTamal.style.opacity = '.5'
  saborMoleTamal.style.opacity = '.5'
  saborRajasTamal.style.opacity = '.5'
  saborPinaTamal.style.opacity = '.5'
  saborPasasTamal.style.opacity = '.5'
}

const buttonTamales = document.getElementById('btn-tamales-1')

buttonTamales.addEventListener('click' , () => {
  let cobrarTamales = document.getElementById('btn-precio-pagar')
  cobrarTamales.textContent = Number(priceButton.textContent) + Number(precioFinal.textContent) + Number(btnTamal.textContent)
})