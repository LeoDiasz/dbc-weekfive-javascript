//#region EXERCICIO 1

/*
1) Crie uma função que recebe como parâmetro uma lista com os valores [1, 'Olá', undefined, 99999, 'Texto qualquer']
   e essa função imprima no console o valor de cada elemento da lista;
*/

listElements = [1, 'Olá', undefined, 99999, 'Texto qualquer']

function printElements(listElements) {

  for(element of listElements) {
    console.log(element)
  }
  
}

//#endregion


//#region EXERCICIO 2

/*
2) Crie uma função que receba uma string e retorne esta string sem nenhum espaço em branco no início e no fim 
   e todos caracteres em maiúsculo;
   // ex: minhaFuncao('      Oi     ! essa é  uma   string   qualquer   ') => deve retornar a string: 'OI     ! ESSA É  UMA   STRING   QUALQUER'
*/

function fixStrings(text) {
  const newText = text.trim().toLowerCase()
  return newText
} 

//#endregion



//#region EXERCICIO 3

/*
3) Crie uma função de soma que recebe como parâmetro 2 números (imprime no console a soma deles) e uma callback function que será 
   chamada caso algum dos números informados seja inválido.
   Esta função de Callback exibe somente um alerta informando que algum número digitado é inválido;
*/

function alertError() {
  console.log("Algum dos números digitados é invalido.")
}

function sumTwoNumbers(numberOne, numberTwo, alertErrorNaN) {
  numberOne = parseInt(numberOne)
  numberTwo = parseInt(numberTwo)

  if (isNaN(numberOne) || isNaN(numberTwo)) {
    alertErrorNaN()
    return
  }
  
  sum = numberOne + numberTwo

  console.log(`Soma ${numberOne} + ${numberTwo} = ${sum}`)

  return sum
}

//#endregion



