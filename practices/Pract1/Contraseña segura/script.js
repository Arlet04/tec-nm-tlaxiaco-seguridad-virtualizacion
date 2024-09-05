document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Previene el envío del formulario

    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    const esSegura = esContraseñaSegura(password);

    if (esSegura === true) {
        message.style.color = "#28a745"; // Verde para contraseñas seguras
        message.textContent = "La contraseña es segura.";
    } else {
        message.style.color = "#d9534f"; // Rojo para contraseñas inseguras
        message.textContent = "La contraseña no es segura: " + esSegura;
    }
});

function esContraseñaSegura(contraseña) {
    // Verificar longitud mínima
    if (contraseña.length < 8) {
        return "Debe tener al menos 8 caracteres.";
    }

    // Verificar que tenga al menos una letra mayúscula
    if (!/[A-Z]/.test(contraseña)) {
        return "Debe tener al menos una letra mayúscula.";
    }

    // Verificar que tenga al menos una letra minúscula
    if (!/[a-z]/.test(contraseña)) {
        return "Debe tener al menos una letra minúscula.";
    }

    // Verificar que tenga al menos un número
    if (!/[0-9]/.test(contraseña)) {
        return "Debe tener al menos un número.";
    }

    // Verificar que tenga al menos un carácter especial
    if (!/[!@#$%^&*(),.=\[\]{}|\\;:\'"<>/?~`_-]/.test(contraseña)) {
        return "Debe tener al menos un carácter especial.";
    }

    // Verificar que no tenga espacios en blanco
    if (/\s/.test(contraseña)) {
        return "No debe contener espacios en blanco.";
    }

    // Verificar que no tenga más de 2 caracteres iguales consecutivos
    if (/(.)\1\1/.test(contraseña)) {
        return "No debe tener más de 2 caracteres iguales consecutivos.";
    }

    return true;
}
