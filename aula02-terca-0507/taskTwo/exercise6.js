/*
6) Pergunte ao usuário se ele quer:
	Inserir número / Finalizar
	Ao selecionar inserir número solicite para o usuário um valor numérico válido
	Ao selecionar finalizar mostre um alerta para o usuário com o resultado da soma de todos os números informados
	Utilize o laço DO...WHILE;

	OBS: façam os devidos tratamentos;
*/

function exercise6() {
  let resultQuestion
  let soma = 0

  do {
    resultQuestion = parseInt(prompt("Gostaria de Inserir numero ou finalizar programa? \n Digite 1 - Inserir \n Digite 2 - Finalizar"))
    
    switch (resultQuestion) {
      case 1:
        let number = 0

        do {
          number = parseInt(prompt("Digite um numero:"))

          if (isNaN(number)) {
            alert("Digite um numero valido.")
          }
          
       } while(isNaN(number))

        soma += number
        break
      
      case 2:
        alert(`Soma total de numeros inseridos: ${soma}.`)
        break
    
      default:
        alert("Digite uma das opções.")
    }
    
      

  } while(resultQuestion != 2)
}

exercise6()