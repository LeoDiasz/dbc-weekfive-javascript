
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

  if (!valueName || !valueEmail || !valuePassword || !valueDate) {
    alert("Necessário preencher todos dados")
    return
  }

  if(valuePassword.length < 8) {
    alert("Necessário 8 caracteres para a senha.")
    return
  }

  const listPassword = valuePassword.split("")

  const existsNumberInPassword = listPassword.some(caracter => !isNaN(caracter))

  if(!existsNumberInPassword) {
    alert("Necessário pelo menos um numero na senha.")
    return
  }
  
  const existsStringUpperCaseInPassword = listPassword.filter(caracter => isNaN(caracter)).some(caracter => caracter == caracter.toUpperCase())
  
  if (!existsStringUpperCaseInPassword) {
    alert("Necessário pelo menos uma letra maiuscula na senha.")
    return
  }

  const existsStringLowerCaseInPassword = listPassword.filter(caracter => isNaN(caracter)).some(caracter => caracter == caracter.toLowerCase())

  if (!existsStringLowerCaseInPassword) {
    alert("Necessário pelo menos uma letra minuscula na senha.")
    return
  }

  const existsCharacterSpecialInPassword = listPassword.filter(caracter => isNaN(caracter) && caracter != " " && caracter.toUpperCase() == caracter.toLowerCase())

  if (!existsCharacterSpecialInPassword.length) {
    alert("Necessário pelo menos um caracter especial na senha")
    return
  }

  let newName = ""

  const listCharacteresName = [...valueName.trim()]

  listCharacteresName.forEach((caracter, index) => {
    if (index == 0) {
      newName += caracter.toUpperCase()
    } else if (caracter[index - 1] == " ") {
      newName += caracter.toUpperCase()
    } else {
      newName += caracter
    }
  })
 
  const createDate = new Date(valueDate)

  if (isNaN(createDate)) {
    alert("Data não é valida")
    return
  }

  const yearBirth = createDate.getFullYear()
  const dateNow = new Date()
  const yearNow = dateNow.getFullYear()

  if ((yearNow - yearBirth) < 18) {
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
    return

  }).catch(Error => {
    alert("Não foi possivel cadastrar, verifique os dados e tente novamente!")
    console.log(Error)
    return

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

window.onload = (() => {
  getListCollabotarors()
})

const api = axios.create(
  {
    baseURL: "http://localhost:3000"
  }
)

const buttonRegister = document.getElementById("button-register")
const buttonInput = document.getElementById("button-input")

const inputDate = document.getElementById("input-date")
const inputName = document.getElementById("input-name")
const inputEmail = document.getElementById("input-email")
const inputPassword = document.getElementById("input-password")

buttonRegister.addEventListener("click", alterPageToRegister)
buttonInput.addEventListener("click", verifyCollaborator)
inputDate.addEventListener("keyup", maskForDate)

