// funciones/funciones.js

// index.html: Mostrar mensaje de bienvenida
function bienvenida() {
    alert("¡Bienvenido a la Feria Internacional de Roma 2025!");
}

// lugares.html: Mostrar información adicional de lugares
function mostrarLugar() {
    alert("Roma ofrece monumentos como el Coliseo, Fontana di Trevi y el Vaticano.");
}

// gastronomia.html: Mostrar platos típicos destacados
function mostrarPlato() {
    alert("Algunos platos destacados: Pasta Carbonara, Pizza Margherita, Gelato.");
}

// tecnologia.html: Mostrar novedades tecnológicas
function mostrarNovedad() {
    alert("Se exhibirán drones, robots de asistencia y realidad virtual interactiva.");
}

// contacto.html: Validar formulario simple
function validarFormulario() {
    const nombre = document.getElementById("nombre").value.trim();
    if(nombre === "") {
        alert("Por favor ingresa tu nombre.");
        return false;
    }
    alert("Formulario enviado correctamente. ¡Gracias!");
    return true;
}
