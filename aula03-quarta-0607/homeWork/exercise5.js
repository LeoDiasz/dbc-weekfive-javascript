// #region EXERCICIO 5 

/*
5) Crie uma função que gera um número aleátorio entre 0 e 100;
*/

function generateRandomNumberUpTo100() {
  const numberRandom = Math.round(Math.random() * 100)

  return numberRandom
}

console.log(generateRandomNumberUpTo100())

// #endregion


//#region EXERCICIO 5b
/*
5b) Crie uma lista vazia [] e vá adicionando números aleatórios nesta lista até que a lista tenha 10 números inseridos nela;
    OBS: só podem ser adicionados a esta lista os números que obedecerem à alguma das seguintes regras:
    - números ímpares que estão entre 14 e 50;
    - números múltiplos de 12;
*/
 
const listElements = []

while (listElements.length != 10) {
  const resultInput = Math.round(Math.random() * 100)

  if ((resultInput % 2 == 1 && resultInput > 14 && resultInput < 50) || resultInput % 12 == 0 ) {
    listElements.push(resultInput)
    console.log(`Adicionando numero ${resultInput} a lista \n Lista: ${listElements} \n`)
  } else{
    console.log(`Numero ${resultInput} não é um multiplo de 12 ou um numero impar entre 14 e 50 \n`)
  }

}


//#endregion 