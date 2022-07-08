//#region EXERCICIO 3
/*
3) Criem uma função que receba uma string e imprime uma mensagem com a quantidade de vogais e a quantidade de consoantes na string
  da seguinte forma: 'A string [stringInformada] tem X vogas e X consoantes';

  // ex: contarVogaisConsoantes('Oi, tenho 5 anos de idade!!! ;D')
  =>  imprime:  A string "Oi, tenho 5 anos de idade!!! ;D" tem 10 vogais e 9 consoantes
*/

function imprimeQtdLetras (texto) {
  let contaVogal = 0;
  let contaConsoante = 0;
  const frase = texto.toLowerCase();
  
  for(let i = 0; i < frase.length; i++){
    if(frase[i] === 'a'||  
      frase[i] === 'e' || 
      frase[i] === 'i' ||
      frase[i] === 'o' || 
      frase[i] === 'u') {
        contaVogal += 1
      } else if(frase[i] !== 'a' && frase[i] !== 'e' && frase[i] !== 'i' && frase[i] !== 'o' && frase[i] !== 'u' && frase[i] !== frase[i].toUpperCase()){
          contaConsoante += 1
      }
 }
 return `A string ${frase} tem ${contaVogal} vogais e ${contaConsoante} consoantes`

}


//#endregion
