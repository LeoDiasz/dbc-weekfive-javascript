//#region EXERCICIO 1

/*
1) Crie uma função baseada na função que fizemos em aula, que removia os espaços em branco e deixava em maiúsculo
	Só que esta função agora deve remover os espaços a mais entre as palavras, mantendo somente um para que as palavras continuem separadas
	// ex: minhaFuncao('OI     ! ESSA É  UMA   STRING   QUALQUER') => deve retornar a string: 'OI! ESSA É UMA STRING QUALQUER'
*/

function removeSpaceRepeatText(text) {

	if(typeof(text) != "string") {
		return "Valor passado não é uma string"
	}

	const textFilter = text.trim().toUpperCase()
	let newText = ""

	for (let i = 0; i < textFilter.length; i ++) {
		if (!(textFilter[i] == " " && textFilter[i] == textFilter[i - 1])) {
			newText += textFilter[i]
		}
	} 

	return newText
	
}

const result = removeSpaceRepeatText(" 4242424       4242 ")

console.log(result)
// #endregion