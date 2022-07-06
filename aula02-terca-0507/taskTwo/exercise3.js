/*
3) Faça um programa onde o usuário possa escolher qual a tabuada que se deseja ver. Exiba (console) a tabuada desse número de 1 a 10;
	 Exiba essa tabuada de forma organizada com os console.logs
*/

function exercise3() {
  const optionsTable = "1 - Adição \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão"

  const numberForTable = parseInt(prompt("Digite um numero para exibir sua tabuada"))

  if (isNaN(numberForTable)) {
    alert("Digite um número valido")
    return
  }

  const resultOptionTable =  parseInt(prompt(`Escolha o operador para mostrar sua tabela: \n ${optionsTable}`))

  switch(resultOptionTable) {
    case 1:
      console.log("Tabela Adição\n")
      for(let i = 1; i <= 10; i++) {
        console.log(`${numberForTable} + ${i} = ${numberForTable + i }`)
      }
      break

    case 2:
      let counter = numberForTable
      console.log("Tabela Subtração\n")

      for(let i = 1; i <= 10; i++) {15
        console.log(`${counter} - ${numberForTable} = ${counter - numberForTable}`)
        counter ++
      }
      
      break

    case 3:
      console.log("Tabela Multiplicação\n")

      for(let i = 1; i <= 10; i++) {
        console.log(`${numberForTable} x ${i} = ${numberForTable * i }`)
      }

      break

    case 4:
      let counterDivision = numberForTable

      console.log("Tabela Divisão\n")

      for(let i = 0; i < 10 ; i++) {
        console.log(`${counterDivision} / ${numberForTable} = ${counterDivision / numberForTable}`)

        counterDivision += numberForTable
      }

      break

    default:
      alert("Nenhuma das opções validas")
  }
 
}

exercise3()






