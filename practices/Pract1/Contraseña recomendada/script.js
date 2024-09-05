function generarContraseña() {
    const longitud = 12; // Longitud mínima para mayor seguridad
    const letrasMayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    const numeros = '0123456789';
    const caracteresEspeciales = '!@#$%^&*()_+=-[]{}|;:\'"<>,.?/~`';
    const todosCaracteres = letrasMayusculas + letrasMinusculas + numeros + caracteresEspeciales;

    let contraseña = '';

    // Generar al menos un carácter de cada tipo
    contraseña += letrasMayusculas.charAt(Math.floor(Math.random() * letrasMayusculas.length));
    contraseña += letrasMinusculas.charAt(Math.floor(Math.random() * letrasMinusculas.length));
    contraseña += numeros.charAt(Math.floor(Math.random() * numeros.length));
    contraseña += caracteresEspeciales.charAt(Math.floor(Math.random() * caracteresEspeciales.length));

    // Completar la contraseña con caracteres aleatorios hasta alcanzar la longitud deseada
    while (contraseña.length < longitud) {
        let nuevoCaracter = todosCaracteres.charAt(Math.floor(Math.random() * todosCaracteres.length));
        // Evitar más de 2 caracteres iguales consecutivos
        if (contraseña.length >= 2 && nuevoCaracter === contraseña.charAt(contraseña.length - 1) && nuevoCaracter === contraseña.charAt(contraseña.length - 2)) {
            continue;
        }
        contraseña += nuevoCaracter;
    }

    // Mezclar los caracteres para evitar patrones predecibles
    contraseña = mezclarCaracteres(contraseña);

    // Mostrar la contraseña generada
    document.getElementById('passwordOutput').textContent = "Contraseña segura recomendada: " + contraseña;
}

function mezclarCaracteres(contraseña) {
    let array = contraseña.split('');
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join('');
}
