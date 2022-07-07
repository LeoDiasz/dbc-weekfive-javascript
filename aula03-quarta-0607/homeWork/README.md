# Tarefa

## Exercicio 1

1) Crie uma função baseada na função que fizemos em aula, que removia os espaços em branco e deixava em maiúsculo
- Só que esta função agora deve remover os espaços a mais entre as palavras, mantendo somente um para que as palavras continuem separadas
- ex: minhaFuncao('OI     ! ESSA É  UMA   STRING   QUALQUER') => deve retornar a string: 'OI! ESSA É UMA STRING QUALQUER'


## Exercicio 2

Crie uma função de busca, que recebe 2 parâmetros (um array e um elemento) e retorna uma mensagem dizendo se aquele elemento
- existe no array e também qual a posição dele (índice)
- Ex: minhaFuncao( ['a', 'cachorro', 255], 'cachorro' ) => retorna 'O elemento existe no array e a posição dele é: 1'
- Ex: minhaFuncao( ['a', 'cachorro', 255], 255 ) => retorna 'O elemento existe no array e a posição dele é: 2'
- Ex: minhaFuncao( ['a', 'cachorro', 255], 'abacate' ) => retorna 'O elemento não existe no array'
- Ex: minhaFuncao( ['a', 'cachorro', 255], '255' ) => retorna 'O elemento não existe no array'

## Exercicio 3 

Crie uma função que recebe como parâmetros um caracter e um array de 
- caracteres e que remova todas as ocorrências daquele caracter no array; 
- ex. funcaoRemoveCaracterDoArray('a', [ 'c', 'a', 'texto', 'a' ] )
- => deve retornar o array: [ 'c', 'texto' ] (pois removeu todos 'a');


## Exercicio 4

Crie uma função para remover um elemento específico de uma lista;
- ex: Imagine que temos o seguinte 
- let lista = [ 'a', 4, 'Tiago', 187 ]
- e chamamos a função removeElemento(lista, 'Tiago')
- deve remover o elemento 'Tiago' da lista, fazendo com que fique [ 'a', 4, 187 ]
- Obs: caso o elemento passado não exista na lista mostrar uma mensagem para o usuário informando.


## Exercicio 5 

Crie uma função que gera um número aleátorio entre 0 e 100;


## Exercicio 5b

Crie uma lista vazia [] e vá adicionando números aleatórios nesta lista até que a lista tenha 10 números inseridos nela;
- OBS: só podem ser adicionados a esta lista os números que obedecerem à alguma das seguintes regras:
- números ímpares que estão entre 14 e 50;
- números múltiplos de 12;

## Exercicio 6 BONUS

Crie uma função que receba como parâmetro um array de números e retorne
- um array ordenado (NÃO pode usar o método array.sort());
- ex. funcaoOrdenaArray( [4, 5, 13, 7, 3, 12, 5, 2, 2] ) ===> retorna o array [ 2, 2, 3, 4, 5, 5, 7, 12, 13 ]