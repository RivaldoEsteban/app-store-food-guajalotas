const pagePrincipal1 = document.querySelector('#page-principal')//princiapl


const pageGuajolota = document.querySelector('#page-guajolotas-products')//sub page guajolota
const guajolotaProduct =  document.querySelector('#product-guajolota') // title de la section en la principal page
const guajolota = document.getElementById('guajolotas')//productos
guajolotaProduct.addEventListener ('click', () => {
  hidden()
  guajolota.style.display = 'block'
})
guajolota.addEventListener('click', () => {
  hidden()
  pagePrincipal1.style.display = 'none'
  pageGuajolota.style.display = 'block'
  printModalPrincipal('arrow-left')
})


const pageBebidas = document.querySelector('#page-bebidas-products')//sub page bebidas
const bebidasProduct = document.querySelector('#product-bebida')
const bebidas = document.getElementById('bebidas')
bebidasProduct.addEventListener ('click', () => {
  hidden()
  bebidas.style.display = 'block'
})

bebidas.addEventListener('click' , () => {
  hidden()
  pagePrincipal1.style.display = 'none'
  pageBebidas.style.display = 'block'
  printModalPrincipal('arrow-left-bebidas')
})


const pageTamales = document.querySelector('#page-tamales-products')//sub page tamales
const tamalesProduct =  document.querySelector('#product-tamales')
const tamales = document.getElementById('tamales')
tamalesProduct.addEventListener ('click', () => {
  hidden()
  tamales.style.display = 'block'
})
tamales.addEventListener('click', () => {
  hidden()
  pagePrincipal1.style.display = 'none'
  pageTamales.style.display = 'block'
  printModalPrincipal('arrow-left-tamales')
})

function hidden() {
  guajolota.style.display ='none'
  bebidas.style.display ='none'
  tamales.style.display ='none'
  pageGuajolota.style.display = 'none'
  pageBebidas.style.display = 'none'
  pageTamales.style.display = 'none'
}

function printModalPrincipal(id){
  const arrowLeft = document.getElementById(id)
  arrowLeft.addEventListener('click', () => {
    hidden()
    pagePrincipal1.style.display = 'block'
    guajolota.style.display = 'block'
  })
}