// Declaración de variables y arrays
const usuariosRegistrados = [
    { username: "admin", password: "admin123" },
    { username: "usuario1", password: "123456" },
    { username: "usuario2", password: "abcdef" }
];

let intentosFallidos = 0;
const maxIntentos = 3;

// Función para verificar credenciales
function verificarCredenciales(username, password) {
    console.log("Verificando credenciales para: " + username);
    
    // Bucle for para buscar el usuario
    for (let i = 0; i < usuariosRegistrados.length; i++) {
        if (usuariosRegistrados[i].username === username && 
            usuariosRegistrados[i].password === password) {
            return true;
        }
    }
    return false;
}

// Función para iniciar sesión
function iniciarSesion() {
    // Simulación de entrada de usuario con prompt
    const username = prompt("Ingrese su nombre de usuario:");
    const password = prompt("Ingrese su contraseña:");
    
    // Condicional para validar campos vacíos
    if (!username || !password) {
        alert("Por favor, complete todos los campos");
        return;
    }
    
    // Condicional para verificar credenciales
    if (verificarCredenciales(username, password)) {
        console.log("Inicio de sesión exitoso");
        alert("¡Bienvenido " + username + "!");
    } else {
        intentosFallidos++;
        console.log("Intento fallido #" + intentosFallidos);
        
        // Condicional para bloquear después de máximos intentos
        if (intentosFallidos >= maxIntentos) {
            alert("Ha excedido el número máximo de intentos.");
        } else {
            alert("Usuario o contraseña incorrectos. Intento " + intentosFallidos + " de " + maxIntentos);
        }
    }
}

// Función para registrar un nuevo usuario
function registrarUsuario() {
    const nuevoUsername = prompt("Ingrese un nombre de usuario:");
    
    if (!nuevoUsername) {
        return;
    }
    
    // Verificar si el usuario ya existe
    let usuarioExistente = false;
    for (let i = 0; i < usuariosRegistrados.length; i++) {
        if (usuariosRegistrados[i].username === nuevoUsername) {
            usuarioExistente = true;
            break;
        }
    }
    
    if (usuarioExistente) {
        alert("El nombre de usuario ya está en uso. Por favor, elija otro.");
        return;
    }
    
    const nuevaPassword = prompt("Ingrese una contraseña:");
    
    if (nuevaPassword) {
        // Agregar nuevo usuario al array
        usuariosRegistrados.push({ username: nuevoUsername, password: nuevaPassword });
        console.log("Nuevo usuario registrado: " + nuevoUsername);
        
        // Mostrar todos los usuarios registrados
        console.log("Lista de usuarios registrados:");
        for (let i = 0; i < usuariosRegistrados.length; i++) {
            console.log("Usuario #" + (i + 1) + ": " + usuariosRegistrados[i].username);
        }
        
        alert("Usuario registrado con éxito.");
    }
}

// Función para mostrar menú principal
function mostrarMenu() {
    const opcion = prompt(
        "Seleccione una opción:\n" +
        "1. Iniciar sesión\n" +
        "2. Registrarse\n" +
        "3. Salir"
    );
    
    // Condicional para manejar la opción seleccionada
    if (opcion === "1") {
        iniciarSesion();
        mostrarMenu(); // Volver al menú
    } else if (opcion === "2") {
        registrarUsuario();
        mostrarMenu(); // Volver al menú
    } else if (opcion === "3") {
        alert("¡Hasta pronto!");
    } else {
        alert("Opción no válida. Intente nuevamente.");
        mostrarMenu(); // Volver al menú
    }
}

// Iniciar el programa
console.log("Iniciando sistema de login...");
alert("Bienvenido al sistema de login");
mostrarMenu();