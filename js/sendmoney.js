$(document).ready(function () {

    const SALDO_INICIAL = 5000000;
    let currentBalance = SALDO_INICIAL;

    // Inicializar página
    function inicializarPagina() {
        const saldoGuardado = localStorage.getItem('saldo-usuario');

        if (saldoGuardado !== null) {
            currentBalance = parseFloat(saldoGuardado);
        } else {
            currentBalance = SALDO_INICIAL;
            localStorage.setItem('saldo-usuario', currentBalance);
        }

        actualizarSaldo();
        cargarContactosGuardados(); // Cargar contactos guardados primero
        cargarContactosEnSelect();
    }

    // Saldo actual
    function actualizarSaldo() {
        $('#saldoActual').text(
            '$' + currentBalance.toLocaleString('es-CL')
        );
    }

    // Contactos guardados
    function cargarContactosGuardados() {
        const contactosGuardados = JSON.parse(localStorage.getItem('contactos-guardados')) || [];

        // Agregar contactos guardados al principio de la lista
        contactosGuardados.forEach(function(contacto) {
            const contactHTML = `
                <a href='#'
                    class='list-group-item list-group-item-action contact-item'
                    data-name='${contacto.name}'
                    data-bank='${contacto.bank}'
                    data-account='${contacto.account}'
                    data-email='${contacto.email}'>
                    <div class="d-flex w-100 justify-content-between">
                        <h6 class='mb-1'>${contacto.name}</h6>
                    </div>
                    <p class='mb-1 small'>${contacto.bank} - Cuenta: ${contacto.account}</p>
                    <small class='text'>${contacto.email}</small>
                </a>
            `;

            $('#contactList').prepend(contactHTML);
        });
    }

    // Contactos en el select
    function cargarContactosEnSelect() {
        const select = $('#sendmoneyContact');
        select.find('option:not(:first)').remove();

        // Cargar todos los contactos (guardados y predefinidos) en el select
        $('.contact-item').each(function () {
            const name = $(this).data('name');
            const bank = $(this).data('bank');
            const account = $(this).data('account');
            const email = $(this).data('email');

            const option = $('<option>', {
                value: name,
                text: `${name} - ${bank} (${account})`,
                'data-bank': bank,
                'data-account': account,
                'data-email': email
            });

            select.append(option);
        });
    }

    // Selección de contacto
    $(document).on('click', '.contact-item', function (e) {
        e.preventDefault();

        $('.contact-item').removeClass('active');
        $(this).addClass('active');
        const name = $(this).data('name');
        $('#sendmoneyContact').val(name);

        $('html, body').animate({
            scrollTop: $('.sendmoney-container').offset().top - 100
        }, 400);
    });

    // Envío de dinero
    $('#sendmoneyForm').on('submit', function (e) {
        e.preventDefault();

        const selectedOption = $('#sendmoneyContact option:selected');
        const contactName = selectedOption.val();
        const amount = parseFloat($('#sendmoneyAmount').val());
        const description = $('#sendmoneyDescription').val();

        if (!contactName) {
            mostrarError('Debes seleccionar un contacto');
            return;
        }

        if (!amount || amount <= 0) {
            mostrarError('El monto debe ser mayor a $0');
            return;
        }

        if (amount > currentBalance) {
            mostrarError(
                'Saldo insuficiente. Saldo actual: $' +
                currentBalance.toLocaleString('es-CL')
            );
            return;
        }

        // Descontar saldo
        currentBalance -= amount;
        localStorage.setItem('saldo-usuario', currentBalance);

        // Guardar transacción
        let transacciones = JSON.parse(
            localStorage.getItem('transacciones')
        ) || [];

        const nuevaTransaccion = {
            tipo: 'Envío',
            destinatario: contactName,
            banco: selectedOption.data('bank'),
            cuenta: selectedOption.data('account'),
            monto: amount,
            descripcion: description || 'Envío de dinero',
            fecha: new Date().toISOString(),
            saldoResultante: currentBalance
        };

        transacciones.unshift(nuevaTransaccion);

        if (transacciones.length > 50) {
            transacciones = transacciones.slice(0, 50);
        }

        localStorage.setItem(
            'transacciones',
            JSON.stringify(transacciones)
        );

        $('#successMessage')
            .text(`¡Envío exitoso! Se enviaron $${amount.toLocaleString('es-CL')} a ${contactName}.`)
            .removeClass('d-none');

        $('#errorMessage').addClass('d-none');

        actualizarSaldo();
        this.reset();
        $('.contact-item').removeClass('active');

        // Redirigir al menú
        setTimeout(function () {
            window.location.href = 'menu.html';
        }, 2000);
    });

    // Agregar nuevo contacto
    $('#addContactForm').on('submit', function (e) {
        e.preventDefault();

        const name = $('#contactName').val().trim();
        const bank = $('#contactBank').val();
        const account = $('#contactAccount').val().trim();
        const email = $('#contactEmail').val().trim();

        // Validar que no exista el contacto
        const contactosGuardados = JSON.parse(localStorage.getItem('contactos-guardados')) || [];
        const existe = contactosGuardados.some(c => c.name === name || c.email === email);

        if (existe) {
            alert('Ya existe un contacto con ese nombre o email');
            return;
        }

        // Guardar en localStorage
        const nuevoContacto = {
            name: name,
            bank: bank,
            account: account,
            email: email
        };

        contactosGuardados.unshift(nuevoContacto); // Agregar al principio
        localStorage.setItem('contactos-guardados', JSON.stringify(contactosGuardados));

        // Quitar active de todos
        $('.contact-item').removeClass('active');

        // Agregar al HTML al principio de la lista
        const contactHTML = `
            <a href='#'
                class='list-group-item list-group-item-action contact-item active'
                data-name='${name}'
                data-bank='${bank}'
                data-account='${account}'
                data-email='${email}'>
                <div class="d-flex w-100 justify-content-between">
                    <h6 class='mb-1'>${name}</h6>
                </div>
                <p class='mb-1 small'>${bank} - Cuenta: ${account}</p>
                <small class='text'>${email}</small>
            </a>
        `;

        $('#contactList').prepend(contactHTML);

        // Agregar al select al principio
        const optionHTML = `
            <option value='${name}' data-bank='${bank}' data-account='${account}' data-email='${email}'>
                ${name} - ${bank} (${account})
            </option>
        `;

        $('#sendmoneyContact option:first').after(optionHTML);

        // Seleccionar el nuevo contacto
        $('#sendmoneyContact').val(name);

        // Limpiar formulario
        this.reset();

        // Cerrar modal
        bootstrap.Modal.getInstance(
            document.getElementById('addContactModal')
        ).hide();

        // Scroll al formulario
        $('html, body').animate({
            scrollTop: $('.sendmoney-container').offset().top - 100
        }, 400);
    });

    // Mostrar error
    function mostrarError(msg) {
        $('#errorMessage').text(msg).removeClass('d-none');
        $('#successMessage').addClass('d-none');
    }

    // Inicializar
    inicializarPagina();

});