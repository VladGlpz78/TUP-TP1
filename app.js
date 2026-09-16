document.addEventListener("DOMContentLoaded", () => {
    const enlacesMenu = document.querySelectorAll('.nav-link'); 
    const todasLasSecciones = document.querySelectorAll('main section');

    todasLasSecciones.forEach(seccion => {
        if(seccion.id !== 'inicio') seccion.style.display = 'none';
    });

    enlacesMenu.forEach(enlace => {
        enlace.addEventListener('click', function(evento) {
            evento.preventDefault();
            todasLasSecciones.forEach(seccion => seccion.style.display = 'none');
            const idDestino = this.getAttribute('href'); 
            const seccionAMostrar = document.querySelector(idDestino);
            if (seccionAMostrar) seccionAMostrar.style.display = 'block';
            if (idDestino === '#asistencias') animarAsistencias();
        });
    });

    const btnCalcular = document.getElementById('btn-calcular');
    const nota1 = document.getElementById('nota1');
    const nota2 = document.getElementById('nota2');
    const nota3 = document.getElementById('nota3');
    const resultadoTexto = document.getElementById('resultado-promedio');

    btnCalcular.addEventListener('click', () => {
        const n1 = parseFloat(nota1.value);
        const n2 = parseFloat(nota2.value);
        const n3 = parseFloat(nota3.value);

        if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
            resultadoTexto.textContent = "⚠️ Por favor, ingresa las 3 notas.";
            resultadoTexto.className = "mt-3 mb-0 fs-5 text-center text-warning fw-bold";
            return;
        }

        const promedio = ((n1 + n2 + n3) / 3).toFixed(2);

        if (promedio >= 6) {
            resultadoTexto.textContent = `¡Aprobado! Tu promedio es ${promedio}`;
            resultadoTexto.className = "mt-3 mb-0 fs-5 text-center text-success fw-bold";
        } else {
            resultadoTexto.textContent = `Desaprobado. Tu promedio es ${promedio}`;
            resultadoTexto.className = "mt-3 mb-0 fs-5 text-center text-danger fw-bold";
        }
    });

    function animarAsistencias() {
        const barra = document.getElementById('barra-asistencia');
        const texto = document.getElementById('texto-porcentaje');
        
        barra.style.width = '0%';
        texto.textContent = '0%';

        const objetivo = barra.getAttribute('data-target');

        setTimeout(() => {
            barra.style.width = `${objetivo}%`;
            barra.style.transition = "width 1.5s ease-in-out";
            texto.textContent = `${objetivo}%`;
        }, 100);
    }
});