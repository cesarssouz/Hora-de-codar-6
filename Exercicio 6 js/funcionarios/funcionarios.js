var funcionarios = [];

function menu() {
    var opcao = prompt("Escolha uma opção:\n1 - Cadastrar Funcionários\n2 - Pesquisar Funcionário\n3 - Apresentar Funcionários acima de R$1.000,00\n4 - Apresentar Funcionários abaixo de R$1.000,00\n5 - Apresentar Funcionários iguais a R$1.000,00\n6 - Sair");

    switch (opcao) {
        case "1":
            cadastrarFuncionarios();
            break;
        case "2":
            pesquisarFuncionario();
            break;
        case "3":
            apresentarAcima1000();
            break;
        case "4":
            apresentarAbaixo1000();
            break;
        case "5":
            apresentarIgual1000();
            break;
        case "6":
            alert("Saindo do programa.");
        
        default:
            alert("Opção inválida, tente novamente.");
            menu()
    }
}


function cadastrarFuncionarios() {
    for (var i = 0; i < 20; i++) {
        var matricula = prompt("Digite a matrícula do funcionário " + (i + 1) + ":");
        var nome = prompt("Digite o nome do funcionário " + (i + 1) + ":");
        var salario = prompt("Digite o salário do funcionário " + (i + 1) + ":");

        salario = parseFloat(salario);
        if (isNaN(salario) || salario < 0) {
            alert("Salário inválido! Tente novamente.");
            i--; 
            continue;
        }

        funcionarios.push({ matricula: matricula, nome: nome, salario: salario });
    }
    
    funcionarios.sort((a, b) => a.matricula - b.matricula);
    alert("Cadastro concluído!");
}

function pesquisarFuncionario() {
    var matriculaProcurada = prompt("Digite a matrícula do funcionário que deseja pesquisar:");
    var funcionarioEncontrado = funcionarios.find(funcionario => funcionario.matricula === matriculaProcurada);

    if (funcionarioEncontrado) {
        alert("Funcionário encontrado:\nMatrícula: " + funcionarioEncontrado.matricula + "\nNome: " + funcionarioEncontrado.nome + "\nSalário: R$" + funcionarioEncontrado.salario.toFixed(2));
    } else {
        alert("Funcionário não encontrado.");
    }
}

function apresentarAcima1000() {
    var resultado = "Funcionários com salários acima de R$1.000,00:\n";
    var encontrado = false;

    for (var i = 0; i < funcionarios.length; i++) {
        if (funcionarios[i].salario > 1000) {
            resultado += "Matrícula: " + funcionarios[i].matricula + ", Nome: " + funcionarios[i].nome + ", Salário: R$" + funcionarios[i].salario.toFixed(2) + "\n";
            encontrado = true;
        }
    }

    if (!encontrado) {
        resultado = "Nenhum funcionário encontrado com salário acima de R$1.000,00.";
    }

    alert(resultado);
}

function apresentarAbaixo1000() {
    var resultado = "Funcionários com salários abaixo de R$1.000,00:\n";
    var encontrado = false;

    for (var i = 0; i < funcionarios.length; i++) {
        if (funcionarios[i].salario < 1000) {
            resultado += "Matrícula: " + funcionarios[i].matricula + ", Nome: " + funcionarios[i].nome + ", Salário: R$" + funcionarios[i].salario.toFixed(2) + "\n";
            encontrado = true;
        }
    }

    if (!encontrado) {
        resultado = "Nenhum funcionário encontrado com salário abaixo de R$1.000,00.";
    }

    alert(resultado);
}

function apresentarIgual1000() {
    var resultado = "Funcionários com salário igual a R$1.000,00:\n";
    var encontrado = false;

    for (var i = 0; i < funcionarios.length; i++) {
        if (funcionarios[i].salario === 1000) {
            resultado += "Matrícula: " + funcionarios[i].matricula + ", Nome: " + funcionarios[i].nome + ", Salário: R$" + funcionarios[i].salario.toFixed(2) + "\n";
            encontrado = true;
        }
    }

    if (!encontrado) {
        resultado = "Nenhum funcionário encontrado com salário igual a R$1.000,00.";
    }

    alert(resultado);
}

menu();
