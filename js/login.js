$(document).ready(function () {

    const CORREO = 'usuario@ejemplo.com';
    const CLAVE = '1234#';

    $('#loginForm').on('submit', function (e) {
        e.preventDefault();

        const email = $('#Email').val().trim();
        const password = $('#inputPassword').val();
        // Validar que correo contenga @
        if (!email.includes('@')) {
            $('#errorMessage')
                .text('El correo debe contener @')
                .removeClass('d-none');

            $('#successMessage').addClass('d-none');
            return;
        }

        // Validar largo contraseña entre 4 y 8 caracteres
        if (password.length < 4 || password.length > 8) {
            $('#errorMessage')
                .text('La contraseña debe tener entre 4 y 8 caracteres.')
                .removeClass('d-none');

            $('#successMessage').addClass('d-none');
            return;
        }

        // Validar correo y contraseña
        if (email !== CORREO || password !== CLAVE) {
            $('#errorMessage')
                .text('Correo y/o Contraseña Incorrectos.')
                .removeClass('d-none');

            $('#successMessage').addClass('d-none');
            return;
        }

        // Acceso exitoso
        $('#successMessage')
            .text('¡Inicio de Sesión Exitoso!')
            .removeClass('d-none');

        $('#errorMessage').addClass('d-none');

        // Redirigir a menú
        setTimeout(function () {
            window.location.href = 'menu.html';
        }, 1500);
    });

});
