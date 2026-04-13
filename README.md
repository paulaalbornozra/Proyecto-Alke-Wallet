# 💳 Alke Wallet

Una billetera digital moderna y segura para gestionar tus finanzas de forma simple y eficiente.

## 📋 Descripción

Alke Wallet es una aplicación web de billetera digital que permite a los usuarios gestionar su dinero de manera segura y sencilla. Con una interfaz intuitiva y moderna, los usuarios pueden depositar dinero, enviar transferencias a contactos y revisar el historial completo de sus transacciones.

## ✨ Características

- **🔐 Sistema de Autenticación**: Inicio de sesión seguro con validación de credenciales
- **💰 Gestión de Saldo**: Visualización en tiempo real del saldo disponible
- **📥 Depósitos**: Realiza depósitos mediante diferentes métodos (transferencia bancaria, tarjeta de débito, cuenta de ahorro)
- **📤 Envío de Dinero**: Transfiere dinero a contactos de forma rápida y segura
- **👥 Gestión de Contactos**: Agrega y administra tus contactos frecuentes
- **📊 Historial de Transacciones**: Consulta todos tus movimientos con filtros por tipo
- **🎨 Diseño Responsive**: Interfaz adaptable a dispositivos móviles, tablets y desktop
- **🌙 Tema Oscuro**: Diseño moderno con gradientes y efectos visuales

## 🚀 Tecnologías Utilizadas

- **HTML5**: Estructura semántica de las páginas
- **CSS3**: Estilos personalizados con gradientes y animaciones
- **JavaScript (ES6+)**: Lógica de la aplicación
- **jQuery 3.7.1**: Manipulación del DOM y eventos
- **Bootstrap 5.3.0**: Framework CSS para diseño responsive
- **LocalStorage**: Almacenamiento local de datos del usuario

## 📁 Estructura del Proyecto

```
Proyecto-Alke-Wallet/
│
├── css/
│   └── style.css              # Estilos personalizados
│
├── js/
│   ├── login.js               # Lógica de inicio de sesión
│   ├── menu.js                # Lógica del menú principal
│   ├── deposit.js             # Lógica de depósitos
│   ├── sendmoney.js           # Lógica de envío de dinero
│   └── transactions.js        # Lógica de transacciones
│
├── index.html                 # Página de bienvenida
├── login.html                 # Página de inicio de sesión
├── menu.html                  # Menú principal
├── deposit.html               # Página de depósitos
├── sendmoney.html            # Página de envío de dinero
├── transactions.html          # Historial de transacciones
└── README.md                  # Este archivo
```

## 🔧 Instalación

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/paulaalbornozra/Proyecto-Alke-Wallet.git
   ```

2. **Navega al directorio del proyecto**:
   ```bash
   cd Proyecto-Alke-Wallet
   ```

3. **Abre el proyecto**:
   - Puedes abrir `index.html` directamente en tu navegador
   - O usar un servidor local como Live Server en VS Code

## 💻 Uso

### Credenciales de Acceso

Para iniciar sesión en la aplicación, utiliza las siguientes credenciales:

- **Email**: `usuario@ejemplo.com`
- **Contraseña**: `1234#`

### Funcionalidades Principales

1. **Depositar Dinero**:
   - Selecciona el método de depósito
   - Ingresa el monto deseado
   - Agrega un mensaje opcional
   - Confirma la operación

2. **Enviar Dinero**:
   - Selecciona un contacto de la lista o agrégalo
   - Ingresa el monto a transferir
   - Añade un mensaje opcional
   - Confirma el envío

3. **Ver Transacciones**:
   - Consulta todas tus operaciones
   - Filtra por tipo (depósitos o envíos)
   - Revisa el saldo resultante de cada operación

## 🎨 Características de Diseño

- **Gradientes Modernos**: Fondo con degradados púrpura y azul
- **Efectos Hover**: Animaciones suaves en botones y tarjetas
- **Diseño Glass Morphism**: Contenedores con transparencia y blur
- **Iconografía**: Iconos claros y representativos para cada función
- **Feedback Visual**: Alertas de éxito y error claramente diferenciadas

## 📱 Responsive Design

La aplicación está optimizada para:
- 📱 Smartphones (< 576px)
- 📱 Tablets (576px - 768px)
- 💻 Laptops (768px - 1200px)
- 🖥️ Desktop (> 1200px)

## 💾 Almacenamiento de Datos

Los datos se almacenan localmente en el navegador usando `localStorage`:

- **saldo-usuario**: Saldo actual del usuario
- **transacciones**: Array con todas las transacciones
- **contactos-guardados**: Lista de contactos agregados por el usuario

## 🔒 Validaciones

La aplicación incluye múltiples validaciones:

- ✅ Email debe contener "@"
- ✅ Contraseña entre 4 y 8 caracteres
- ✅ Monto debe ser mayor a $0
- ✅ Saldo suficiente para envíos
- ✅ Selección obligatoria de método/contacto

## 🌐 Navegadores Compatibles

- Google Chrome (recomendado)
- Mozilla Firefox
- Microsoft Edge
- Safari
- Opera

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Roadmap

Funcionalidades futuras planeadas:

- [ ] Autenticación con backend real
- [ ] Gráficos de gastos e ingresos
- [ ] Exportación de transacciones (PDF/Excel)
- [ ] Notificaciones push
- [ ] Múltiples cuentas por usuario
- [ ] Cambio de divisa
- [ ] Modo claro/oscuro configurable

## 👥 Autores

- **Paula Albornoz** - https://github.com/paulaalbornozra

## 🙏 Agradecimientos

- Bootstrap por el framework CSS
- jQuery por facilitar la manipulación del DOM
- Freepik por los iconos utilizados
- La comunidad de desarrolladores por su inspiración

---

⭐ Si te gusta este proyecto, no olvides darle una estrella en GitHub!