// Lista para almacenar los nombres de los participantes
let participantes = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
    } else if (participantes.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
    } else {
        participantes.push(nombre);
        input.value = ""; 
        actualizarLista();
        let resultadoLista = document.getElementById("resultado");
        resultadoLista.innerHTML = "";
    }
}

// Función para actualizar la lista en la interfaz
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    participantes.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    if (participantes.length < 2) {
        alert("Debe haber al menos 2 participantes para el sorteo.");
    } else {
        let indiceAleatorio = Math.floor(Math.random() * participantes.length);
        let secreto = participantes[indiceAleatorio];

        // Mostrar el resultado en la interfaz
        let resultadoLista = document.getElementById("resultado");
        resultadoLista.innerHTML = `<li>El amigo secreto es <strong>${secreto}</strong> </li>`;
        participantes = [];
        actualizarLista();

    }
}
