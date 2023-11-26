const prompt = require('prompt-sync')();
var array_clientes = [];

do {
  console.log("Sistema de Cadastro de Clientes - Loja Vision Click");
  // slogan da marca de câmeras 
  console.log("Capturando Momentos & Revelando Emoções");

  console.log("\n1 - Inserir Cliente");
  console.log("2 - Excluir Cliente");
  console.log("3 - Listar Clientes");
  console.log("0 - Sair");

  var opcao = prompt("Digite sua opção: ");

  if (opcao == 1) {
    console.log("\n\nInserindo Cliente...\n");
    let codigo = parseInt(prompt("Digite o código: "));
    let nome = prompt("Digite o nome: ");
    let email = prompt("Digite o e-mail: ");
    let celular = prompt("Digite o celular: ");
    let estado = prompt("Digite o estado: ");
    let modelo = prompt("Digite o modelo da câmera: ");
    let valor = parseFloat(prompt("Digite o valor da câmera: "));

    // Neste trecho estamos declarando um objeto
    const cliente = {
      codigo: codigo,
      nome: nome,
      email: email,
      celular: celular,
      estado: estado,
      modelo: modelo,
      valor: valor
    }
    // Chamar a função inserir
    inserir_cliente(cliente);

  } else if (opcao == 2) {
    console.log("\n\nExcluindo Cliente...\n");
    let codigo = prompt("Digite o código do cliente: ");
    // Chamar a função excluir
    excluir_cliente(codigo);

  } else if (opcao == 3) {
    console.log("\n\nListando Clientes...\n");
    // Chamar a função listar
    listar_clientes();

  } else {
    console.log("\n\nSaindo do programa...\n");
  }

  prompt("\nEnter para continuar...");
  console.clear();
} while (opcao != 0)


function inserir_cliente(cliente) {
  // Implementar corpo da função
  array_clientes.push(cliente);

}

function excluir_cliente(codigo) {
  // Implementar corpo da função
  // verifica se foi excluido 

  for (let i = 0; i < array_clientes.length; i++) {
    if (array_clientes[i].codigo == codigo) {
      array_clientes.splice(i, 1);
      console.log("Cliente excluído com sucesso!");
      return;
    }
  }

  console.log("Cliente não encontrado.");
}

function listar_clientes() {
  // Implementar corpo da função
  // caso não encontre nemhum cliente

  if (array_clientes.length == 0) {
    console.log("Nenhum cliente cadastrado.");
  } else {
    // caso encontre algum cliente

    console.log("Lista de Clientes:");
    for (let i = 0; i < array_clientes.length; i++) {
      console.log("Código: " + array_clientes[i].codigo);
      console.log("Nome: " + array_clientes[i].nome);
      console.log("E-mail: " + array_clientes[i].email);
      console.log("Celular: " + array_clientes[i].celular);
      console.log("Estado: " + array_clientes[i].estado);
      console.log("Modelo da Câmera: " + array_clientes[i].modelo);
      console.log("Valor da Câmera: " + array_clientes[i].valor);
      // item para separação '-'

      console.log("--------------------------------");
    }
  }
}



