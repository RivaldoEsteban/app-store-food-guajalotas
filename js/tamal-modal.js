const agregarTamal = document.getElementById('agregar-tamal')
const quitarTamal = document.getElementById('quitar-tamal')
const cantidadTamal = document.getElementById('number-products-tamal')
const btnTamal = document.getElementById('btn-price-tamal')


agregarTamal.addEventListener('click' ,() => {
  cantidadTamal.innerHTML = Number(cantidadTamal.textContent) + 1
   btnTamal.innerHTML = Number(btnTamal.textContent) + 14
})

quitarTamal.addEventListener('click', () => {
  if (Number(cantidadTamal.textContent) > 1) {
    cantidadTamal.innerHTML = Number(cantidadTamal.textContent) - 1
    btnTamal.innerHTML = Number(btnTamal.textContent) - 14
  }
})


const saborVerdeTamal = document.getElementById('saborVerdeTamal')
const saborMoleTamal = document.getElementById('saborMoleTamal')
const saborRajasTamal = document.getElementById('saborRajasTamal')
const saborPinaTamal = document.getElementById('saborPinaTamal')
const saborPasasTamal = document.getElementById('saborPasasTamal')
const saborGuayabaTamal = document.getElementById('saborGuayabaTamal')


const tamalImage = document.getElementById('header-img-tamal')

saborVerdeTamal.addEventListener('click', () => {
  saboresTamalOpacity()
  saborVerdeTamal.style.opacity = '1'
  tamalImage.src = '../images/tamal-verde.png'
})

saborMoleTamal.addEventListener('click', () => {
  saboresTamalOpacity()
  saborMoleTamal.style.opacity = '1'
  tamalImage.src = '../images/tamal-mole.png'
})
saborGuayabaTamal.addEventListener('click', () => {
  saboresTamalOpacity()
  saborGuayabaTamal.style.opacity = '1'
  tamalImage.src = '../images/tamal-verde.png'
})
saborPinaTamal.addEventListener('click', () => {
  saboresTamalOpacity()
  saborPinaTamal.style.opacity = '1'
  tamalImage.src = '../images/tamal-verde.png'
})
saborPasasTamal.addEventListener('click', () => {
  saboresTamalOpacity()
  saborPasasTamal.style.opacity = '1'
  tamalImage.src = '../images/tamal-verde.png'
})


function saboresTamalOpacity (){
  saborGuayaba.style.opacity = '.5'
  saborVerdeTamal.style.opacity = '.5'
  saborMoleTamal.style.opacity = '.5'
  saborRajasTamal.style.opacity = '.5'
  saborPinaTamal.style.opacity = '.5'
  saborPasasTamal.style.opacity = '.5'
}

const comboChampurrado = document.getElementById('checkbox-champurrado-tamal')
const comboAtole = document.getElementById('checkbox-atole-tamal')
const comboChocolate = document.getElementById('checkbox-chocolate-tamal')
const comboCafe = document.getElementById('checkbox-cafe-tamal')

comboChampurrado.addEventListener('click', () => {
  const priceDrink = 12
  if (comboChampurrado.checked == true) {
    btnTamal.textContent = Number(btnTamal.textContent) + priceDrink
  } else if (comboChampurrado.checked == false) {
    btnTamal.textContent = Number(btnTamal.textContent) - priceDrink
  }
})
comboAtole.addEventListener('click', () => {
  const priceDrink = 12
  if (comboAtole.checked == true) {
    btnTamal.textContent = Number(btnTamal.textContent) + priceDrink
  } else if (comboAtole.checked == false) {
    btnTamal.textContent = Number(btnTamal.textContent) - priceDrink
  }
})
comboChocolate.addEventListener('click', () => {
  const priceDrink = 12
  if (comboChocolate.checked == true) {
    btnTamal.textContent = Number(btnTamal.textContent) + priceDrink
  } else if (comboChocolate.checked == false) {
    btnTamal.textContent = Number(btnTamal.textContent) - priceDrink
  }
})

comboCafe.addEventListener('click', () => {
  const priceDrink = 12
  if(comboCafe.checked == true) {
    btnTamal.textContent = Number(btnTamal.textContent) + priceDrink
  } else if (comboCafe.checked == false) {
    btnTamal.textContent = Number(btnTamal.textContent) - priceDrink
  }
})
