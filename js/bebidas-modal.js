

export const precioFinal = document.getElementById('btn-price-bebidas')

import { priceButton } from "./guajolota-modal.js";
import { btnTamal } from "./tamal-modal.js";


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
  imageBebida.src = 'images/cham1.png'
  const precio = Number(cantidadBebidas.textContent) * 12
  const product6 = document.getElementById('buyAllProducts6')
  product6.innerHTML = printElementBebidas('champurrado', 'Champurrado', cantidadBebidas.textContent, precio)
  product6.addEventListener('click', () => {
    guajalotasProduct('6')
  })
})

const saborAroozLeche = document.getElementById('sabor-arroz')
saborAroozLeche.addEventListener('click', () => {
  chooseDrinks()
  saborAroozLeche.style.opacity = '1'
  imageBebida.src = 'images/arro1.png'
  const precio = Number(cantidadBebidas.textContent) * 12
  const product6 = document.getElementById('buyAllProducts6')
  product6.innerHTML = printElementBebidas('arroz', 'Atole de Arroz con Leche', cantidadBebidas.textContent, precio)
  product6.addEventListener('click', () => {
    closedProduct('6')
  })
})

const saborChocolate = document.getElementById('sabor-chocolate')
saborChocolate.addEventListener('click', () => {
  chooseDrinks()
  saborChocolate.style.opacity = '1'
  imageBebida.src = 'images/cham1.png'
  const precio = Number(cantidadBebidas.textContent) * 12
  const product6 = document.getElementById('buyAllProducts6')
  product6.innerHTML = printElementBebidas('chocolate', 'Chocolate caliente', cantidadBebidas.textContent, precio)
  product6.addEventListener('click', () => {
    closedProduct('6')
  })
})

const saborPiña = document.getElementById('sabor-piña')
saborPiña.addEventListener('click', () => {
  chooseDrinks()
  saborPiña.style.opacity = '1'
  imageBebida.src = 'images/arro1.png'
  const precio = Number(cantidadBebidas.textContent) * 12
  const product6 = document.getElementById('buyAllProducts6')
  product6.innerHTML = printElementBebidas('arroz', 'Bebida de Piña', cantidadBebidas.textContent, precio)
  product6.addEventListener('click', () => {
    closedProduct('6')
  })
})

const saborCafe = document.getElementById('sabor-cafe')
saborCafe.addEventListener('click', () => {
  chooseDrinks()
  saborCafe.style.opacity = '1'
  imageBebida.src = 'images/cham1.png'
  const precio = Number(cantidadBebidas.textContent) * 12
  const product6 = document.getElementById('buyAllProducts6')
  product6.innerHTML = printElementBebidas('cafe', 'Café caliente', cantidadBebidas.textContent, precio)
  product6.addEventListener('click', () => {
    closedProduct('6')
  })
})

const saborGuayabaB = document.getElementById('sabor-guayaba')
saborGuayabaB.addEventListener('click', () => {
  chooseDrinks()
  saborGuayabaB.style.opacity = '1'
  imageBebida.src = 'images/arro1.png'
  const precio = Number(cantidadBebidas.textContent) * 12
  const product6 = document.getElementById('buyAllProducts6')
  product6.innerHTML = printElementBebidas('cafe', 'Chocolate caliente', cantidadBebidas.textContent,precio)
  product6.addEventListener('click', () => {
    closedProduct('6')
  })
})

//guajocombo / agregar un sabor de guajolota
//cada clase agrega o disminuye el precio , dependiendo de la concidicional
const checkboxVerde = document.getElementById('checkbox-verde')
checkboxVerde.addEventListener('click', () => {
  const priceDrink = 25
  const product7 = document.getElementById('buyAllProducts7')
  if (checkboxVerde.checked == true) {
  precioFinal.textContent = Number(precioFinal.textContent) + priceDrink
  product7.innerHTML = printElementBebidas('g-verde', 'Guajolota de Tamal de Rajas', 1, 25)
  product7.addEventListener('click', () => {
    let cobrar = document.getElementById('btn-precio-pagar')
    cobrar.textContent = (Number(priceButton.textContent) + Number(precioFinal.textContent) + Number(btnTamal.textContent)) - 25
    precioFinal.textContent = Number(precioFinal.textContent) - priceDrink
    product7.innerHTML = ''
  })
  } else if (checkboxVerde.checked == false) {
  precioFinal.textContent = Number(precioFinal.textContent) - priceDrink
  product7.innerHTML = ''
  }
})

const checkboxMole = document.getElementById('checkbox-mole')
checkboxMole.addEventListener('click', () => {
  const priceDrink = 25
  const product8 = document.getElementById('buyAllProducts8')
  if (checkboxMole.checked == true) {
  precioFinal.textContent = Number(precioFinal.textContent) + priceDrink
  product8.innerHTML = printElementBebidas('g-mole', 'Guajolota de Tamal de Mole', 1, 25)
  product8.addEventListener('click', () => {
      let cobrar = document.getElementById('btn-precio-pagar')
      cobrar.textContent = (Number(priceButton.textContent) + Number(precioFinal.textContent) + Number(btnTamal.textContent)) - 25
      precioFinal.textContent = Number(precioFinal.textContent) - priceDrink
      product8.innerHTML = ''
  })
  } else if (checkboxMole.checked == false) {
  precioFinal.textContent = Number(precioFinal.textContent) - priceDrink
  product8.innerHTML = ''
  }
})

