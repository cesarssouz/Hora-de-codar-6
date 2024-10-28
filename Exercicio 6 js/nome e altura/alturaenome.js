var pessoas = []

function menu() {
    var opcao = prompt("Escolha uma opção:\n1 - Cadastrar Pessoas\n2 - Apresentar Pessoas até 1.5m\n3 - Apresentar Pessoas acima de 1.5m\n4 - Apresentar Pessoas entre 1.5m e 2.0m\n5 - Apresentar Média das Alturas\n6 - Sair");

    switch (opcao) {
        case "1":
            cadastrarPessoas();
            break;
        case "2":
            apresentarAte1_5m();
            break;
        case "3":
            apresentarAcima1_5m();
            break;
        case "4":
            apresentarEntre1_5mE2_0m();
            break;
        case "5":
            apresentarMediaAlturas();
            break;
        case "6":
            alert("Saindo do programa.");
            break;
        default:
            alert("Opção inválida, tente novamente.");
            menu();
    }
}


function cadastrarPessoas() {
    for (var i = 0; i < 15; i++) {
        var nome = prompt("Digite o nome da pessoa " + (i + 1) + ":");
        var altura = parseFloat(prompt("Digite a altura (em metros) da pessoa " + (i + 1) + ":"));

        if (isNaN(altura) || altura <= 0) {
            alert("Altura inválida! Tente novamente.");
            i--; 
            continue;
        }

        pessoas.push({
            nome: nome,
            altura: altura
        });
    }
    alert("Cadastro concluído!");
}

function apresentarAte1_5m() {
    var resultado = "Pessoas até 1.5m:\n";
    var encontrado = false;

    for (var i = 0; i < pessoas.length; i++) {
        if (pessoas[i].altura <= 1.5) {
            resultado += `Nome: ${pessoas[i].nome}, Altura: ${pessoas[i].altura}m\n`;
            encontrado = true;
        }
    }

    if (!encontrado) {
        resultado = "Nenhuma pessoa encontrada até 1.5m.";
    }

    alert(resultado);
}

function apresentarAcima1_5m() {
    var resultado = "Pessoas acima de 1.5m:\n";
    var encontrado = false;

    for (var i = 0; i < pessoas.length; i++) {
        if (pessoas[i].altura > 1.5) {
            resultado += `Nome: ${pessoas[i].nome}, Altura: ${pessoas[i].altura}m\n`;
            encontrado = true;
        }
    }

    if (!encontrado) {
        resultado = "Nenhuma pessoa encontrada acima de 1.5m.";
    }

    alert(resultado);
}

function apresentarEntre1_5mE2_0m() {
    var resultado = "Pessoas entre 1.5m e 2.0m:\n";
    var encontrado = false;

    for (var i = 0; i < pessoas.length; i++) {
        if (pessoas[i].altura > 1.5 && pessoas[i].altura < 2.0) {
            resultado += `Nome: ${pessoas[i].nome}, Altura: ${pessoas[i].altura}m\n`;
            encontrado = true;
        }
    }

    if (!encontrado) {
        resultado = "Nenhuma pessoa encontrada entre 1.5m e 2.0m.";
    }

    alert(resultado);
}

function apresentarMediaAlturas() {
    if (pessoas.length === 0) {
        alert("Nenhuma altura cadastrada.");
        return;
    }

    var soma = 0;

    for (var i = 0; i < pessoas.length; i++) {
        soma += pessoas[i].altura;
    }

    var media = soma / pessoas.length;
    alert(`A média das alturas é: ${media.toFixed(2)}m`);
}

menu();