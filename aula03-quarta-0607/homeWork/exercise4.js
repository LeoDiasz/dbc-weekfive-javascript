/*
4) Crie uma função para remover um elemento específico de uma lista;
	 // ex: Imagine que temos o seguinte 
	 // let lista = [ 'a', 4, 'Tiago', 187 ]
	 // e chamamos a função removeElemento(lista, 'Tiago')
	 // deve remover o elemento 'Tiago' da lista, fazendo com que fique [ 'a', 4, 187 ]
	 Obs: caso o elemento passado não exista na lista mostrar uma mensagem para o usuário informando.
*/


function removeElementSpecicInlist(listElements, element) {

	const elementExists = listElements.indexOf(element)

	const newList = listElements.splice(elementExists, 1)

	console.log(newList)
	console.log(listElements)
}

let listElements = [ 'a', 4, 'Tiago', 187, 4 ]


const result = removeElementSpecicInlist(listElements, 4)

//Treinando outro metodo (usando recursos não passado nas aulas ainda)


function removeElementSpecicInlistMethodTwo(listElements, element) {

	const elementExists = listElements.indexOf(element)

	const newList = listElements.splice(elementExists, 1)

	console.log(newList)
	console.log(listElements)
}
