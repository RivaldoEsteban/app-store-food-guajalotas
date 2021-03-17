const pagePrincipal = document.querySelector('#page-principal') // modal principal / primera pagina
const pageGuajalotas = document.querySelector('#page-guajolotas-products') //modal guajalotas / segunda pagina
const guajolotasProducts = document.querySelector('#guajolotas') // section guajalotas  / click / print/ modal guajalotas
const arrowLeft = document.querySelector('#arrow-left')

guajolotasProducts.addEventListener('click', () => {
  pagePrincipal.style.display = 'none'
  pageGuajalotas.style.display = 'block'
})

arrowLeft.addEventListener('click', () => {
  pagePrincipal.style.display = 'block'
  pageGuajalotas.style.display = 'none'
})
