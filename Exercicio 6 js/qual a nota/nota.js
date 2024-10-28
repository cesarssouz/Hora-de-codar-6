var alunos = []

function menu() {
    var opcao = parseInt(prompt("Escolha uma opção 1.) Cadastrar Alunos 2.) Pesquisar Aluno 3.) Apresentar Registros 4.) Sair"))

    switch (opcao) {
        case 1:
            cadastrarAluno()
            break;
        case 2:
            pesquisarAluno()
            break;
        case 3:
            apresentarRegistro()
            break;
        case 4:
            sair()
            break;
        default:
            erro()
            menu()
    }
}
function cadastrarALuno(){
    for (var i = 0; i < 20; i++) {
        var aluno = {
            nome: prompt("Digite o nome do aluno:"),
            notas: []
        };

        for (var j = 0; j < 4; j++) {
            var nota = parseFloat(prompt(`Digite a nota ${j + 1} do aluno ${aluno.nome}:`));
            aluno.notas.push(nota);
        }

        var soma = aluno.notas[0] + aluno.notas[1] + aluno.notas[2] + aluno.notas[3];
        aluno.media = soma / 4;

        aluno.status = aluno.media >= 5 ? "Aprovado" : "Reprovado";

        alunos.push(aluno);
    }

    alunos.sort(function (a, b) {
        return a.nome.localeCompare(b.nome);
    });
    alert("Alunos cadastrados e classificados por nome!");
}
function pesquisarAluno(){
    var nomeProcurado = prompt("Digite o nome do aluno que deseja buscar:");
    var encontrado = false;

    for (var i = 0; i < alunos.length; i++) {
        if (alunos[i].nome.toLowerCase() === nomeProcurado.toLowerCase()) {
            alert(`Nome: ${alunos[i].nome}\nNotas: ${alunos[i].notas.join(", ")}\nMédia: ${alunos[i].media}\nStatus: ${alunos[i].status}`);
            encontrado = true;
            break;
        }
    }

    if (!encontrado) {
        alert("Aluno não encontrado.");
    }
}
function apresentarRegistro(){
    if (alunos.length === 0) {
        alert("Nenhum aluno cadastrado.");
        return;
    }

    var lista = "Lista de Alunos:\n";
    for (var i = 0; i < alunos.length; i++) {
        lista += `${i + 1}. Nome: ${alunos[i].nome}, Notas: ${alunos[i].notas.join(", ")}, Média: ${alunos[i].media}, Status: ${alunos[i].status}\n`;
    }

    alert(lista);
}
menu()