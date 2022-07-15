class Colaborador {
  id
  nome
  email
  senha
  dataNascimento

  constructor (nome, email, senha, dataNascimento) {
    this.nome = nome
    this.email = email
    this.senha = senha
    this.dataNascimento = dataNascimento
  }
  
}

window.onload = (() => {
  getListCollabotarors()
})

const alterPageToRegister = (event) => {

  const collaboratorsSection = document.getElementById("collaborators")
  const formRegister = document.getElementById("form-register")
  
  collaboratorsSection.classList.toggle("remove-content")
  formRegister.classList.toggle("remove-content")
  
  const buttonContent = event.target.textContent.trim()

  event.target.textContent = (buttonContent == "Cadastrar") ? "Voltar" : "Cadastrar"

}

const getListCollabotarors = () => {

  try {
    api.get("/colaboradores").then((response) => { 
      const {data} = response

      showListCollaborators(data)

    })
  } catch(Error) {
    console.log(Error)
  }
}

const showListCollaborators = (listCollaborators) => {

  if(!listCollaborators.length) {
    return
  }

  listCollaborators.forEach(collaborator => {
    const listCollaboratorsContent = document.getElementById("list-collaborators")

    const listCard = document.createElement("li")
    listCard.classList.add("card-collaborator")

    const name = document.createElement("span")
    const email = document.createElement("span")
    const date = document.createElement("span")

    name.textContent = collaborator.nome
    email.textContent = collaborator.email
    date.textContent = collaborator.dataNascimento

    listCard.append(name, date, email)
    listCollaboratorsContent.append(listCard)
  })
}

const verifyCollaborator = (event) => {
  event.preventDefault()

  const valueName = inputName.value
  const valueEmail = inputEmail.value
  const valuePassword = inputPassword.value
  const valueDate = inputDate.value

  console.log(valueName, valueEmail, valuePassword, valueDate)

  if (!valueName || !valueEmail || !valuePassword || !valueDate) {
    alert("Necessário preencher todos dados")
    return
  }

  if(valuePassword.length < 8) {
    alert("Necessário 8 caracteres para a senha.")
    return
  }

  const listPassword = valuePassword.split("")

  const existsNumber = listPassword.some(caracter => !isNaN(caracter))

  if(!existsNumber) {
    alert("Necessário pelo menos um numero na senha.")
    return
  }

  const existsStringUpperCase = listPassword.some(caracter => caracter === caracter.toUpperCase())
  
  if (!existsStringUpperCase) {
    alert("Necessário pelo menos uma letra maiuscula na senha.")
    return
  }

  const existsStringLowerCase = listPassword.some(caracter => caracter == caracter.toLowerCase())

  if (!existsStringLowerCase) {
    alert("Necessário pelo menos uma letra minuscula na senha.")
    return
  }


  let newName = ""

  for (let i = 0; i < valueName.length; i ++) {

    if (i == 0) {
      newName += valueName[i].toUpperCase()

    } else if (valueName[ i - 1] == " ") {
      newName += valueName[i].toUpperCase()

    } else {
      newName += valueName[i]
    }
  }

  const createDate = new Date(valueDate)

  if (isNaN(createDate)) {
    alert("Data não é valida")
    return
  }

  const yearBirth = createDate.getFullYear()
  const dateNow = new Date()

  if (dateNow.getFullYear() - yearBirth < 18) {
    alert("Precisa ser maior de 18 anos para se cadastrar")
    return
  }

  const newCollaborator = new Colaborador(newName, valueEmail, valuePassword, valueDate)

  createCollaborator(newCollaborator)

}


const createCollaborator = (collaborator) => {

  api.post("/colaboradores", collaborator).then(response => {

    alert(`Colaborador cadastro com sucesso:\nNome: ${collaborator.nome} Email: ${collaborator.email} - Data nascimento: ${collaborator.dataNascimento}`)
    clearInputs()

  }).catch(Error => {

    alert("Não foi possivel cadastrar, verifique os dados e tente novamente!")
    console.log(Error)
  })

  

}

const maskForDate = (event) => {

  let valueDigit = event.target.value

  if(valueDigit.length == 2) {
    event.target.value += "/"
  }

  if (valueDigit.length ==  5) {
    event.target.value += "/"
  }
  
}


const clearInputs = () => {
  inputDate.textContent = ""
  inputName.textContent = ""
  inputEmail.textContent = ""
  inputPassword.textContent = ""

}

const api = axios.create(
  {
    baseURL: "http://localhost:3000"
  }
)

const buttonRegister = document.getElementById("button-register")
buttonRegister.addEventListener("click", alterPageToRegister)

const buttonInput = document.getElementById("button-input")
const inputDate = document.getElementById("input-date")
const inputName = document.getElementById("input-name")
const inputEmail = document.getElementById("input-email")
const inputPassword = document.getElementById("input-password")

buttonInput.addEventListener("click", verifyCollaborator)
inputDate.addEventListener("keyup", maskForDate)
