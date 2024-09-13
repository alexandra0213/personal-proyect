const correctPassword = '07*11*21'; // Cambia esto a la contraseña correcta
let currentPassword = '';

function addDigit(digit) {
    currentPassword += digit;
    document.getElementById('passwordInput').value = currentPassword;
}

function clearInput() {
    currentPassword = currentPassword.slice(0, -1); // Elimina el último carácter
    document.getElementById('passwordInput').value = currentPassword;
}

function submitPassword() {
    if (currentPassword === correctPassword) {
        // Oculta el encabezado, la imagen, el contenedor de la contraseña y los botones
        document.querySelector('.encabezado').style.display = 'none';
        document.querySelector('.container').style.display = 'none';
        
        // Muestra la sección 2
        document.getElementById('section2').style.display = 'block';
    } else {
        document.getElementById('error').innerText = 'Contraseña incorrecta. Inténtalo de nuevo.';
        currentPassword = '';
        document.getElementById('passwordInput').value = '';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Inicialmente se oculta la sección 2
    document.getElementById('section2').style.display = 'none';
});


