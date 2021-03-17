const agregarBebidas = document.getElementById('agregar-bebidas')
const disminuirBebidas = document.getElementById('quitar-bebidas')

const cantidadBebidas = document.getElementById('number-products-bebidas')

const precioFinal = document.getElementById('btn-price-bebidas')

agregarBebidas.addEventListener('click', () => {
  cantidadBebidas.innerHTML = Number(cantidadBebidas.textContent) + 1
  precioFinal.innerHTML = Number(precioFinal.textContent) + 12
})

disminuirBebidas.addEventListener('click', () => {
  if (Number(cantidadBebidas.textContent) > 1) {
    cantidadBebidas.innerHTML = Number(cantidadBebidas.textContent) - 1
    precioFinal.innerHTML = Number(precioFinal.textContent) - 12
  }
})

const saborChampurrado = document.getElementById('sabor-champurrado')
const saborAroozLeche = document.getElementById('sabor-arroz')
const saborChocolate = document.getElementById('sabor-chocolate')
const saborPiña = document.getElementById('sabor-piña')
const saborCafe = document.getElementById('sabor-cafe')
const saborGuayabaB = document.getElementById('sabor-guayaba')

const imageBebida = document.getElementById('header-img-bebida')



saborChampurrado.addEventListener('click', () => {
  chooseDrinks()
  saborChampurrado.style.opacity = '1'
  imageBebida.src = '../images/cham1.png'
})
saborAroozLeche.addEventListener('click', () => {
  chooseDrinks()
  saborAroozLeche.style.opacity = '1'
  imageBebida.src = '../images/arro1.png'
})
saborChocolate.addEventListener('click', () => {
  chooseDrinks()
  saborChocolate.style.opacity = '1'
  imageBebida.src = '../images/cham1.png'
})
saborPiña.addEventListener('click', () => {
  chooseDrinks()
  saborPiña.style.opacity = '1'
  imageBebida.src = '../images/arro1.png'
})
saborCafe.addEventListener('click', () => {
  chooseDrinks()
  saborCafe.style.opacity = '1'
  imageBebida.src = '../images/cham1.png'
})
saborGuayabaB.addEventListener('click', () => {
  chooseDrinks()
  saborGuayabaB.style.opacity = '1'
  imageBebida.src = '../images/arro1.png'
})

function chooseDrinks() {
  saborChampurrado.style.opacity = '.5'
  saborAroozLeche.style.opacity = '.5'
  saborChocolate.style.opacity = '.5'
  saborPiña.style.opacity = '.5'
  saborCafe.style.opacity = '.5'
  saborGuayabaB.style.opacity = '.5'
}

const checkboxVerde = document.getElementById('checkbox-verde')
const checkboxMole = document.getElementById('checkbox-mole')
const checkboxGuayaba = document.getElementById('checkbox-guayaba')
const checkboxPina = document.getElementById('checkbox-pina')
const checkboxPasas = document.getElementById('checkbox-pasas')


checkboxVerde.addEventListener('click', () => {
  const priceDrink = 25
  if (checkboxVerde.checked == true) {
  precioFinal.textContent = Number(precioFinal.textContent) + priceDrink
  } else if (checkboxVerde.checked == false) {
  precioFinal.textContent = Number(precioFinal.textContent) - priceDrink
  }
})
checkboxMole.addEventListener('click', () => {
  const priceDrink = 25
  if (checkboxMole.checked == true) {
  precioFinal.textContent = Number(precioFinal.textContent) + priceDrink
  } else if (checkboxMole.checked == false) {
  precioFinal.textContent = Number(precioFinal.textContent) - priceDrink
  }
})
checkboxGuayaba.addEventListener('click', () => {
  const priceDrink = 25
  if (checkboxGuayaba.checked == true) {
  precioFinal.textContent = Number(precioFinal.textContent) + priceDrink
  } else if (checkboxGuayaba.checked == false) {
  precioFinal.textContent = Number(precioFinal.textContent) - priceDrink
  }
})
checkboxPina.addEventListener('click', () => {
  const priceDrink = 25
  if (checkboxPina.checked == true) {
  precioFinal.textContent = Number(precioFinal.textContent) + priceDrink
  } else if (checkboxPina.checked == false) {
  precioFinal.textContent = Number(precioFinal.textContent) - priceDrink
  }
})
checkboxPasas.addEventListener('click', () => {
  const priceDrink = 25
  if (checkboxPasas.checked == true) {
  precioFinal.textContent = Number(precioFinal.textContent) + priceDrink
  } else if (checkboxPasas.checked == false) {
  precioFinal.textContent = Number(precioFinal.textContent) - priceDrink
  }
})