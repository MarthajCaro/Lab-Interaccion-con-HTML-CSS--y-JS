let valor = 0;

function sumar() {
    valor++;
    actualizar();
}

function restar() {
    valor--;
    actualizar()
}

function actualizar() {
    const elemento = document.getElementById("valor");
    elemento.textContent = valor;

  // 🔥 condición del ejercicio
    if (valor >= 10) {
    elemento.style.color = "lime"; // verde
    } else {
    elemento.style.color = "white"; // normal
    }

function evaluar() {
    const nombre = document.getElementById("nombre").value;
    const resultado = document.getElementById("resultado");

    if (valor >= 10) {
    resultado.textContent = `${nombre}, estás en tu máximo nivel ⚡🔥`;
    } else if (valor >= 5) {
    resultado.textContent = `${nombre}, buen nivel de energía 💪`;
    } else {
    resultado.textContent = `${nombre}, sube tu nivel de energía ⚡😴`;
    }
    


function verEstado() {
    let mensaje = "";

    if (valor <= 0) {
        mensaje = "😴 Estás sin energía";
    } else if (valor < 10) {
        mensaje = "🙂 Vas subiendo tu energía";
    } else {
        mensaje = "⚡ ¡Energía al máximo!";
    }

    document.getElementById("mensaje").textContent = mensaje;
}
}

}