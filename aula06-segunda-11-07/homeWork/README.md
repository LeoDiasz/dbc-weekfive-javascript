/*
  +================================================================+
  |                    SISTEMA DE COLABORADORES                    |
  +================================================================+

  Nesse nosso sistema teremos os seguintes MODELOS de Classe:

  Colaborador {
    id;
    nome;
    marcacoes; (um array de marcações, ex: [ { dia: 22, horas: 9 }, { dia: 23, horas: 7 } ]);
    
    marcarPonto = ( dia, hora ) => {
      // lógica pra marcar o ponto
    };
  };

  Marcacao {
    dia; (só um number mesmo, ex: 22 )
    horas; (também só um number, ex: 9)
  }
  
  Crie também uma classe de 'Validacoes' que terá métodos úteis de validação para usar em várias partes do sistema;
  Ex: Validacoes { 
    ehInvalido(valorParaValidar) {
      // imaginem uma lógica validando aqui
      return true ou false, dependendo da validação;
    }
  }

  Para utilizar essas validações, 

  Ex: const validador = new Validacoes(); // inicializando um validador (vai ser o mesmo global para o sistema, não precisa instanciar mais de 1)

  if(validador.ehInvalido('Valor qualquer')) {
    // só pra exemplificar como utilizar
    alert('Inválido')
    return;
  }

  Vamos criar um sistema da seguinte forma;
  Deve ser apresentado para o usuário um "menu" para ele escolher uma ação a ser realizada;

  As opções serão:

  1 - Cadastrar Colaborador;
  2 - Marcar Ponto; (não posso ter duas marcações no mesmo dia para o mesmo colaborador)
  3 - Editar as horas de uma marcação; (pesquisar pelo dia para poder editar)
  4 - Ver Lista de Colaboradores;
  5 - Ver Lista de Colaboradores Que Ainda Não Marcaram o Ponto;
  6 - Ver Lista de todas as marcações com o nome do colaborador; // ex: [ { colaborador: 'Fulano', dia: 12, horas: 7 }, { colaborador: 'Fulano', dia: 13, horas: 8 }, { colaborador: 'João', dia: 12, horas: 7 } ]
  9 - Encerrar;
*/

