let valor = 0;

function sumar(puntos, accion) {
    valor += puntos;

    const resultado = document.getElementById("resultado");
    resultado.textContent = "Ganaste energía por: " + accion + " ⚡";

    actualizar();
}

function restar(puntos, accion) {
    valor -= puntos;

    const resultado = document.getElementById("resultado");
    resultado.textContent = "Perdiste energía por: " + accion + " 🔋";

    actualizar();
}


function verEstado() {
    const nombre = document.getElementById("nombre").value || "Usuario";
    const resultado = document.getElementById("resultado");

    if (!resultado) {
        console.log("No existe el elemento resultado");
        return;
    }
    
    let mensaje = "";

    if (valor >= 10) {
        mensaje = "🔥 Muy buena energía";
    } else if (valor >= 5) {
        mensaje = "💪 Tienes buena energía";
    } else {
        mensaje = "😴 Te queda poca energía";
    }

    resultado.textContent = `${nombre}, ${mensaje}`;
}


function calcularEnergia() {
    
    let total = 0;

    if (document.getElementById("comer").checked) total += 3;
    if (document.getElementById("dormir").checked) total += 5;
    if (document.getElementById("ejercicio").checked) total += 4;
    if (document.getElementById("estudiar").checked) total -= 3;
    if (document.getElementById("trabajar").checked) total -= 5;

    valor = total;
    actualizar();
    verEstado();


}

    function actualizar() {
    const elemento = document.getElementById("valor");
    elemento.textContent = valor;

    if (valor >= 10) {
        elemento.style.color = "#00ff88"; 
    } else if (valor >= 5) {
        elemento.style.color = "#ffd166"; 
    } else {
        elemento.style.color = "#ff6b6b"; 
    }
}