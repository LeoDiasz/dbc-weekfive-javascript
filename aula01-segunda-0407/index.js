// EXERCICIO 1

/*
1) Crie um programa que, a partir de um texto que o usuário digitar (prompt), verifique:
   - Se o texto for igual à 'SIM' informe um alerta para o usuário informando o texto "Parabéns";
   - Se o texto for igual à 'Não' solicite novamente para o usuário informar algum texto e após isso mostre para ele este último texto digitado em um alerta;
   - Se for digitado qualquer outra string solicite uma confirmação para o usuário com o texto: 'Você tem noções dos seus atos?'
*/

function exercise1() {

  const resultQuestion = prompt("Você gostaria de comprar o curso Javascript DBC? Digite sim ou não").toLowerCase()

  switch(resultQuestion) {
    case "sim":
      alert("Parabéns, você comprou novo curso de Javascript da DBC")
      break
  
    case "não":
      const result = prompt("Porque não quer comprar o curso? Digite sua resposta:")
      alert(`sua resposta: ${result}`)
      break

    default:
      confirm("Você tem noções de seus atos?")
  }

}

// EXERCICIO 2

/*
2) Crie um programa que solicita para o usuário dois valores de texto, nome do cliente e nome do atendente;
   Exiba um alerta para o usuário com a mensagem "Olá cliente eu me chamo atendente, em que posso ajudar?" (Interpolação)
*/

function exercise2() {
  const nameClient = prompt("Por gentileza, digite seu nome:");
  const nameAttendant = prompt("Digite o nome do atendente:")

  alert(`Olá ${nameClient}, eu me chamo ${nameAttendant}, em que posso ajudar?`)
}

// EXERCICIO 3

/*
3) Crie um programa que possui 3 variáveis do tipo Boolean (true / false);
   nomes das variáveis: ehSextaFeira, numeroEhMaiorQueQuatro, ehUmValorVazio;
   
   Atribua à variável ehSextaFeira o resultado de uma confirmação solicitada para o usuário "Hoje é sexta-feira?";
   Atribua à variável numeroEhMaiorQueQuatro o resultado da comparação de um número solicitado para o usuário verificando se esse número é maior que 4;
   
   Para a variável ehUmValorVazio faça o seguinte:
   Você precisa solicitar uma informação para o usuário e armazenar essa informação em uma variável diferente (ex: valorDigitado);
   
   Agora na variável ehUmValorVazio armazene o resultado das seguintes comparações do valor digitado:
   se o valor é igual à null ou se o valor é igual à undefined ou se o valor é uma string vazia ('');
*/

function exercise3() {

  const ehSextaFeira = confirm("Hoje é sexta-feira?")

  const numeroUsuario = parseInt(prompt("Digite um numero: ").trim())

  const numeroEhMaiorQueQuatro = numeroUsuario > 4

  const ehUmValorVazio = (numeroUsuario == null || numeroUsuario == undefined  || numeroUsuario == "")

  alert(`É sexta feira? ${ehSextaFeira}. \n Numero digitado maior que quatro? ${numeroEhMaiorQueQuatro}. \n numero digitado é um valor vazio?: ${ehUmValorVazio}`)
}

// EXERCICIO 4

/*
4) Crie um programa que recebe dois números e uma operação desejada e mostre o resultado dessa operação (operações válidas: '+', '-', '*', '/'), 
	adicione também uma validação para caso a operação escolhida não seja uma das operações válidas OU se um dos números digitados seja um valor inválido também;
   Caso a validação encontre um erro mostre um alerta informando o usuário;
   Obs: Lembrando também que não é possível dividir por zero (ou seja, tratem isso também);
   	  Não é permitido utilizar a função "eval"
*/

