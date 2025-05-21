// Ejemplo 1: Click para cambiar color
document.getElementById("btnColor").addEventListener("click", function () {
    const box = document.getElementById("box1");
    box.style.backgroundColor = box.style.backgroundColor === "lightblue" ? "lightgray" : "lightblue";
});

// Ejemplo 2: Mouseover y mouseout
const box2 = document.getElementById("box2");
const msgHover = document.getElementById("msgHover");

box2.addEventListener("mouseover", function () {
    msgHover.textContent = "¡Estás sobre la caja!";
});

box2.addEventListener("mouseout", function () {
    msgHover.textContent = "";
});

// Ejemplo 3: Contador de caracteres (input)
const inputTexto = document.getElementById("inputTexto");
const contador = document.getElementById("contador");

inputTexto.addEventListener("input", function () {
    contador.textContent = "Caracteres escritos: " + inputTexto.value.length;
});

// Ejemplo 4: Mostrar valor seleccionado (change)
const selectOpciones = document.getElementById("selectOpciones");
const opcionSeleccionada = document.getElementById("opcionSeleccionada");

selectOpciones.addEventListener("change", function () {
    const valor = selectOpciones.value;
    opcionSeleccionada.textContent = valor ? "Seleccionaste: " + valor : "";
});

// Ejemplo 5: Doble click para agrandar
const box3 = document.getElementById("box3");

box3.addEventListener("dblclick", function () {
    const isExpanded = box3.style.width === "200px";
    box3.style.width = isExpanded ? "100px" : "200px";
    box3.style.height = isExpanded ? "100px" : "200px";
});

// Ejercicio 1: keydown — Mostrar tecla presionada
const inputTecla = document.getElementById("inputTecla");
const teclaPresionada = document.getElementById("teclaPresionada");

inputTecla.addEventListener("keydown", function (event) {
    teclaPresionada.textContent = "Tecla presionada: " + event.key;
});

// Ejercicio 2: focus y blur — Cambiar el estilo al entrar y salir
const inputBorde = document.getElementById("inputBorde");

inputBorde.addEventListener("focus", function () {
    this.classList.add("highlight");
});

inputBorde.addEventListener("blur", function () {
    this.classList.remove("highlight");
});

// Ejercicio 3: contextmenu — Bloquear clic derecho
const box4 = document.getElementById("box4");

box4.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    alert("El menú contextual está deshabilitado en esta caja");
});

// Ejercicio 4: mouseleave — Restaurar color cuando el mouse sale
const box5 = document.getElementById("box5");
const originalColor = box5.style.backgroundColor;

box5.addEventListener("mouseenter", function () {
    this.style.backgroundColor = "#3498db";
});

box5.addEventListener("mouseleave", function () {
    this.style.backgroundColor = originalColor;
});

// Ejercicio 5: keyup — Validar si se escribió una palabra específica
const inputValidar = document.getElementById("inputValidar");
const validacion = document.getElementById("validacion");

inputValidar.addEventListener("keyup", function () {
    if (this.value.toLowerCase() === "malboro") {
        validacion.textContent = "¡Correcto!";
        validacion.style.color = "green";
    } else if (this.value.length > 0) {
        validacion.textContent = "Palabra incorrecta";
        validacion.style.color = "red";
    } else {
        validacion.textContent = "";
    }
});