/*
1) Crie uma função que retorna um array contendo todas as possíveis combinações de uma string;
  // ex: imprimirCombinacoes('tri')
  => possiveis combinações da string "tri":  
  ['t', 'r', 'i', 'tr', 'tri', 'ti', 'tir', 'rt', 'rti', 'ri', 'rit', 'it', 'itr', 'ir', 'irt']

  OBS: ignorem palavras que possuem caracteres repetidos como por exemplo 'banana';
       imaginem que essa função só serve para palavras que não repetem caracteres (dessa forma a lógica fica menos complicada);
*/

const combinationsStrings = (text) => {

  if (text.length == 1) {
    return text
  }

  const [main, ...rest] = text

  const resultCombinations = combinationsStrings(rest)

  return [main, ...rest , resultCombinations.map(item => main + item) , resultCombinations.map(item => item + main )]
}


console.log(combinationsStrings("tri"))



function combinationsWithFor(text) {
  const listElements = []

  for (let i = 0; i < text.length; i++) {
    listElements.push(text[i])

    for (let j = 0; j < text.length; i ++) {
      if (i === 0) {
        listElements.push(text[i] + text[j + 1])
      }
      
    }

  }

  console.log(listElements)
}

combinationsWithFor("tri")

