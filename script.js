document.addEventListener('DOMContentLoaded', () => {
    const popupOverlay = document.getElementById('initial-popup');
    const startBtn = document.getElementById('start-btn');
    const audio = document.getElementById('bg-audio');
    
    const polaroids = document.querySelectorAll('.polaroid');
    const zoomModal = document.getElementById('zoom-modal');
    const zoomedImg = document.getElementById('zoomed-img');
    const zoomedMsg = document.getElementById('zoomed-msg');
    const closeZoomBtn = document.getElementById('close-zoom-btn');

    // 1. Manejar el popup y el inicio del audio
    startBtn.addEventListener('click', () => {
        // Ocultar popup
        popupOverlay.classList.remove('active');
        
        // Reproducir audio (El navegador permite autoplay tras interacción del usuario)
        audio.volume = 0.5; // Volumen al 50%
        audio.play().catch(error => {
            console.log("No se pudo reproducir el audio automáticamente.", error);
        });
    });

    // 2. Manejar el click en cada foto polaroid
    polaroids.forEach(polaroid => {
        polaroid.addEventListener('click', () => {
            const imgPlaceholder = polaroid.querySelector('.img-placeholder');
            const bgImg = imgPlaceholder.style.backgroundImage;
            const message = polaroid.getAttribute('data-msg');

            // Setear la imagen y el mensaje en el modal de zoom
            zoomedImg.style.backgroundImage = bgImg;
            zoomedMsg.textContent = message;

            // Mostrar el modal
            zoomModal.classList.add('active');
        });
    });

    // 3. Cerrar el modal de zoom con el botón
    closeZoomBtn.addEventListener('click', () => {
        zoomModal.classList.remove('active');
    });

    // 4. Cerrar el modal al hacer click fuera del contenido de la foto
    zoomModal.addEventListener('click', (e) => {
        if (e.target === zoomModal) {
            zoomModal.classList.remove('active');
        }
    });
});
