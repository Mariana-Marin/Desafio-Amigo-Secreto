// Array para armazenar os nomes
let nomes = [];

// Função para adicionar nome à lista
function adicionarNome() {
    const nome = document.getElementById("nome").value.trim();
    if (nome !== "") {
        nomes.push(nome);
        atualizarLista();
        document.getElementById("nome").value = "";  // Limpa o campo de texto
    } else {
        alert("Por favor, insira um nome.");
    }
}

// Função para atualizar a lista exibida no HTML
function atualizarLista() {
    const lista = document.getElementById("listaNomes");
    lista.innerHTML = "";  // Limpa a lista

    nomes.forEach(function(nome) {
        const item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
}

// Função para sortear um nome aleatoriamente
function sortearNome() {
    if (nomes.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * nomes.length);
        const nomeSorteado = nomes[indiceAleatorio];
        document.getElementById("resultado").textContent = `O amigo secreto sorteado é: ${nomeSorteado}`;
    } else {
        alert("Adicione nomes para sortear!");
    }
}

// Associar funções aos botões após o DOM estar carregado
document.getElementById("btnAdicionar").addEventListener("click", adicionarNome);
document.getElementById("btnSortear").addEventListener("click", sortearNome);