const checkboxGuayaba = document.getElementById('checkbox-guayaba')
checkboxGuayaba.addEventListener('click', () => {
  const priceDrink = 25
  const product9 = document.getElementById('buyAllProducts9')
  if (checkboxGuayaba.checked == true) {
  precioFinal.textContent = Number(precioFinal.textContent) + priceDrink
  product9.innerHTML = printElementBebidas('g-guayaba', 'Guajolota de Tamal de Guayaba', 1, 25)
  product9.addEventListener('click', () => {
    let cobrar = document.getElementById('btn-precio-pagar')
    cobrar.textContent = (Number(priceButton.textContent) + Number(precioFinal.textContent) + Number(btnTamal.textContent)) - 25
    precioFinal.textContent = Number(precioFinal.textContent) - priceDrink
    product9.innerHTML = ''
  })
  } else if (checkboxGuayaba.checked == false) {
  precioFinal.textContent = Number(precioFinal.textContent) - priceDrink
  product9.innerHTML = ''
  }
})

const checkboxPina = document.getElementById('checkbox-pina')
checkboxPina.addEventListener('click', () => {
  const priceDrink = 25
  const product10 = document.getElementById('buyAllProducts10')
  if (checkboxPina.checked == true) {
  precioFinal.textContent = Number(precioFinal.textContent) + priceDrink
  product10.innerHTML = printElementBebidas('g-pina', 'Guajolota de Tamal de Piña', 1 , 25)
  product10.addEventListener('click', () => {
    let cobrar = document.getElementById('btn-precio-pagar')
    cobrar.textContent = (Number(priceButton.textContent) + Number(precioFinal.textContent) + Number(btnTamal.textContent)) - 25
    precioFinal.textContent = Number(precioFinal.textContent) - priceDrink
    product10.innerHTML = ''
   })
  } else if (checkboxPina.checked == false) {
  precioFinal.textContent = Number(precioFinal.textContent) - priceDrink
  product10.innerHTML = ''
  }
})

const checkboxPasas = document.getElementById('checkbox-pasas')
checkboxPasas.addEventListener('click', () => {
  const priceDrink = 25
  const product11 = document.getElementById('buyAllProducts11')
  if (checkboxPasas.checked == true) {
  precioFinal.textContent = Number(precioFinal.textContent) + priceDrink
  product11.innerHTML = printElementBebidas('g-pasas', 'Guajolota de Tamal de Pasas', 1 , 25)
  product11.addEventListener('click', () => {
    let cobrar = document.getElementById('btn-precio-pagar')
    cobrar.textContent = (Number(priceButton.textContent) + Number(precioFinal.textContent) + Number(btnTamal.textContent)) - 25
    precioFinal.textContent = Number(precioFinal.textContent) - priceDrink
    product11.innerHTML = ''
   })
  } else if (checkboxPasas.checked == false) {
  precioFinal.textContent = Number(precioFinal.textContent) - priceDrink
  product11.innerHTML = ''
  }
})


function printElementBebidas (img, name, cantidad, precio) {
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

function chooseDrinks() {
  saborChampurrado.style.opacity = '.5'
  saborAroozLeche.style.opacity = '.5'
  saborChocolate.style.opacity = '.5'
  saborPiña.style.opacity = '.5'
  saborCafe.style.opacity = '.5'
  saborGuayabaB.style.opacity = '.5'
}

function saboresOpacity1() {
  saborChampurrado.style.opacity = '1'
  saborAroozLeche.style.opacity = '1'
  saborChocolate.style.opacity = '1'
  saborPiña.style.opacity = '1'
  saborCafe.style.opacity = '1'
  saborGuayabaB.style.opacity = '1'
}


const btnBebidas = document.getElementById('btn-bebidas')
btnBebidas.addEventListener('click', () => {
  let cobrarBebidas = document.getElementById('btn-precio-pagar')
  cobrarBebidas.textContent = Number(priceButton.textContent) + Number(precioFinal.textContent) + Number(btnTamal.textContent)
})

function closedProduct(id) {
  const producto1 = document.getElementById(`buyAllProducts${id}`)
  let precio = Number(cantidadBebidas.textContent) * 12
  let cobrar = document.getElementById('btn-precio-pagar')
  cobrar.textContent = (Number(priceButton.textContent) + Number(precioFinal.textContent) + Number(btnTamal.textContent)) - precio
  precioFinal.textContent = Number(precioFinal.textContent) - precio
  cantidadBebidas.textContent = 0
  saboresOpacity1()
  producto1.innerHTML = ''
}