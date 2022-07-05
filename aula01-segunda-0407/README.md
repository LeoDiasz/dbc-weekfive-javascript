# Tarefa

## Exercicio 1

Crie um programa que, a partir de um texto que o usuário digitar (prompt), verifique:
   - Se o texto for igual à 'SIM' informe um alerta para o usuário informando o texto "Parabéns";
   - Se o texto for igual à 'Não' solicite novamente para o usuário informar algum texto e após isso mostre para ele este último texto digitado em um alerta;
   - Se for digitado qualquer outra string solicite uma confirmação para o usuário com o texto: 'Você tem noções dos seus atos?'


## Exercicio 2

Crie um programa que solicita para o usuário dois valores de texto, nome do cliente e nome do atendente;
   - Exiba um alerta para o usuário com a mensagem "Olá cliente eu me chamo atendente, em que posso ajudar?" (Interpolação)

## Exercicio 3 

Crie um programa que possui 3 variáveis do tipo Boolean (true / false);
   - nomes das variáveis: ehSextaFeira, numeroEhMaiorQueQuatro, ehUmValorVazio;
   
   - Atribua à variável ehSextaFeira o resultado de uma confirmação solicitada para o usuário "Hoje é sexta-feira?";
   - Atribua à variável numeroEhMaiorQueQuatro o resultado da comparação de um número solicitado para o usuário verificando se esse número é maior que 4;
   
   - Para a variável ehUmValorVazio faça o seguinte:
   Você precisa solicitar uma informação para o usuário e armazenar essa informação em uma variável diferente (ex: valorDigitado);
   
   - Agora na variável ehUmValorVazio armazene o resultado das seguintes comparações do valor digitado:
   se o valor é igual à null ou se o valor é igual à undefined ou se o valor é uma string vazia ('');


## Exercicio 4

Crie um programa que recebe dois números e uma operação desejada e mostre o resultado dessa operação (operações válidas: '+', '-', '*', '/'), 
- adicione também uma validação para caso a operação escolhida não seja uma das operações válidas OU se um dos números digitados seja um valor inválido também;
- Caso a validação encontre um erro mostre um alerta informando o usuário;
- Obs: Lembrando também que não é possível dividir por zero (ou seja, tratem isso também);
   	  Não é permitido utilizar a função "eval"


## Exercicio 5 

Crie um programa que recebe 3 notas (T1, T2 e P1) como números reais (float, ex: 5.2), realize a média dessas notas e realize a seguinte verificação:
- (menor que 5 = alerta de reprovado, de 5 até 7 = alerta de recuperação e acima de 7 = alerta de parabenização)
- Obs: adicione as validações para ter certeza que os números inseridos estão certos e caso algum número seja inválido façam os devidos tratamentos;


## Exercicio 6

Crie um programa que solicite para o usuário que escolha uma das opções do menu:
-  1 - Fazer checkin (exibe um alert de boas vindas);
-  2 - Fazer checkout (mostra uma caixa de confirmação perguntando se tem certeza e caso confirme exibe um alerta de despedida);
- 3 - Estender hospedagem (pergunta pro usuário quantos dias gostaria de estender e se for um número válido e maior que zero exibe um alerta de sucesso informando que a hospedagem foi estendida em X dias)
- 4 - Sair (exibe alerta de "Ok")
   
-  Obs: caso não seja nenhuma dessas opções exiba um alerta de opção inválida  