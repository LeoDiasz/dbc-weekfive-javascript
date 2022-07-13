
const createNewTodo = (event) => {

  const input = document.getElementById("todo-input")
  
  const inputValue = input.value.trim()

  if (!input.value ) {
    alert("Informe uma descrição para o To Do")
    input.value = ""
    return
  }

  const listTodo = document.getElementById("list-todo")

  const newTodo = document.createElement("div")
  newTodo.classList.add("card-todo")

  const divChild = document.createElement("div")

  const contentCheckElement = document.createElement("i")
  contentCheckElement.classList.add("fa-solid", "fa-check")

  const buttonCheckElement = document.createElement("button")
  buttonCheckElement.appendChild(contentCheckElement)
  buttonCheckElement.setAttribute("id", "check-button")
  buttonCheckElement.addEventListener("click", checkTodo)

  const textTodo = document.createElement("p")
  textTodo.textContent = inputValue

  const contentButtonDelete = document.createElement("i")
  contentButtonDelete.classList.add("fa-solid","fa-trash")

  const buttonDelete = document.createElement("button")
  buttonDelete.setAttribute("id", "button-delete")
  buttonDelete.classList.add("button-delete")
  buttonDelete.appendChild(contentButtonDelete)
  buttonDelete.addEventListener("click", deleteTodo)
 
  divChild.append(buttonCheckElement, textTodo)
  newTodo.append(divChild, buttonDelete)
  listTodo.appendChild(newTodo)

  const textMain = document.getElementById("text-main")

  const countListTodoChildren = listTodo.children.length

  textMain.textContent = `To dos ${countListTodoChildren}` 

  input.value = ""
 
} 

const deleteTodo = (event) => {

  const confirmDelete = confirm("Tem certeza que deseja excluir?")

  if (confirmDelete) {
    const buttonElement = event.target.parentElement

    const elementParent = buttonElement.parentElement

    const listTodo = document.getElementById("list-todo")

    listTodo.removeChild(elementParent)

    const countListTodoChildren = listTodo.children.length

    const textMain = document.getElementById("text-main")

    alert("To do excluido com sucesso!")

    if (!countListTodoChildren) {
      textMain.textContent = 'Nenhum "To do" cadastrado ainda'
      return
    }
    
    textMain.textContent = `To dos ${countListTodoChildren}`
    
  }

}

const checkTodo = (event) => {
  
  const element = event.target

  const buttonParent = element.parentElement

  const cardParent = (buttonParent.parentElement).parentElement

  console.log(cardParent)

  if(element.classList[1] == "fa-check") {
    element.classList.toggle("fa-check")
    element.classList.toggle("fa-x")

    cardParent.classList.add("card-completed")
  
    alert("To Do Concluido")
  } else {
    element.classList.toggle("fa-x")
    element.classList.toggle("fa-check")

    cardParent.classList.remove("card-completed")
    alert("To do desmarcado")
  } 

  console.log(element.classList)

}

const buttonInput = document.getElementById("button-input")

buttonInput.addEventListener("click", createNewTodo)






