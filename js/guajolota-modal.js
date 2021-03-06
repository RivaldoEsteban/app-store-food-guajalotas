export let priceButton = document.getElementById('btn-price')

import { precioFinal } from "./bebidas-modal.js";
import { btnTamal } from "./tamal-modal.js";

//agregar / quitando  productos
const mas = document.getElementById('agregar')
const menos = document.getElementById('quitar')
const cantidadProducts = document.getElementById('number-products')
const cantidadBebidas = document.getElementById('cantidad-champurrado')


mas.addEventListener('click', () =>{
  cantidadProducts.innerHTML = Number(cantidadProducts.textContent) + 1
  priceButton.innerHTML = Number(priceButton.textContent) + 25
})

menos.addEventListener('click', () => {
  if (Number(cantidadProducts.textContent) > 0) {
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
  let precio = Number(cantidadProducts.textContent) * 25
  const producto1 = document.getElementById('buyAllProducts1')
  producto1.innerHTML = printElementGuajolota('g-verde', 'Guajolota de Tamal Verde', cantidadProducts.textContent, precio)
  producto1.addEventListener('click', () => {
  closedProduct('1',25)
  })
})

const saborMole = document.getElementById('saborMole')
saborMole.addEventListener('click', () => {
  imageGuajalotaHeader.src = 'images/moles.png'
  guajalotas()
  saborMole.style.opacity = '1'
  const precio = Number(cantidadProducts.textContent) * 25
  const producto1 = document.getElementById('buyAllProducts1')
  producto1.innerHTML = printElementGuajolota('g-mole', 'Guajolota de Tamal de Mole', cantidadProducts.textContent, precio)
  producto1.addEventListener('click', () => {
    closedProduct('1',25)
  })
})

const saborRajas = document.getElementById('saborRajas')
saborRajas.addEventListener('click', () => {
  imageGuajalotaHeader.src = 'images/verde.png'
  guajalotas()
  saborRajas.style.opacity = '1'
  const precio = Number(cantidadProducts.textContent) * 25
  const producto1 = document.getElementById('buyAllProducts1')
  producto1.innerHTML = printElementGuajolota('g-guayaba', 'Guajolota de Tamal de Rajas', cantidadProducts.textContent, precio)
  producto1.addEventListener('click', () => {
    closedProduct('1',25)
  })
})

const saborPina = document.getElementById('saborPina')
saborPina.addEventListener('click', () => {
  imageGuajalotaHeader.src = 'images/moles.png'
  guajalotas()
  saborPina.style.opacity = '1'
  const precio = Number(cantidadProducts.textContent) * 25
  const producto1 = document.getElementById('buyAllProducts1')
  producto1.innerHTML = printElementGuajolota('g-pina', 'Guajolota de Tamal de Pi??a', cantidadProducts.textContent, precio)
  producto1.addEventListener('click', () => {
    closedProduct('1',25)
  })
})

const saborPasas = document.getElementById('saborPasas')
saborPasas.addEventListener('click', () => {
  imageGuajalotaHeader.src = 'images/verde.png'
  guajalotas()
  saborPasas.style.opacity = '1'
  const precio = Number(cantidadProducts.textContent) * 25
  const producto1 = document.getElementById('buyAllProducts1')
  producto1.innerHTML = printElementGuajolota('g-pasas', 'Guajolota de Tamal de Pasas', cantidadProducts.textContent, precio)
  producto1.addEventListener('click', () => {
    closedProduct('1',25)
  })
})

const saborGuayaba = document.getElementById('saborGuayaba')
saborGuayaba.addEventListener('click', () => {
  imageGuajalotaHeader.src = 'images/moles.png'
  guajalotas()
  saborGuayaba.style.opacity = '1'
  const precio = Number(cantidadProducts.textContent) * 25
  const producto1 = document.getElementById('buyAllProducts1')
  producto1.innerHTML = printElementGuajolota('g-guayaba', 'Guajolota de Tamal de Guayaba', cantidadProducts.textContent, precio)
  producto1.addEventListener('click', () => {
    closedProduct('1',25)
  })
})





// const checkboxCafe = document.getElementById('checkbox-cafe')
// checkboxCafe.addEventListener('click', () => {
//   const priceDrink = 12
//   const producto5 = document.getElementById('buyAllProducts5')
//   if (checkboxCafe.checked == true) {
//     priceButton.textContent = Number(priceButton.textContent) + priceDrink
//     producto5.addEventListener('click', () => {
//       let cobrar5 = document.getElementById('btn-precio-pagar')
//       cobrar5.textContent = (Number(priceButton.textContent) + Number(precioFinal.textContent) + Number(btnTamal.textContent)) - 12
//       producto5.innerHTML = ''
//     })
//   } else if (checkboxCafe.checked == false) {
//     priceButton.textContent = Number(priceButton.textContent) - priceDrink
//     producto5.innerHTML = ''
//   }
// })

//funcion que imprime un div con todos los elementos necesarios , en este ejercio ese div se pinta con cada peticion del producto
// se imprime en final-sale.js
function printElementGuajolota(img, name, cantidad, precio) {
  return`
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

// sabores de productos / opacity .5  cuando eliges el sabor , solo ese sabor tendra opacity 1
function guajalotas() {
  saborVerde.style.opacity = '.5'
  saborMole.style.opacity = '.5'
  saborRajas.style.opacity = '.5'
  saborPina.style.opacity = '.5'
  saborPasas.style.opacity = '.5'
  saborGuayaba.style.opacity = '.5'
}

  function guajalotasProduct() {
  saborVerde.style.opacity = '1'
  saborMole.style.opacity = '1'
  saborRajas.style.opacity = '1'
  saborPina.style.opacity = '1'
  saborPasas.style.opacity = '1'
  saborGuayaba.style.opacity = '1'
}

// pinta la sumatoria del precio total de cada seccion y lo lleva al modal final-sal.js / button
const btnGuajolota = document.getElementById('btn-guajolota')
btnGuajolota.addEventListener('click', () => {
  let cobrar = document.getElementById('btn-precio-pagar') // id del boton del modal buy cart
  cobrar.textContent = Number(priceButton.textContent) + Number(precioFinal.textContent) + Number(btnTamal.textContent)
})

function closedProduct(id,price) {
  const producto1 = document.getElementById(`buyAllProducts${id}`)
  let precio = Number(cantidadProducts.textContent) * `${price}`
  let cobrar = document.getElementById('btn-precio-pagar')
  cobrar.textContent = (Number(priceButton.textContent) + Number(precioFinal.textContent) + Number(btnTamal.textContent)) - precio
  priceButton.textContent = Number(priceButton.textContent) - precio
  cantidadProducts.textContent = 0
  guajalotasProduct()
  producto1.innerHTML = ''
}



const disminuirBebidas = document.getElementById('disminuir-bebida-champurrado')
const agregarBebidas = document.getElementById('agregar-bebida-champurrado')

disminuirBebidas.addEventListener ('click',() =>{
  if(cantidadBebidas.textContent > 0){
    cantidadBebidas.textContent = Number(cantidadBebidas.textContent) - 1
    priceButton.textContent = Number(priceButton.textContent) - 12
    const printChampurrado= document.getElementById('buyAllProducts2')
    const precio = Number(cantidadBebidas.textContent) * 12
    printChampurrado.innerHTML = printElementGuajolota('champurrado','Champurrado', cantidadBebidas.textContent, precio )
  }
})

agregarBebidas.addEventListener ('click',() =>{
  cantidadBebidas.textContent = Number(cantidadBebidas.textContent) + 1
  priceButton.textContent = Number(priceButton.textContent) + 12
  const printChampurrado = document.getElementById('buyAllProducts2')
  const precio = Number(cantidadBebidas.textContent) * 12
  printChampurrado.innerHTML = printElementGuajolota('champurrado', 'Champurrado', cantidadBebidas.textContent, precio)
  printChampurrado.addEventListener('click', () => {
    let cobrar = document.getElementById('btn-precio-pagar')
    cobrar.textContent = cobrar.textContent - cobrar.textContent
    priceButton.textContent = priceButton.textContent - (precio/2)
    cantidadBebidas.textContent = 0
    printChampurrado.innerHTML = ''
  })
})