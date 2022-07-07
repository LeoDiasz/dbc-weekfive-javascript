// #region EXERCICIO 2
/*
2) Crie uma função de busca, que recebe 2 parâmetros (um array e um elemento) e retorna uma mensagem dizendo se aquele elemento
   existe no array e também qual a posição dele (índice)
   // Ex: minhaFuncao( ['a', 'cachorro', 255], 'cachorro' ) => retorna 'O elemento existe no array e a posição dele é: 1'
   // Ex: minhaFuncao( ['a', 'cachorro', 255], 255 ) => retorna 'O elemento existe no array e a posição dele é: 2'
   // Ex: minhaFuncao( ['a', 'cachorro', 255], 'abacate' ) => retorna 'O elemento não existe no array'
   // Ex: minhaFuncao( ['a', 'cachorro', 255], '255' ) => retorna 'O elemento não existe no array'
*/

function searchElementInList(listElements, element) {

   if (!Array.isArray(listElements) || listElements.length == 0) {
      const messageError = "Sua lista esta vazia ou não é uma. Verifique por gentileza."
      return messageError
   }

   const elementExists = listElements.indexOf(element)

   const message = elementExists == -1 ? "O elemento não existe no array" : `O elemento existe no array e a posição dele é ${elementExists}`

   return message
}

const listNumbers = [5, 4, 2, 1]

const result = searchElementInList(listNumbers, 1)

console.log(result)

//#endregion 