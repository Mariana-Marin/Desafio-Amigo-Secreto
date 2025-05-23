// Array para almacenar los nombres
let names = [];

// Función para añadir nombre a la lista
function addName() {
    const name = document.getElementById("nome").value.trim();
    if (name !== "") {
        names.push(name);
        updateList();
        document.getElementById("nome").value = "";  // Limpia el campo de texto
    } else {
        alert("Por favor, ingresa un nombre.");
    }
}

// Función para actualizar la lista mostrada en el HTML
function updateList() {
    const lista = document.getElementById("listaNomes");
    lista.innerHTML = "";  // Limpia la lista

    names.forEach(function(name) {
        const item = document.createElement("li");
        item.textContent = name;
        lista.appendChild(item);
    });
}

// Función para sortear un nombre aleatoriamente
function drawName() {
    if (names.length > 0) {
        const randomIndex = Math.floor(Math.random() * names.length);
        const drawnName = names[randomIndex];
        document.getElementById("resultado").textContent = `El amigo secreto sorteado es: ${drawnName}`;
    } else {
        alert("¡Añade nombres para sortear!");
    }
}

// Asociar funciones a los botones después de que el DOM esté cargado
document.getElementById("btnAdicionar").addEventListener("click", addName);
document.getElementById("btnSortear").addEventListener("click", drawName);
