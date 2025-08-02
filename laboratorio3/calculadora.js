
// Parte 1: Funciones matemáticas básicas
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "no se puede dividir por cero";
    }
    return a / b;
}

// Parte 2: Usando if...else en lugar de switch
function realizarOperacion(num1, num2, operacion) {
    if (operacion === 'sumar') {
        return sumar(num1, num2);
    } else if (operacion === 'restar') {
        return restar(num1, num2);
    } else if (operacion === 'multiplicar') {
        return multiplicar(num1, num2);
    } else if (operacion === 'dividir') {
        return dividir(num1, num2);
    } else {
        return 'operación no válida';
    }
}

// Parte 3: Captura de evento y cálculo
document.getElementById('formCalculadora').addEventListener('submit', function (event) {
    event.preventDefault();

    const n1 = Number(document.getElementById('numero1').value);
    const n2 = Number(document.getElementById('numero2').value);
    const operacion = document.getElementById('operacion').value;

    //Validación para que el usuario tenga que seleccionar una operación
    if (operacion === "") {
        document.getElementById('resultado').textContent = "Por favor seleccione una operación válida.";
        return; // No sigue ejecutando el cálculo si no hay operación válida
    }
    const resultado = realizarOperacion(n1, n2, operacion);
    document.getElementById('resultado').textContent = "El resultado es: " + resultado;
});
