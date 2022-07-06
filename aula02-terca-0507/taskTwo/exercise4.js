/*
4) Faça um algoritmo que apresente o quadrado de cada um dos números pares entre 1 e 100;
*/

function exercise4() {
  for (let i = 0; i < 100; i += 2) {
    console.log(`Numero par ${i}. Seu quadrado: ${i ** 2}`)

  }
}

exercise4()