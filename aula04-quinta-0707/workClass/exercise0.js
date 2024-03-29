//#region EXERCICIO 0

/*
  0) Convertam as seguintes funções para arrow function (usando concise body e abreviando parênteses quando possível):

  function isPositive( number ) {
    return number > 0;
  }

  function randomNumber() {
    return Math.round( Math.random( ) * 10 )
  }

  setTimeout(
    function() {
      console.log( 'Apenas uma mensagem 5 segundos atrasada.' )
    },
    5000
  )

  function criarMensagemDeOla() {
    return 'Olá, seja bem vindo!';
  }
*/

const isPositive =  number => number > 0

const randomNumber = () => Math.round( Math.random() * 100)

const timeSecond = setTimeout(() => console.log( 'Apenas uma mensagem 5 segundos atrasada.' ), 5 * 1000)

const criarMensagemDeOla = () => "Olá, seja bem vindo!"

//#endregion

