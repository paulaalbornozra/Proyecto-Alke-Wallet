$(document).ready(function () {
    if (localStorage.getItem('saldo-usuario') === null) {
        localStorage.setItem('saldo-usuario', 5000000);
    }

    // Saldo actual
    const saldo = parseFloat(localStorage.getItem('saldo-usuario'));
    $('#saldoActual').text(`$${saldo.toLocaleString('es-CL')}`);

    // redirección con mensaje
    function redirigirConMensaje(mensaje, url) {
        // Crear el mensaje si no existe
        if ($('#mensajeRedireccion').length === 0) {
            $('body').append('<div class="alert alert-info text-center fixed-top mt-3 mx-auto" id="mensajeRedireccion" style="max-width: 400px; z-index: 9999;"></div>');
        }

        const $mensaje = $('#mensajeRedireccion');
        $mensaje.text(mensaje).fadeIn();

        setTimeout(function() {
            window.location.href = url;
        }, 1000);
    }

    // Botones del menú
    // Botón Depositar
    $('a[href="deposit.html"]').on('click', function(e) {
        e.preventDefault();
        redirigirConMensaje('Redirigiendo a Depositar...', 'deposit.html');
    });

    // Botón Enviar Dinero
    $('a[href="sendmoney.html"]').on('click', function(e) {
        e.preventDefault();
        redirigirConMensaje('Redirigiendo a Enviar Dinero...', 'sendmoney.html');
    });

    // Botón Últimos Movimientos
    $('a[href="transactions.html"]').on('click', function(e) {
        e.preventDefault();
        redirigirConMensaje('Redirigiendo a Últimos Movimientos...', 'transactions.html');
    });

});