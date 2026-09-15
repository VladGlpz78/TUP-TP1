const enlacesMenu = document.querySelectorAll('.nav-link-custom'); 
const todasLasSecciones = document.querySelectorAll('main section');

enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', function(evento) {
        
        evento.preventDefault();
        
        todasLasSecciones.forEach(seccion => {
            seccion.style.display = 'none';
        });

        const idDestino = this.getAttribute('href'); 
        
        const seccionAMostrar = document.querySelector(idDestino);
        if(seccionAMostrar) {
            seccionAMostrar.style.display = 'block';
        }
    });
});