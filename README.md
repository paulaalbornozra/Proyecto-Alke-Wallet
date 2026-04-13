# 📚 Caso de Estudio: Proyecto Alke-Wallet — Billetera Digital

> **Portafolio de Paula Albornoz Ramos**  
> 🔗 GitHub: [github.com/paulaalbornozra](https://github.com/paulaalbornozra)

---

## 📌 Descripción de la actividad

**Alke-Wallet** es una billetera digital desarrollada como proyecto integrador del Módulo 2 del bootcamp. La aplicación permite a los usuarios gestionar su dinero de forma simulada: registrarse, iniciar sesión, visualizar su saldo, realizar transferencias entre usuarios y consultar el historial de transacciones.

El proyecto fue desarrollado con HTML, CSS y JavaScript puro (Vanilla JS), lo que implicó construir toda la lógica de la aplicación sin el respaldo de frameworks externos, reforzando el dominio de los fundamentos del lenguaje.

---

## 🚧 Desafío principal

El mayor desafío fue **modelar la lógica de negocio de una billetera digital sin usar ningún framework o librería**:

- Diseñar una arquitectura de datos en JavaScript que representara usuarios, cuentas y transacciones de manera consistente.
- Implementar un flujo de autenticación simulado (registro/login) con validaciones propias desde cero.
- Sincronizar el estado de la interfaz con los datos de forma manual, sin herramientas de manejo de estado como React o Vue.
- Garantizar que las transferencias fueran coherentes: que el saldo disminuyera en el origen y aumentara en el destino sin inconsistencias.

---

## 💡 Solución propuesta

Estructuré la aplicación en módulos separados por responsabilidad:

- **Módulo de usuarios**: manejo del registro, login y sesión activa
- **Módulo de cuentas**: gestión de saldos y validaciones de transacciones
- **Módulo de historial**: registro cronológico de movimientos
- **Módulo de UI**: renderizado dinámico del DOM en respuesta a los cambios de estado

Para la persistencia de datos durante la sesión utilicé objetos JavaScript y `localStorage`, lo que me permitió simular un backend sin salir del entorno del navegador.

---

## 🛠️ Herramientas técnicas utilizadas

| Categoría | Tecnología |
|-----------|-----------|
| Lenguajes | HTML5, CSS3, JavaScript ES6+ |
| Almacenamiento | localStorage (persistencia en sesión) |
| Estructura | Vanilla JS modular (sin frameworks) |
| Control de versiones | Git + GitHub |
| Diseño | CSS Flexbox + Grid para layout responsivo |

---

## 🎓 Principales aprendizajes

1. **Fundamentos sólidos de JavaScript**: Trabajar sin frameworks me obligó a comprender en profundidad cómo funciona el DOM, los eventos, el scope y el manejo de datos en JS puro.

2. **Diseño de estructuras de datos**: Modelar usuarios, cuentas y transacciones como objetos con relaciones entre sí me dio una primera aproximación práctica al diseño de datos antes de aprender bases de datos formales.

3. **Pensamiento orientado a la lógica de negocio**: Implementar las reglas de negocio de una billetera (validar saldo suficiente, registrar movimientos, actualizar múltiples cuentas en una transacción) me enseñó a separar la lógica del negocio de la capa de presentación.

4. **Manejo del estado de la UI de forma manual**: Sin librerías de estado, tuve que sincronizar manualmente los datos con el DOM. Eso me hizo valorar mucho más herramientas como React cuando las empecé a usar.

5. **Importancia de la validación**: Cualquier transferencia mal validada rompía la coherencia de los datos. Aprendí a pensar en los casos borde antes de escribir código.

---

## 📊 Métricas de impacto

| Métrica | Resultado |
|---------|-----------|
| Funcionalidades implementadas | 5 flujos completos: registro, login, consulta de saldo, transferencia, historial |
| Validaciones cubiertas | Saldo insuficiente, usuario inexistente, campos vacíos, transferencia a sí mismo |
| Tiempo de desarrollo | 2 semanas (desarrollo asincrónico + clases en vivo) |
| Consistencia de datos | 0 inconsistencias en saldos tras múltiples transferencias en pruebas manuales |
| Cobertura de requerimientos | 100% de los requerimientos del módulo implementados y funcionales |

---

## 🧠 Habilidades técnicas aplicadas

- ✅ HTML5 semántico y accesible
- ✅ CSS3 con Flexbox y Grid para diseño responsivo
- ✅ JavaScript ES6+: funciones, arrays, objetos, destructuring, módulos
- ✅ Manipulación del DOM y manejo de eventos
- ✅ localStorage para persistencia de datos en el cliente
- ✅ Lógica de negocio: validaciones, cálculos de saldo, historial de transacciones
- ✅ Git y GitHub para control de versiones
- ✅ Pensamiento algorítmico aplicado a un problema real

---

## 🏆 ¿Por qué elegí este proyecto para mi portafolio?

Elegí **Alke-Wallet** porque representa la consolidación de los fundamentos que sostienen todo lo que vino después en mi formación. Antes de usar React o Node.js, tuve que construir una aplicación funcional y compleja con solo HTML, CSS y JavaScript puro — y eso me obligó a entender de verdad cómo funciona la web.

Este proyecto demuestra que no solo aprendí sintaxis: aprendí a pensar en términos de lógica de negocio, flujos de usuario y consistencia de datos. Cuando más adelante incorporé frameworks, los entendí como herramientas que resuelven problemas que ya había enfrentado en carne propia.

Es también el proyecto que más claramente muestra mi punto de partida en el bootcamp y el nivel de complejidad que fui capaz de abordar en las primeras etapas de mi formación.

---

## 🔐 Credenciales de prueba

| Campo | Valor |
|-------|-------|
| Email | usuario@ejemplo.com |
| Contraseña | 1234# |

---

## 🔗 Links del proyecto

- 📁 **Repositorio**: [github.com/paulaalbornozra/Proyecto-Alke-Wallet](https://github.com/paulaalbornozra/Proyecto-Alke-Wallet)

---

## 👩‍💻 Sobre mí

**Paula Albornoz Ramos**  
Desarrolladora Full Stack Trainee · JavaScript · HTML · CSS  
📍 Santiago, Chile

🐙 [github.com/paulaalbornozra](https://github.com/paulaalbornozra)

---