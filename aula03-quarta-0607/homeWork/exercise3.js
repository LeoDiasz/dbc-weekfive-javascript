//#region EXERCICIO 3

/*
3) Crie uma função que recebe como parâmetros um caracter e um array de 
	caracteres e que remova todas as ocorrências daquele caracter no array; 
   // ex. funcaoRemoveCaracterDoArray('a', [ 'c', 'a', 'texto', 'a' ] )
   => deve retornar o array: [ 'c', 'texto' ] (pois removeu todos 'a');
*/

function removeCharacterInList(listElements, elementRemove) {

   if (!Array.isArray(listElements) || listElements.length == 0) {
      const messageError = "Sua lista esta vazia ou não é uma. Verifique por gentileza."
      return messageError
   }

   const newListElements = []

   for (element of listElements) {
      if (element !== elementRemove) {
         newListElements.push(element)
      }
   }

   return newListElements
}

const listElements = ['a', "b", "d", "c", "a", "a", "b"]

const result = removeCharacterInList(listElements, "a")

console.log(result)



//Treinando outro metodo (usando recursos não passado nas aulas ainda)
function removeCharacterInListMethodTwo(listElements, elementRemove) {
   
   if (!Array.isArray(listElements) || listElements.length == 0) {
      const messageError = "Sua lista esta vazia ou não é uma. Verifique por gentileza."
      return messageError
   }

   const newListElements = listElements.filter( item => item !== elementRemove)

   return newListElements
}


// #endregion