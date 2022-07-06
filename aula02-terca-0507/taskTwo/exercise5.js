/*
5) Faça um algoritmo que imprima no console os valores como se fosse um relógio durante 1 minuto;
	Exemplo do console:
	00
	01
	02
	03
	...
	57
	58
	59
	60 (não deve imprimir mais)
*/

let counter = 1

function counterFunction() {
	
	console.log(counter)

	if (counter == 60) {
		clearInterval(intervalCounter)
	} 

	counter += 1
	
}

const intervalCounter = setInterval(counterFunction, 1000)




