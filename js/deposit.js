$(document).ready(function () {

    const SALDO_INICIAL = 5000000;
    let currentBalance = SALDO_INICIAL;

    // Cargar saldo
    function cargarSaldo() {
        const saldoGuardado = localStorage.getItem('saldo-usuario');

        if (saldoGuardado === null) {
            localStorage.setItem('saldo-usuario', SALDO_INICIAL);
            currentBalance = SALDO_INICIAL;
        } else {
            currentBalance = parseFloat(saldoGuardado);
        }

        actualizarSaldo();
    }

    // Actualizar saldo en la página
    function actualizarSaldo() {
        $('#saldoActual').text(
            '$' + currentBalance.toLocaleString('es-CL')
        );
    }

    cargarSaldo();

    
    // Guardar transacción
    function guardarTransaccion(tipo, metodo, monto, descripcion, saldoResultante) {
        const data = localStorage.getItem('transacciones');
        let transacciones = data ? JSON.parse(data) : [];

        transacciones.unshift({
            tipo: tipo,
            metodo: metodo,
            monto: monto,
            descripcion: descripcion || 'Depósito',
            fecha: new Date().toISOString(),
            saldoResultante: saldoResultante
        });

        localStorage.setItem('transacciones', JSON.stringify(transacciones));
    }

    
    // Depositar dinero    
    $('#depositForm').on('submit', function (e) {
        e.preventDefault();

        const method = $('#depositMethod').val();
        const amount = parseFloat($('#depositAmount').val());
        const description = $('#depositDescription').val();

        if (!method) {
            mostrarError('Selecciona un método de depósito');
            return;
        }

        if (!amount || amount < 1) {
            mostrarError('El monto debe ser mayor a $0');
            return;
        }

        currentBalance += amount;
        localStorage.setItem('saldo-usuario', currentBalance);

        // Guardar movimiento
        guardarTransaccion(
            'Depósito',
            method,
            amount,
            description,
            currentBalance
        );

        mostrarExito(
            `Depósito exitoso. Nuevo saldo: $${currentBalance.toLocaleString('es-CL')}`
        );

        actualizarSaldo();
        this.reset();

        // Redirigir al menú
        setTimeout(function () {
            window.location.href = 'menu.html';
        }, 1500);
    });

    // Mensajes
    function mostrarError(msg) {
        $('#errorMessage').text(msg).removeClass('d-none');
        $('#successMessage').addClass('d-none');
    }

    function mostrarExito(msg) {
        $('#successMessage').text(msg).removeClass('d-none');
        $('#errorMessage').addClass('d-none');
    }

    // Cerrar sesión
    $('#logoutBtn').on('click', function () {
        localStorage.clear();
        window.location.href = 'login.html';
    });

});
