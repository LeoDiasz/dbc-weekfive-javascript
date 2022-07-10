
const menu = "\n 1 - Cadastrar produto \n 2 - Excluir produto \n 3 - Encontrar produto \n 4 - Listar produtos \n 5 - Descrições dos produtos cadastrados \n 6 - Selecione uma descrição \n 7 - Verificar patrimonio \n 8 - Todos produtos possuem preço valido \n 9 - Finalizar programa"

const topMenu = "|LOJINHA DO LEO DIAS - CADASTRO DE PRODUTOS|\n "

let listProducts = []
let generateId = 1
let isNotCloseProgram = true

//#region LISTA FUNÇÕES
const verifyListIsEmpty = (listProducts) => {
  if (listProducts.length === 0) {
    alert("Não possui produtos cadastrados.")
    return true
  } else {
    return false
  }
  
}

const verifyPriceProducts = (listProducts) => {

  if(verifyListIsEmpty(listProducts)) {
    return
  }

  const isValidPriceProducts = listProducts.every(product => !isNaN(product.price) && product.price > 0)

  if (isValidPriceProducts) {
    alert("Todos os preços são maiores que 0 e validos.")
  } else {
    alert("Nem todos os preços são validos.")
  }

}

const registerNewProduct = (listProducts) => {
  
  let descriptionProduct
  let isNotValidDescription = false
  
  do {
    descriptionProduct = prompt("Por gentileza, digite a descrição do produto:")

    isNotValidDescription = (!descriptionProduct || typeof(descriptionProduct) !== "string")

    if (isNotValidDescription) {
      alert("Digite uma descrição valida")
      continue
    }

  } while(isNotValidDescription)

  let priceProduct
  let isNotValidPrice = false
  
  do {
    priceProduct = parseFloat(prompt("Por gentileza, digite o preço do produto:"))
    
    isNotValidPrice = (isNaN(priceProduct) || priceProduct <= 0)

    if (isNotValidPrice) {
      alert("Por gentileza, digite um preço valido")
      continue
    }

  } while(isNotValidPrice)
  
  const newProduct = {
    id: generateId,
    description: descriptionProduct,
    price: priceProduct
  }

  const messageSucess = `Produto cadastrado com sucesso!\n Código: ${generateId}.\n Descrição: ${descriptionProduct}\n Preço: ${priceProduct}`

  alert(messageSucess)
  console.log(messageSucess)
  
  listProducts.push(newProduct)
  generateId += 1
  
  return newProduct

}

const removeProduct = (listProducts) => { 

  if(verifyListIsEmpty(listProducts)) {
    return
  }

  let codeProduct
  let isNotValidCode = false

  showListProducts(listProducts)

  do {
    codeProduct = parseInt(prompt("Digite o código do produto: "))

    isNotValidCode = (isNaN(codeProduct))

    if (isNotValidCode) {
      alert("Digite um código valido.")
      continue
    }

  } while(isNotValidCode)

  const resultSearch = listProducts.find(product => product.id === codeProduct)
  
  if (!resultSearch) {
    alert("Produto não existe no sistema.")
    return
  }

  const messageSucess = `Produto com o código ${codeProduct} excluido com sucesso.\nSua descrição: ${resultSearch.description}`
  
  alert(messageSucess)
  console.log(messageSucess)

  const positionElement = listProducts.indexOf(resultSearch)
  listProducts.splice(positionElement, 1)

  return resultSearch
}

const searchProduct = (listProducts) => { 

  if(verifyListIsEmpty(listProducts)) {
    return
  }

  let codeProductSearch
  let isNotValidCodeSearch = false

  showListProducts(listProducts)

  do {
    codeProductSearch = parseInt(prompt("Digite o código do produto: "))

    isNotValidCodeSearch = (isNaN(codeProductSearch))

    if (isNotValidCodeSearch) {
      alert("Digite um código valido.")
      continue
    }

  } while(isNotValidCodeSearch)

  const resultSearch = listProducts.find(product => product.id === codeProductSearch)
  
  if (!resultSearch) {
    alert("Produto não existe no sistema.")
    return
  }

  const messageSucess = `Produto encontrado.\nCódigo: ${resultSearch.id} \nDescrição: ${resultSearch.description}\nPreço: ${resultSearch.price}`
  
  alert(messageSucess)
  console.log(messageSucess)

  return resultSearch

}

const showListProducts = (listProducts) => {
  
  if(verifyListIsEmpty(listProducts)) {
    return
  }
 
  const listShow = listProducts.reduce( (valueNow, product) => {
    return valueNow + `Código: ${product.id} - Descrição: ${product.description} - Preço: ${product.price} \n`
  }, "")
  
  alert(`Lista produtos:\n${listShow}`)
  console.table(listProducts)

}

const showDescriptionsProducts = (listProducts) => {

  if(verifyListIsEmpty(listProducts)) {
    return
  }

  const listDescription = listProducts.map(product => product.description)

  const listDescriptionConcat = listDescription.reduce((valueNow, description) => valueNow + `Descrição: ${description}\n`, "")

  alert(`Lista descrição:\n${listDescriptionConcat}`)
  console.table(listDescription)

}

const ChooseDescription = (listProducts) => {

  if(verifyListIsEmpty(listProducts)) {
    return
  }
  
  let searchDescription = ""
  let isNotValidDescription = false

  showDescriptionsProducts(listProducts)

  do {
    searchDescription = prompt("Escolha uma descrição: ")

    isNotValidDescription = (!searchDescription || typeof(searchDescription) !== "string")

    if (isNotValidDescription) {
      alert("Digite uma descrição valida")
      continue
    }

  } while(isNotValidDescription)
  
  const listResult = listProducts.filter(product => product.description === searchDescription).map(product => {
    const newProduct = {description: product.description, price: product.price}
    return newProduct
  })

  if(listResult.length === 0) {
    alert("Não possui produtos com essa descrição.")
    return
  }

  const concatListResult = listResult.reduce((valueNow, product) => valueNow + `descrição: ${product.description} - Preço: ${product.price}\n`, "")

  alert(`Produtos com a descrição:\n${concatListResult}`)
  console.table(listResult)

  return listResult
}

const calculatePatrimony = (listProducts) => {

  if(verifyListIsEmpty(listProducts)) {
    return
  }

  const patrimony = listProducts.reduce((valueNow, product) => valueNow + product.price, 0)

  const messageCalculate = `Loja do Leo dias possui patrimonio total de R$${patrimony}`

  alert(messageCalculate)
  console.log(messageCalculate)

}

//#endregion

while(isNotCloseProgram) {

  const optionsChoose = parseInt(prompt(`${topMenu}\n Bem vindo! Escolha uma opção: ${menu}`))

  switch (optionsChoose) {
    case 1:
      registerNewProduct(listProducts)
      break

    case 2:
      removeProduct(listProducts)
      break

    case 3:
      searchProduct(listProducts)
      break

    case 4:
      showListProducts(listProducts)
      break

    case 5:
      showDescriptionsProducts(listProducts)
      break

    case 6:
      ChooseDescription(listProducts)
      break

    case 7:
      calculatePatrimony(listProducts)
      break

    case 8:
      verifyPriceProducts(listProducts)
      break
      
    case 9:
      alert("Até logo!")
      isNotCloseProgram = false
      break

    default:
        alert("Digite uma opção valida.")
  }
}
