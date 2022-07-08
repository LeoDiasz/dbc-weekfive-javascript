/*
4) Criem uma função que vai receber por parâmetro uma matriz bidimensional, ou seja:
  // ex de matriz bidimensional (que basicamente é uma lista que possui várias listas dentro de si):
  // é uma ideia bem parecida com um tabuleiro de xadrez por exemplo e visualizando o dado seria assim:

  const matrizBidimensional = [
    [ 1, 7, 3, 2, 1 ],
    [ 4, 5, 2, 1, 3 ],
    [ 1, 2, 3, 4, 5 ],
    [ 5, 9, 2, 1, 6 ],
    [ 9, 8, 3, 7, 1 ],
  ];

  Essa função deve calcular qual a maior soma de uma "figura H" da matriz;
  O que isso significa?

  Vejamos um exemplo, na matriz acima temos várias "figuras" em formato de H, vamos pegar o primeiro exemplo, composto pelos seguintes números:
  1     3
  3  5  2  = a soma dessa figura H é: 18
  1     3

  E no exemplo acima a maior soma de um H é 33 com a seguinte figura:
  2     4
  9  2  1
  8     7
*/

const matrizBidimensional = [
  [ 1, 7, 3, 2, 1 ],
  [ 4, 5, 2, 1, 3 ],
  [ 1, 2, 3, 4, 5 ],
  [ 5, 9, 2, 1, 6 ],
  [ 9, 8, 3, 7, 1 ],
];

const biDimensional = (biDimensional) => {

  for (let i = 0; i < biDimensional.length - 2; i ++) {
    for (let j = 0; j < biDimensional[i].length - 2; j ++) {
      console.log(biDimensional[i][j])
    }
    
  }
 
}

biDimensional(matrizBidimensional)