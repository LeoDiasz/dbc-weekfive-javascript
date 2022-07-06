/*
  1) Uma revendedora de carros possui 10 carros em sua loja.
     O estoque da loja está separado por marcas, modelos e anos de fabricação;
     Da seguinte forma:
     marcas = [ 'Fiat', 'Ford', 'Honda', 'Volkswagen', 'Land', 'BMW', 'Peugeot', 'Renault' ];
     modelos = [ 'Uno', 'Mustang', 'Civic', 'Jetta', 'Rover', 'X5', '208', 'Sandero', 'Duster' ];
     anosFabricacao = [ 2005, 2015, 2018, 2010, 2022, 2022, 2008, 2009, 2007 ];
     
    Saiba que todas as informações se encontram na ordem certa, ou seja:
    A posição zero das marcas condiz com a posição zero dos modelos e o mesmo para o ano de fabricação;
    Ex: marcas[0] = 'Fiat', modelos[0] = 'Uno' e anosFabricacao[0] = 2005 ou seja nas posições zero temos um Fiat Uno do ano de 2005;

    Faça um programa que peça para o usuário informar uma marca e com esse informação o programa imprima no console
    todas as informações referente ao veículo daquela marca;

    Ex: usuarioInformou = 'Land'
        console exibiu => 'Land Rover do ano de 2022'
*/


function exercise1() {
  const marcas = [ 'Fiat', 'Ford', 'Honda', 'Volkswagen', 'Land', 'BMW', 'Peugeot', 'Renault', "Gol" ];
  const modelos = [ 'Uno', 'Mustang', 'Civic', 'Jetta', 'Rover', 'X5', '208', 'Sandero', 'Duster' ];
  const anosFabricacao = [ 2005, 2015, 2018, 2010, 2022, 2022, 2008, 2009, 2007 ]

  let escolha = prompt(`Escolha uma das marcas: ${marcas}`)
  
  for(let i = 0; i <= marcas.length; i ++) {
    if (marcas[i].toLowerCase() === escolha.toLowerCase()) {
      console.log(`Marca: ${marcas[i]}.\nModelo: ${modelos[i]}.\nAno: ${anosFabricacao[i]}`)
      return [marcas[i], modelos[i], anosFabricacao[i]]
    }
  }

  alert("Essa escolha não existe no sistema.")

  
}

exercise1()

