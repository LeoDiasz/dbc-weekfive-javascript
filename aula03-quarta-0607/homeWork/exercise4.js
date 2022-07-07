//#region EXERCICIO 4

/*
4) Crie uma função para remover um elemento específico de uma lista;
	 // ex: Imagine que temos o seguinte 
	 // let lista = [ 'a', 4, 'Tiago', 187 ]
	 // e chamamos a função removeElemento(lista, 'Tiago')
	 // deve remover o elemento 'Tiago' da lista, fazendo com que fique [ 'a', 4, 187 ]
	 Obs: caso o elemento passado não exista na lista mostrar uma mensagem para o usuário informando.
*/

function removeElementSpecicInlist(listElements, element) {

	if (!Array.isArray(listElements) || listElements.length == 0) {
		const messageError = "Sua lista esta vazia ou não é uma. Verifique por gentileza."
		return messageError
 }

	const elementExists = listElements.indexOf(element)

	if (elementExists == -1) {
		const messageError = `Elemento não existe na lista`

		console.log(messageError)
		return messageError
	}

	const newList = []

	for (let i = 0; i < listElements.length; i ++) {
		if (i != elementExists) {
			newList.push(listElements[i])
		}
	}

	console.log(`Elemento removido ${element} de posição ${elementExists}. \n Sua lista agora ${newList}`)
	
	return newList
}

let listElements = [ 'a', 4, 'Tiago', 187, 4 ]

const result = removeElementSpecicInlist(listElements, 4)

console.log(result)

//Treinando outro metodo (usando recursos não passado nas aulas ainda)

function removeElementSpecicInlistMethodTwo(listElements, element) {

	if (!Array.isArray(listElements) || listElements.length == 0) {
		const messageError = "Sua lista esta vazia ou não é uma. Verifique por gentileza."
		return messageError
 }

	const elementExists = listElements.indexOf(element)

	if (elementExists == -1) {
		const messageError = `Elemento ${element} não existe na lista`
		console.log(messageError)

		return messageError
	}

	const elementDelete = listElements.splice(elementExists, 1)

	console.log(`Elemento removido ${elementDelete}. \n Sua lista agora ${listElements}`)
	
	return listElements
}

//#endregion