function exercise4() {
  const numberOne = parseInt(prompt("Digite um numero").trim())
  const numberTwo = parseInt(prompt("Digite outro numero").trim())

  if (isNaN(numberOne) || isNaN(numberTwo)) {
    alert("Digite numeros validos")
    return 
  }

  const operation = prompt("Digite a operação desejada: \n + Somar \n - Subtrair \n * Multiplcar \n / Dividir")

  switch (operation) {
    case "+":
      const sum = numberOne + numberTwo
      alert(`Soma: ${numberOne} + ${numberTwo} = ${sum}`)
      return sum    

    case "-":
      const subtract = numberOne - numberTwo
      alert(`Subtração: ${numberOne} - ${numberTwo} = ${subtract}`)
      return subtract

    case "*":
      const multiply = numberOne * numberTwo
      alert(`Multiplicação: ${numberOne} * ${numberTwo} = ${multiply}`)
      return multiply

    case "/":
      if (numberOne === 0 || numberTwo === 0) {
        alert("Você digitou um numero 0, e não é possivel dividir por ele")
        return 
      }

      const division = numberOne / numberTwo
      alert(`Divisão: ${numberOne} / ${numberTwo} = ${division}`)
      return division

    default:
      alert("Informe uma operação valida")
  }

} 

// EXERCICIO 5

/*
5) Crie um programa que recebe 3 notas (T1, T2 e P1) como números reais (float, ex: 5.2), realize a média dessas notas e realize a seguinte verificação:
   (menor que 5 = alerta de reprovado, de 5 até 7 = alerta de recuperação e acima de 7 = alerta de parabenização)
   Obs: adicione as validações para ter certeza que os números inseridos estão certos e caso algum número seja inválido façam os devidos tratamentos;
*/  

function exercise5() {
  const T1 = parseFloat(prompt("Digite a nota do seu primeiro trabalho:").trim())
  const T2 = parseFloat(prompt("Digite a nota do seu segundo trabalho:").trim())
  const P1 = parseFloat(prompt("Digite a nota da sua prova final:").trim())

  if (isNaN(T1) || isNaN(T2) || isNaN(P1)) {
    alert("Digite valores validos!")
    return
  }
  
  const average = (T1 + T2 + P1) / 3

  if (average < 5) {
    alert(`Você tirou uma media de ${average}. REPROVADO!`)
    return average

  } else if (average >= 5 && average < 7) {
    alert(`Você tirou uma media de ${average}. Esta em recuperação!`)
    return average
    
  } else {
    alert(`Você tirou uma media de ${average}. Parabéns! você foi aprovado`)
    return average
  }
  
} 


// EXERCICIO 6

/*
6) Crie um programa que solicite para o usuário que escolha uma das opções do menu:
   1 - Fazer checkin (exibe um alert de boas vindas);
   2 - Fazer checkout (mostra uma caixa de confirmação perguntando se tem certeza e caso confirme exibe um alerta de despedida);
   3 - Estender hospedagem (pergunta pro usuário quantos dias gostaria de estender e se for um número válido e maior que zero exibe um alerta de sucesso informando que a hospedagem foi estendida em X dias)
   4 - Sair (exibe alerta de "Ok")
   
   Obs: caso não seja nenhuma dessas opções exiba um alerta de opção inválida   
*/  

function exercise6() {
  
  const menu = "1 - Fazer checkin \n 2 - Fazer checkout \n 3 - Estender hospedagem \n 4 - Sair" 

  const resultQuestion = parseInt(prompt(`Digite uma das opções do menu: \n ${menu} `).trim())

  switch(resultQuestion) {
    case 1:
      alert("Boas vindas!")
      break

    case 2:
      const resultConfirm = confirm("Você tem certeza?");
      
      if(resultConfirm) alert("Até logo!") 
      break

    case 3:
      const daysExtend = parseInt(prompt("Quantos dias você gostaria de estender sua hospedagem?").trim())

      if (!isNaN(daysExtend) && daysExtend > 0) {
        alert(`Você estendeu sua hospedagem para ${daysExtend} dias`)
        return daysExtend
      }
     
      alert("Não entendemos sua opção.")
      break

    case 4: 
      alert("Ok!")
      break

    default:
      alert("Opção invalida")
  }

} 


