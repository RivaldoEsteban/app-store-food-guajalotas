
//paginas  de la aplicacion
const principal = document.getElementById('page-principal')//section principal
const guajolotaPage = document.getElementById('page-guajolotas-products') // section guajolotas
const bebidasPage = document.getElementById('page-bebidas-products') // section bebidas
const tamalesPage = document.getElementById('page-tamales-products') // section tamales
const modalCartBuy = document.getElementById('page-shopping-cart')//modal de los productos que quieren comprar


function hiddenPage() {
  principal.style.display = 'none'
  guajolotaPage.style.display = 'none'
  bebidasPage.style.display = 'none'
  tamalesPage.style.display = 'none'
  tamalesPage.style.display = 'none'
  modalCartBuy.style.display = 'none'
}

//accediendo al modal del carrito por medio de click en el icono buy-cart

const iconCart = document.getElementById('carrito-compras')
iconCart.addEventListener('click', () => {
  hiddenPage()
  modalCartBuy.style.display = 'block'
})

const arrowLeft = document.getElementById('arrow-left-section-buy') // icono arrow-left / retroceder principal-page
arrowLeft.addEventListener('click', () => {
  hiddenPage()
  principal.style.display = 'block'
  window.guajolotas.style.display = 'block'
})

const buyGuajootas = document.getElementById('btn-guajolota')
buyGuajootas.addEventListener('click', () => {
  hiddenPage()
  modalCartBuy.style.display = 'block'
})

const buyBebidas = document.getElementById('btn-bebidas')
buyBebidas.addEventListener('click', () => {
  hiddenPage()
  modalCartBuy.style.display = 'block'
})

const buyTamales = document.getElementById('btn-tamales-1')
buyTamales.addEventListener('click', () => {
  hiddenPage()
  modalCartBuy.style.display = 'block'
})

