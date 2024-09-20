const signos = [
    { nombre: "Mono", imagen: "img/mono.jpeg" },
    { nombre: "Gallo", imagen: "img/gallo.jpeg" },
    { nombre: "Perro", imagen: "img/perro.jpeg" },
    { nombre: "Cerdo", imagen: "img/cerdo.jpeg" },
    { nombre: "Rata", imagen: "img/rata.jpeg" },
    { nombre: "Buey", imagen: "img/buey.jpeg" },
    { nombre: "Tigre", imagen: "img/tigre.jpeg" },
    { nombre: "Conejo", imagen: "img/conejo.jpeg" },
    { nombre: "Dragón", imagen: "img/dragon.jpeg" },
    { nombre: "Serpiente", imagen: "img/serpiente.jpeg" },
    { nombre: "Caballo", imagen: "img/caballo.jpeg" },
    { nombre: "Cabra", imagen: "img/cabra.jpeg" }
];

// Función que calcula el resto de la división del año entre 12
function calcularResto(anio) {
    return anio % 12;
}

document.getElementById('boton').addEventListener('click', function () {
    let anio = parseInt(document.getElementById('anio').value);
    let resto = calcularResto(anio); // Usamos la función para obtener el resto
    document.getElementById('resto').innerText = resto;

    switch (resto) {
        case 0:
            document.getElementById('signo').innerText = signos[0].nombre;
            document.getElementById('imagen-signo').src = signos[0].imagen;
            break;
        case 1:
            document.getElementById('signo').innerText = signos[1].nombre;
            document.getElementById('imagen-signo').src = signos[1].imagen;
            break;
        case 2:
            document.getElementById('signo').innerText = signos[2].nombre;
            document.getElementById('imagen-signo').src = signos[2].imagen;
            break;
        case 3:
            document.getElementById('signo').innerText = signos[3].nombre;
            document.getElementById('imagen-signo').src = signos[3].imagen;
            break;
        case 4:
            document.getElementById('signo').innerText = signos[4].nombre;
            document.getElementById('imagen-signo').src = signos[4].imagen;
            break;
        case 5:
            document.getElementById('signo').innerText = signos[5].nombre;
            document.getElementById('imagen-signo').src = signos[5].imagen;
            break;
        case 6:
            document.getElementById('signo').innerText = signos[6].nombre;
            document.getElementById('imagen-signo').src = signos[6].imagen;
            break;
        case 7:
            document.getElementById('signo').innerText = signos[7].nombre;
            document.getElementById('imagen-signo').src = signos[7].imagen;
            break;
        case 8:
            document.getElementById('signo').innerText = signos[8].nombre;
            document.getElementById('imagen-signo').src = signos[8].imagen;
            break;
        case 9:
            document.getElementById('signo').innerText = signos[9].nombre;
            document.getElementById('imagen-signo').src = signos[9].imagen;
            break;
        case 10:
            document.getElementById('signo').innerText = signos[10].nombre;
            document.getElementById('imagen-signo').src = signos[10].imagen;
            break;
        case 11:
            document.getElementById('signo').innerText = signos[11].nombre;
            document.getElementById('imagen-signo').src = signos[11].imagen;
            break;
        default:
            alert("Error al calcular el signo.");
    }
});
