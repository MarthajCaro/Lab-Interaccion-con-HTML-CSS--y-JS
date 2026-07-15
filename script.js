let valor = 0;

function sumar() {
    valor++;
    actualizar();
}

function restar() {
    valor--;
    actualizar()
}

function evaluar() {
    const nombre = document.getElementById("nombre").value;
    const resultado = document.getElementById("resultado");

    if (valor >= 10) {
    resultado.textContent = `${nombre}, tienes energía máxima ⚡🔥`;
    } else if (valor >= 5) {
    resultado.textContent = `${nombre}, vas bien 💪`;
    } else {
    resultado.textContent = `${nombre}, necesitas más energía 😴`;
    }
}
