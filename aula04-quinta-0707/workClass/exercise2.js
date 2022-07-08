//#region EXERCICIO 2
/*
2) Criem uma função que recebe uma string e coloca todas as primeiras letras em maiúsculo;
   Exemplo: minhaFuncao( 'hoje faremos o trabalho em dupla, que legal - sqn' )
   // neste caso retorna: 'Hoje Faremos O Trabalho Em Dupla, Que Legal - Sqn';
*/

const string = "dsdsadas  dsadasd @@dsadasd dasdsada dasdsa"

const convertUpperCaseWords = (text) => {

  let newText = ""

  for (let i = 0; i < text.length; i ++) {

    if (i == 0) {
      newText += text[i].toUpperCase()

    } else if (text[ i - 1] == " ") {
      newText += text[i].toUpperCase()

    } else {
      newText += text[i]
    }
    
  }

  return newText
}

const result = convertUpperCaseWords("texto  texto  textoo  texto")

console.log(result)

//#endregion