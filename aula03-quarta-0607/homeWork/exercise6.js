/*
// EXERCÍCIO BÔNUS (SÓ FAÇA SE TIVER TERMINADO TODOS OS ANTERIORES)
6) Crie uma função que receba como parâmetro um array de números e retorne
 	um array ordenado (NÃO pode usar o método array.sort());
   // ex. funcaoOrdenaArray( [4, 5, 13, 7, 3, 12, 5, 2, 2] ) ===> retorna o array [ 2, 2, 3, 4, 5, 5, 7, 12, 13 ]
*/


function sortArray(listNumbers) {

  if (!Array.isArray(listNumbers) || listNumbers.length == 0) {
    const messageError = "Sua lista esta vazia ou não é uma. Verifique por gentileza."
    return messageError
 }

 for (let i = 0; i < listNumbers.length - 1 ; i ++) {
    for (let j = 0 ; i < listNumbers.length - 1; j ++) {
      if (listNumbers[j] > listNumbers[j + 1]) {
        let aux = listNumbers[j]
        listNumbers[j] = listNumbers[j + 1]
        listNumbers[j + 1] = aux
      }

    }
 }


 console.log(listNumbers)
}

const listNumbers = [10, 9, 8, 7, 6]

sortArray(listNumbers)