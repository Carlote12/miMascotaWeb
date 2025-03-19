document.addEventListener('DOMContentLoaded', () => {
    let comida = 100;
    let energia = 100;
    const imagenMascota = document.getElementById('imagenMascota');

    // Actualiza las barras de comida y energía, y cambia su color
    function actualizarBarras() {
        const barraComida = document.getElementById('barraComida');
        const barraEnergia = document.getElementById('barraEnergia');

        barraComida.style.width = `${comida}%`;
        barraEnergia.style.width = `${energia}%`;

        // Cambia el color de la barra de comida
        if (comida >= 70) {
            barraComida.style.backgroundColor = '#4CAF50'; // Verde
        } else if (comida >= 30) {
            barraComida.style.backgroundColor = '#FFC107'; // Amarillo
        } else {
            barraComida.style.backgroundColor = '#F44336'; // Rojo
        }

        // Cambia el color de la barra de energía
        if (energia >= 70) {
            barraEnergia.style.backgroundColor = '#4CAF50'; // Verde
        } else if (energia >= 30) {
            barraEnergia.style.backgroundColor = '#FFC107'; // Amarillo
        } else {
            barraEnergia.style.backgroundColor = '#F44336'; // Rojo
        }

        console.log(`Comida: ${comida}%, Energía: ${energia}%`); // Depuración
    }

    // Cambia temporalmente la imagen al estado feliz
    function cambiarEstadoTemporal() {
        imagenMascota.classList.add('feliz');
        setTimeout(() => {
            imagenMascota.classList.remove('feliz');
        }, 2000);
    }

    // Función para alimentar a la mascota
    function alimentar() {
        comida = Math.min(comida + 10, 100);
        actualizarBarras();
        cambiarEstadoTemporal();
    }

    // Función para jugar con la mascota
    function jugar() {
        comida = Math.max(comida - 5, 0);
        energia = Math.max(energia - 10, 0);
        actualizarBarras();
        cambiarEstadoTemporal();
    }

    // Función para dormir
    function dormir() {
        energia = Math.min(energia + 20, 100);
        actualizarBarras();
    }

    // Reduce comida y energía automáticamente cada 2 segundos
    setInterval(() => {
        comida = Math.max(comida - 2, 0); // Cambios más segmentados
        energia = Math.max(energia - 2, 0);

        actualizarBarras();

        if (comida === 0 || energia === 0) {
            alert('¡Tu mascota necesita atención urgente!');
        }
    }, 2000); // Cada 2 segundos

    // Inicialización
    actualizarBarras();

    // Agregar eventos a los botones
    window.alimentar = alimentar;
    window.jugar = jugar;
    window.dormir = dormir;
});
