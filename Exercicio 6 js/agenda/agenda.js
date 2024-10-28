var agenda = []
function menu() {

    var inicio = parseInt(prompt("Digite 1.) cadastro 2.) Pesquisar 3.) Classificar 4.) Apresentar 5.) Sair."))

    switch (inicio) {
        case 1:
            cadastro()
            break;
        case 2:
            pesquisar()
            break;
        case 3:
            classificar()
            break;
        case 4:
            apresentar()
            break;
        case 5:
            sair()
            break;
        default:
            erro()
    }
}
function cadastro() {
    for (var i = 0; i < 10; i++) {
        var pessoa = {
            nome: prompt("Qual o nome?"),
            endereco: prompt("Qual o endereço?"),
            telefone: prompt("Qual o telefone?")
        }
        if (!isNaN(pessoa.nome) || pessoa.nome === "") {
            alert("Por favor, insira um nome valido")
            i--;
            continue
        } else if (isNaN(pessoa.telefone) || pessoa.telefone < 0 || pessoa.telefone === "") {
            alert("Insira numeros validos")
            i--;
            continue
        }
        agenda.push(pessoa)
        alert("Cadastro finalizado")
    }
}
function pesquisar() {
    var nomeprocurado = prompt("Digite o nome que deseja procurar")
    var encontrado = false

    for (i = 0; i < agenda.length; i++) {
        if (agenda[i].nome.toLowerCase() === nomeprocurado.toLowerCase()) {
            alert((`Registro encontrado: ${agenda[i].nome}, ${agenda[i].endereco}, ${agenda[i].telefone}`))
            encontrado = true
            break;
        }
    }
    if (!encontrado) {
        alert("Registro não encontrado")
    }

}
function classificar() {
    agenda.sort(function (a, b) {
        return a.nome.localeCompare(b.nome);
    });
    alert("Registros classificados por nome.")

}
function apresentar() {
    if (agenda.length === 0) {
        alert("Nenhum registro cadastrado.")
        return;
    }

    var lista = "Lista de Registros:\n";
    for (var i = 0; i < agenda.length; i++) {
        lista += `${i + 1}. Nome: ${agenda[i].nome}, Endereço: ${agenda[i].endereco}, Telefone: ${agenda[i].telefone}\n`;
    }

    alert(lista);

}
function sair() {
    window.close
}
function erro() {
    alert("Por favor, insira um numero de 1 a 5")
    menu()
}
menu()