document.addEventListener('DOMContentLoaded', () => {
    const slidesContainer = document.getElementById('slides');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;
    const totalSlides = slides.length;

    function updateCarousel() {
        // Calcula o deslocamento em porcentagem
        const offset = -currentIndex * 100;
        // Aplica o deslocamento ao container
        slidesContainer.style.transform = `translateX(${offset}%)`;

        // Lógica para desativar botões nas extremidades
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === totalSlides - 1;
    }

    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    // Inicia o carrossel no estado correto (primeira imagem)
    updateCarousel();
});
