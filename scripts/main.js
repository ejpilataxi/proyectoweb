// === Comparación de números con if ===
const compararNumeros = () => {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const resultado = document.getElementById('resultado-comparacion');

    if (isNaN(numero1) || isNaN(numero2)) {
        resultado.textContent = "Por favor, ingrese dos números válidos.";
    } else if (numero1 > numero2) {
        resultado.textContent = `El mayor es: ${numero1}`;
    } else if (numero1 < numero2) {
        resultado.textContent = `El mayor es: ${numero2}`;
    } else {
        resultado.textContent = "Ambos números son iguales.";
    }
};

// === Mostrar el mes correspondiente con switch ===
const mostrarMes = () => {
    const numeroMes = parseInt(document.getElementById('numero-mes').value);
    let mes;

    switch (numeroMes) {
        case 1: mes = "Enero"; break;
        case 2: mes = "Febrero"; break;
        case 3: mes = "Marzo"; break;
        case 4: mes = "Abril"; break;
        case 5: mes = "Mayo"; break;
        case 6: mes = "Junio"; break;
        case 7: mes = "Julio"; break;
        case 8: mes = "Agosto"; break;
        case 9: mes = "Septiembre"; break;
        case 10: mes = "Octubre"; break;
        case 11: mes = "Noviembre"; break;
        case 12: mes = "Diciembre"; break;
        default: mes = "Número inválido. Ingrese un número entre 1 y 12."; break;
    }

    document.getElementById('resultado-mes').innerText = mes;
};

// === Gestión de nombres en un array ===
const nombresArray = [];
const agregarNombre = () => {
    const nombre = document.getElementById('nombre').value.trim();
    const listaNombres = document.getElementById('lista-nombres');

    if (nombre) {
        nombresArray.push(nombre);
        listaNombres.innerHTML = nombresArray
            .map(nombre => `<div>${nombre}</div>`)
            .join('');
        document.getElementById('nombre').value = "";
    } else {
        alert("Por favor, ingrese un nombre válido.");
    }
};

// === Registro de usuarios ===
const registrarUsuario = () => {
    const id = document.getElementById('id').value.trim();
    const cedula = document.getElementById('cedula').value.trim();
    const nombres = document.getElementById('nombres').value.trim();
    const fechaNacimiento = document.getElementById('fecha-nacimiento').value;
    const ciudad = document.getElementById('ciudad').value;

    if (!id || !cedula || !nombres || !fechaNacimiento || !ciudad) {
        alert("Por favor, complete todos los campos del formulario.");
        return;
    }

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios.push({ id, cedula, nombres, fechaNacimiento, ciudad });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    window.location.href = "tabla.html";
};

// === Cargar usuarios en tabla ===
const cargarUsuarios = () => {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const listaUsuarios = document.getElementById('lista-usuarios');

    listaUsuarios.innerHTML = usuarios.length
        ? usuarios.map(usuario => `
            <tr>
                <td>${usuario.id}</td>
                <td>${usuario.cedula}</td>
                <td>${usuario.nombres}</td>
                <td>${usuario.fechaNacimiento}</td>
                <td>${usuario.ciudad}</td>
            </tr>
        `).join('')
        : `<tr><td colspan="5">No hay usuarios registrados.</td></tr>`;
};

// === Event Listeners ===
document.getElementById('comparar')?.addEventListener('click', compararNumeros);
document.getElementById('mostrar-mes')?.addEventListener('click', mostrarMes);
document.getElementById('agregar-nombre')?.addEventListener('click', agregarNombre);
document.getElementById('registrar')?.addEventListener('click', registrarUsuario);

// Ejecutar al cargar tabla.html
if (document.getElementById('lista-usuarios')) {
    cargarUsuarios();
}
