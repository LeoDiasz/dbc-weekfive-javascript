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


function counterFunction(counter) {
	console.log(counter)
	return counter += 1
}


setInterval(counterFunction, 1000, counter)





