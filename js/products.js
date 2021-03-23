const pagePrincipal1 = document.querySelector('#page-principal')//princiapl
const pageGuajolota = document.querySelector('#page-guajolotas-products')//sub page guajolota
const pageBebidas = document.querySelector('#page-bebidas-products')//sub page bebidas
const pageTamales = document.querySelector('#page-tamales-products')//sub page tamales


const GuajolotaTitle =  document.querySelector('#product-guajolota') // title de la section en la principal page
const BebidasTitle = document.querySelector('#product-bebida')
const TamalesTitle =  document.querySelector('#product-tamales')

const guajolotaProduct = document.getElementById('guajolotaProducts')
const bebidasProduct = document.getElementById('bebidasProducts')
const tamalesProduct = document.getElementById('tamalesProducts')

GuajolotaTitle.addEventListener('click' ,() => {
  hiddenProduct()
  guajolotaProduct.style.display = 'block'
  titleGuajolota() //agrega una clase que añade un border bottom
})
BebidasTitle.addEventListener('click' ,() => {
  hiddenProduct()
  bebidasProduct.style.display = 'block'
  titleBebidas()
})
TamalesTitle.addEventListener('click' ,() => {
  hiddenProduct()
  tamalesProduct.style.display = 'block'
  titleTamales()
})


function printModalPrincipal(id){
  const arrowLeft = document.getElementById(id)
  arrowLeft.addEventListener('click', () => {
    hidden()
    pagePrincipal1.style.display = 'block'
    guajolota.style.display = 'block'
  })
}





//Guajolotas-pagina principal
const productListGuajolota1 = document.getElementById('principal-guajota-productList-1')
productListGuajolota1.addEventListener('click', () => {
  changeImg('verde', 'Guajolota de Tamal Verde')
  pagePrincipal1.style.display = 'none'
  pageGuajolota.style.display = 'block'
})

const productListGuajolota2 = document.getElementById('principal-guajota-productList-2')
productListGuajolota2.addEventListener('click', () => {
  changeImg('g-mole', 'Guajolota de Tamal de Mole')
  pagePrincipal1.style.display = 'none'
  pageGuajolota.style.display = 'block'
})

const productListGuajolota3 = document.getElementById('principal-guajota-productList-3')
productListGuajolota3.addEventListener('click', () => {
  changeImg('g-pina', 'Guajolota de Tamal de Piña')
  pagePrincipal1.style.display = 'none'
  pageGuajolota.style.display = 'block'
})

const productListGuajolota4 = document.getElementById('principal-guajota-productList-4')
productListGuajolota4.addEventListener('click', () => {
  changeImg('g-pasas', 'Guajolota de Tamal de pasas')
  pagePrincipal1.style.display = 'none'
  pageGuajolota.style.display = 'block'
})


//bebidas pagina principal
const productListBebidas1 = document.getElementById('principal-bebidas-producList1')
productListBebidas1.addEventListener('click', () => {
  changeImgBebidas('cham1', 'champurrado')
  pagePrincipal1.style.display = 'none'
  pageBebidas.style.display = 'block'
})
const productListBebidas2 = document.getElementById('principal-bebidas-producList2')
productListBebidas2.addEventListener('click', () => {
  changeImgBebidas('arro1', 'Atole de Arroz con Leche')
  pagePrincipal1.style.display = 'none'
  pageBebidas.style.display = 'block'
})

const productListBebidas3 = document.getElementById('principal-bebidas-producList3')
productListBebidas3.addEventListener('click', () => {
  changeImgBebidas('chocolate', 'Chocolate Caliente')
  pagePrincipal1.style.display = 'none'
  pageBebidas.style.display = 'block'
})

const productListBebidas4 = document.getElementById('principal-bebidas-producList4')
productListBebidas4.addEventListener('click', () => {
  changeImgBebidas('cafe', 'Café Negro')
  pagePrincipal1.style.display = 'none'
  pageBebidas.style.display = 'block'
})

//tamales pagina princiapal
const productListTamal1 = document.getElementById('principal-tamal-producList1')
productListTamal1.addEventListener('click', () => {
  changeImg('tamal-verde', 'Tamal Verde')
  pagePrincipal1.style.display = 'none'
  pageTamales.style.display = 'block'
})

const productListTamal2 = document.getElementById('principal-tamal-producList2')
productListTamal2.addEventListener('click', () => {
  changeImg('champurrado', '')
  pagePrincipal1.style.display = 'none'
  pageTamales.style.display = 'block'
})

const productListTamal3 = document.getElementById('principal-tamal-producList3')
productListTamal3.addEventListener('click', () => {
  changeImg('champurrado', '')
  pagePrincipal1.style.display = 'none'
  pageTamales.style.display = 'block'
})

const productListTamal4 = document.getElementById('principal-tamal-producList4')
productListTamal4.addEventListener('click', () => {
  changeImg('champurrado', '')
  pagePrincipal1.style.display = 'none'
  pageTamales.style.display = 'block'
})

const productListTamal5 = document.getElementById('principal-tamal-producList5')
productListTamal5.addEventListener('click', () => {
  changeImg('champurrado', '')
  pagePrincipal1.style.display = 'none'
  pageTamales.style.display = 'block'
})


function changeImg(img,name) {
  const guajolotaImg = document.getElementById('header-img-guajalota')
  const guajolotaTitle = document.getElementById('product-name')
  guajolotaImg.src = `images/${img}.png`
  guajolotaTitle.textContent = `${name}`
}

function changeImgBebidas(img, name) {
  const bebidasImg = document.getElementById('header-img-bebida')
  const title = document.getElementById('product-name-bebidas')
  bebidasImg.src = `images/${img}.png`
  title.textContent = `${name}`
}


function hiddenProduct() {
  guajolotaProduct.style.display = 'none'
  bebidasProduct.style.display = 'none'
  tamalesProduct.style.display = 'none'
}

function hiddenPage() {
  pagePrincipal1.style.display = 'none'
  pageGuajolota.style.display = 'none'
  pageBebidas.style.display = 'none'
  pageTamales.style.display = 'none'
}

const arrowLeft = document.getElementById('arrow-left')
arrowLeft.addEventListener('click', () => {
  hiddenPage()
  pagePrincipal1.style.display = 'block'
  GuajolotaTitle.classList.add('border')
  titleGuajolota()
})

const arrowLeftBebidas = document.getElementById('arrow-left-bebidas')
arrowLeftBebidas.addEventListener('click' , () => {
  hiddenPage()
  hiddenProduct()
  pagePrincipal1.style.display = 'block'
  bebidasProduct.style.display = 'block'
  titleBebidas()
})

const arrowLeftTamales = document.getElementById('arrow-left-tamales')
arrowLeftTamales.addEventListener('click', () => {
  hiddenPage()
  hiddenProduct()
  pagePrincipal1.style.display = 'block'
  tamalesProduct.style.display = 'block'
  titleTamales()
})

//agregando una clase a las secciones de cada producto en la pagina principal
function titleGuajolota() {
  GuajolotaTitle.classList.add('border')
  BebidasTitle.classList.remove('border')
  TamalesTitle.classList.remove('border')
}

function titleBebidas() {
  GuajolotaTitle.classList.remove('border')
  BebidasTitle.classList.add('border')
  TamalesTitle.classList.remove('border')
}

function titleTamales() {
  GuajolotaTitle.classList.remove('border')
  BebidasTitle.classList.remove('border')
  TamalesTitle.classList.add('border')
}