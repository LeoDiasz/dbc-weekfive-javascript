class Colaborador {
  id = 0
  marcacoes = []
  name = ""

  constructor(name, id = 0) {
      this.name = name
      this.id = id
  }

  registerNewPoint = (day, hour) => {
    this.marcacoes.push(new Marcacao(day, hour))
  }

}

class Marcacao {
  day
  hour

  constructor (day, hour) {
    this.day = day
    this.hour = hour
  }
}

class Validacoes {

  listIsEmpty = (list) => {
    
    if (!list || list.length == 0) {
      alert("Não existe colaboradores registrados.")
      return true
    } else {
      return false
    }

  }

  nameIsNotValid = (name) => {
    if (!name || name.toUpperCase() == name.toLowerCase()) {
      alert("Nome passado não é valido")
      return true 
    } else {
      return false
    }
  }

  collaboratorExists = (listCollaborators, codeCollaborator) => {

    const result = listCollaborators.find(collaborator => collaborator.id == codeCollaborator)

    if (!result) {
      return false
    } else {
      return result
    }
  }

  existsPoints = (collaborator) => {

    if (!collaborator.marcacoes) {
      alert(`Não existe marcações do colaborador ${collaborator.name} no sistema`)
      return false
    } else {
      const pointsConcat = collaborator.marcacoes.reduce((value, marcacao) => value + `Dia: ${marcacao.day} - Hora: ${marcacao.hour} \n`, "")

      return pointsConcat
    }
  }

  validateDay = (day) => {

    if (isNaN(day)) {
      return false
    } else {
      return true
    }
  }

  validateHour = (hour) => {

    if (isNaN(hour)) {
      return false
    } else {
      return true
    }
  }

  existsDayRegister = (collaborator, day) => {

    const exists = collaborator.marcacoes.some(marcacao => marcacao.day === day)

    if (exists) {
      return true
    } else {
      return false
    }
  }
}

const listCollaborators = []
let generateId = 1

const validation = new Validacoes()

//#region LISTA FUNÇÕES
const registerNewCollaborator = () => {

  const registerName = prompt("Digite o nome do colaborador: ")

  if (validation.nameIsNotValid(registerName)) {
    registerNewCollaborator()
    return
  }

  const newCollaborator = new Colaborador(registerName, generateId)
  
  alert(`Colaborador ${registerName} registrado com sucesso. seu id: ${newCollaborator.id}`)

  listCollaborators.push(newCollaborator)
  generateId += 1

  return newCollaborator
}

const registerPoint = () => {
  if (validation.listIsEmpty(listCollaborators)) {
    return
  }

  showListCollaborators()

  const codeCollaborator = parseInt(prompt("Digite o código do colaborador procurado para registrar o ponto:"))

  const collaboratorExists = validation.collaboratorExists(listCollaborators, codeCollaborator)

  if(!collaboratorExists) {
    alert("Colaborador não existe no sistema")
    return
  }

  const day = parseInt(prompt("Digite o dia de registro: "))
  
  if (!validation.validateDay(day)) {
    alert("Digite um dia valido.")
    return
  }

  const hour = parseFloat(prompt("Digite a hora de registro: "))

  if (!validation.validateHour(hour)) {
    alert("Digite uma hora valida")
    return
  }

  if(validation.existsDayRegister(collaboratorExists, day)) {
    alert(`já existe uma marcação registrada no dia ${day}`)
    return
  }

  alert(`Registrado com sucesso a marcação do ponto.\n Colaborador: ${collaboratorExists.name} - Dia: ${day} - Hora: ${hour}`)

  collaboratorExists.registerNewPoint(day, hour)

}

