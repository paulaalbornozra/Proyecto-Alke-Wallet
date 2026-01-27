$(document).ready(function () {

    // Variable global para almacenar todas las transacciones
    let todasLasTransacciones = [];

    // Cargar transacciones al inicio
    cargarTransacciones();

    // Filtro
    $('#filtroTipo').on('change', function() {
        const tipoSeleccionado = $(this).val();
        mostrarTransaccionesFiltradas(tipoSeleccionado);
    });

    // Transacciones
    function cargarTransacciones() {
        const data = localStorage.getItem('transacciones');
        todasLasTransacciones = data ? JSON.parse(data) : [];

        if (todasLasTransacciones.length === 0) {
            $('#noTransactions').removeClass('d-none');
            $('.table-responsive').addClass('d-none');
            return;
        }

        $('#noTransactions').addClass('d-none');
        $('.table-responsive').removeClass('d-none');
        
        // Mostrar todas las transacciones al inicio
        mostrarTransaccionesFiltradas('todos');
    }

    // Transacciones filtradas
    function mostrarTransaccionesFiltradas(filtro) {
        // Limpiar tabla
        $('#transactionsTable').empty();

        // Filtrar transacciones
        let transaccionesFiltradas = todasLasTransacciones;
        
        if (filtro !== 'todos') {
            transaccionesFiltradas = todasLasTransacciones.filter(tx => tx.tipo === filtro);
        }

        // Verificar si hay resultados después del filtro
        if (transaccionesFiltradas.length === 0) {
            const mensajeFiltro = filtro === 'todos' 
                ? 'No existen movimientos registrados.' 
                : `No hay movimientos de tipo "${filtro}"`;
            
            $('#noTransactions').text(mensajeFiltro).removeClass('d-none');
            $('.table-responsive').addClass('d-none');
            return;
        }

        $('#noTransactions').addClass('d-none');
        $('.table-responsive').removeClass('d-none');

        // Mostrar transacciones filtradas
        transaccionesFiltradas.forEach(tx => {
            const fecha = new Date(tx.fecha).toLocaleString('es-CL');
            const esEnvio = tx.tipo === 'Envío';
            
            const monto = esEnvio
                ? `- $${tx.monto.toLocaleString('es-CL')}`
                : `+ $${tx.monto.toLocaleString('es-CL')}`;

            // Determinar destinatario
            let destinatario = '-';
            if (esEnvio && tx.destinatario) {
                destinatario = tx.destinatario;
            } else if (esEnvio && tx.descripcion) {
                // Si no hay campo destinatario, intentar extraerlo de la descripción
                const match = tx.descripcion.match(/a (.+)/i);
                if (match) {
                    destinatario = match[1];
                }
            } else if (!esEnvio) {
                // Si es depósito, mostrar "Cuenta propia"
                destinatario = 'Cuenta propia';
            }

            const row = `
                <tr>
                    <td style='min-width:140px'>${fecha}</td>
                    <td><span class="badge ${esEnvio ? 'bg-danger' : 'bg-success'}">${tx.tipo}</span></td>
                    <td>${tx.descripcion || '-'}</td>
                    <td><strong>${destinatario}</strong></td>
                    <td class="${esEnvio ? 'text-danger' : 'text-success'} fw-bold">
                        ${monto}
                    </td>
                    <td>$${tx.saldoResultante.toLocaleString('es-CL')}</td>
                </tr>
            `;

            $('#transactionsTable').append(row);
        });
    }

});