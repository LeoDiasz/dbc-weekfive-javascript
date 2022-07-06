/*
1) Crie um programa que atribua à uma varíavel e imprima no console os textos: 
   'Sextou' ou 'Ainda não sextou' de acordo com a resposta de confirmação do usuário;
*/   

function exercise1() {
  const resultQuestion = confirm("Hoje é sexta?") ? "Sextou" : "Ainda não sextou"

  console.log(resultQuestion)
}



/*
2) Crie um programa que imprima no console os números de 1 até 10;
*/

function exercise2() {
  for(let i = 1; i <= 10; i ++) {
    console.log(i)
  }
}

/*
3) Crie um programa que percorra uma determinada lista com os seguintes números: [1, 2, 7, 10, 18]
   e imprima no console a soma de todos os elementos, neste caso seria 38;
*/


function exercise3() {
  const listNumbers = [1, 2, 7, 10, 18]
  let sumNumbers = 0

  for(number of listNumbers) {
    sumNumbers = sumNumbers + number
  }

  console.log(sumNumbers)
}



/*
4) Crie um programa que mostre um prompt para o usuário pedindo para selecionar uma das opções: 
	1 - Continuar perguntando / 2 - Parar de perguntar
   se ele digitar algo diferente de 1 ou de 2 deve mostrar um alerta para ele informando o erro e deve solicitar novamente que escolha uma opção.
*/

function exercise4() {

  let resultQuestion
  do {
    resultQuestion = prompt("Selecione uma das opções: \n 1 - Continuar perguntando \n 2 - Parar de perguntar")
    
    if (resultQuestion != "1" && resultQuestion != "2") {
      alert("Escolha uma das opções.")
      resultQuestion = "1"
    }
    
  } while (resultQuestion == "1")

}