const updateHoursPoint = () => {
  if (validation.listIsEmpty(listCollaborators)) {
    return
  }

  showListCollaborators()

  const codeCollaborator = parseInt(prompt("Digite o código do colaborador para atualizar horario de uma marcação: "))

  const collaboratorExists = validation.collaboratorExists(listCollaborators, codeCollaborator)

  if(!collaboratorExists) {
    alert("Colaborador não existe no sistema")
    return
  }

  const existsPoints = validation.existsPoints(collaboratorExists)

  if (!existsPoints) {
    alert(`Colaborador ${collaboratorExists.name} não possui marcação de pontos`)
    return
  }

  alert(`Lista marcações do colaborador:\n${existsPoints}`)

  const day = parseInt(prompt("Digite o dia de registro para alteração do horário: "))
  
  if (!validation.validateDay(day)) {
    alert("Digite um dia valido.")
    return
  }

  if(!validation.existsDayRegister(collaboratorExists, day)) {
    alert(`Não existe marcação no dia especificado ${day}`)
    return
  }

  const hour = parseFloat(prompt("Digite um novo horário: "))

  if (!validation.validateHour(hour)) {
    alert("Digite uma hora valida")
    return
  }

  collaboratorExists.marcacoes.forEach(marcacao => {
    if (marcacao.day === day) {
      alert(`Horario de marcação do dia ${day} alterado.\n Novo hórario: ${hour} - Antigo hórario: ${marcacao.hour}`)

      marcacao.hour = hour
      return
    }
  })
  
  return
  

}

const showListCollaborators = () => {
  if (validation.listIsEmpty(listCollaborators)) {
    return
  }

  const listCollaboratorsConcat = listCollaborators.reduce((value, collaborator)=> value + `Colaborador: ${collaborator.name} - código: ${collaborator.id} - marcacoes:\n${validation.existsPoints(collaborator)} \n`, "")

  alert(`Lista colaboradores:\n${listCollaboratorsConcat}`)
  
}

const showListCollaboratorsNotRegisterPoint = () => {
  if (validation.listIsEmpty(listCollaborators)) {
    return
  }

  const collaboratorsNotPoints = listCollaborators.filter(collaborator => collaborator.marcacoes.length === 0)

  if(!collaboratorsNotPoints.length) {
    alert("Todos colaboradores marcaram pontos")
    return
  }

  collaboratorsNotPointsconcat = collaboratorsNotPoints.reduce((value, collaborator) => value + `Nome: ${collaborator.name} - Código: ${collaborator.id} \n`, "")

  alert(`Lista de colaboradores que não marcaram ponto:\n${collaboratorsNotPointsconcat}`)

  return collaboratorsNotPoints
}

const showListPointsForCollaborator = () => {
  if (validation.listIsEmpty(listCollaborators)) {
    return
  }

  const codeCollaborator = parseInt(prompt("Digite o código do colaborador para ver sua lista de marcações."))

  const collaboratorExists = validation.collaboratorExists(listCollaborators, codeCollaborator)

  if(!collaboratorExists) {
    alert("Colaborador não existe no sistema")
    return
  }

  const existsPoints = validation.existsPoints(collaboratorExists)

  if (!existsPoints) {
    alert(`Colaborador ${collaboratorExists.name} não possui marcação de pontos`)
    return
  }

  alert(`Colaborador: ${collaboratorExists.name}- Marcações:\n${existsPoints}`)

  return
}

//#endregion

const menu = () => {

  const optionsMenu = `1 - Cadastrar colaborador\n 2 - Marcar ponto \n 3 - Editar as horas de uma marcação\n 4 - Ver lista de colaboradores \n 5 - Ver lista de colaboradores que ainda não marcaram o ponto \n 6 - Ver lista de todas as marcações com o nome do colaborador\n 7 - Encerrar`
  
  const chooseOptions = parseInt(prompt(`Seja bem vindo! escolha uma das opções:\n ${optionsMenu}`))

  switch(chooseOptions) {
    case 1:
      registerNewCollaborator()
      break
    case 2:
      registerPoint()
      break
    case 3:
      updateHoursPoint()
      break
    case 4:
      showListCollaborators()
      break
    case 5:
      showListCollaboratorsNotRegisterPoint()
      break 
    case 6:
      showListPointsForCollaborator()
      break 
    case 7:
      alert("Até logo!")
      return 7
    default:
      alert("Digite uma opção valida")
  }
  menu()
}

menu()