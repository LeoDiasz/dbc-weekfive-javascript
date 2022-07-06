/*
2) Faça um programa que calcule a soma dos primeiros 50 números pares;
*/

function exercise2() {
  let soma = 0
  let contador = 50

  for (let i = 0; 0 <= contador; i++) {
    if (i % 2 == 0) {
      soma += i
      contador -= 1
    }
  }

  console.log(soma)
}

exercise2()