/**
 * Smart State-Based Carousel Slider
 * Vanilla JS implementation for synchronized UI state tracking.
 */
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.plate-slide');
    const heroText = document.getElementById('heroText');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const helmIcon = document.getElementById('helmImage');
    
    const serveList = document.getElementById('serveList');
    const useList = document.getElementById('useList');

    let currentIndex = 0;
    let currentRotation = 0;

    // Component Data State
    const slideData = [
        {
            serve: `<li><i class="fas fa-utensils"></i> Kaptan Patates Tabağı</li>
                    <li><i class="fas fa-bottle-droplet"></i> Ketçap</li>
                    <li><i class="fas fa-bottle-droplet"></i> Mayonez</li>`,
            use:   `<li><i class="fas fa-leaf"></i> Taze Tarla Patatesi</li>
                    <li><i class="fas fa-flask"></i> Sole Ayçiçek Yağı</li>
                    <li><i class="fas fa-tint"></i> Calve Ketçap</li>
                    <li><i class="fas fa-tint"></i> Calve Mayonez</li>`
        },
        {
            serve: `<li><i class="fas fa-utensils"></i> Kaptan Hatay Soslu Döner</li>
                    <li><i class="fas fa-box"></i> Külahta Patates</li>
                    <li><i class="fas fa-bottle-droplet"></i> Ketçap</li>
                    <li><i class="fas fa-bottle-droplet"></i> Mayonez</li>`,
            use:   `<li><i class="fas fa-leaf"></i> Taze Tarla Patatesi</li>
                    <li><i class="fas fa-pepper-hot"></i> Özel El Yapımı Hatay Sos</li>
                    <li><i class="fas fa-leaf"></i> Tat Salatalık Turşusu</li>
                    <li><i class="fas fa-tint"></i> Calve Ketçap</li>
                    <li><i class="fas fa-tint"></i> Calve Mayonez</li>`
        },
        {
            serve: `<li><i class="fas fa-hamburger"></i> Ekmek Arası Harbiye Köfte</li>
                    <li><i class="fas fa-bottle-droplet"></i> Ketçap</li>
                    <li><i class="fas fa-bottle-droplet"></i> Mayonez</li>`,
            use:   `<li><i class="fas fa-leaf"></i> Taze Tarla Domatesi</li>
                    <li><i class="fas fa-pepper-hot"></i> Günlük Biber</li>
                    <li><i class="fas fa-leaf"></i> Günlük Soğan</li>`
        },
        {
            serve: `<li><i class="fas fa-utensils"></i> Dilimlenmiş Dürüm Tantuni</li>
                    <li><i class="fas fa-spoon"></i> Üzerine Yoğurt Sos</li>
                    <li><i class="fas fa-leaf"></i> Baharat</li>`,
            use:   `<li><i class="fas fa-drumstick-bite"></i> Lezita Tavuk</li>
                    <li><i class="fas fa-bread-slice"></i> Untad Lavaş</li>
                    <li><i class="fas fa-bowl-food"></i> Dost Yoğurt</li>
                    <li><i class="fas fa-leaf"></i> Bağdat Baharat</li>`
        }
    ];

    function updateSlider() {
        // Fade out transition
        heroText.style.opacity = '0';
        if(serveList) serveList.style.opacity = '0';
        if(useList) useList.style.opacity = '0';

        setTimeout(() => {
            slides.forEach((slide, index) => {
                slide.classList.remove('active', 'prev', 'next', 'hidden');

                if (index === currentIndex) {
                    slide.classList.add('active');
                    heroText.innerHTML = slide.getAttribute('data-title');
                    
                    if(serveList) serveList.innerHTML = slideData[currentIndex].serve;
                    if(useList) useList.innerHTML = slideData[currentIndex].use;

                } else if (index === (currentIndex - 1 + slides.length) % slides.length) {
                    slide.classList.add('prev');
                } else if (index === (currentIndex + 1) % slides.length) {
                    slide.classList.add('next');
                } else {
                    slide.classList.add('hidden');
                }
            });

            // Fade in transition
            heroText.style.opacity = '1';
            if(serveList) serveList.style.opacity = '1';
            if(useList) useList.style.opacity = '1';
        }, 300); 
    }

    if(nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            currentRotation -= 45;
            if(helmIcon) helmIcon.style.transform = `rotate(${currentRotation}deg)`;
            updateSlider();
        });
    }

    if(prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            currentRotation += 45;
            if(helmIcon) helmIcon.style.transform = `rotate(${currentRotation}deg)`;
            updateSlider();
        });
    }

    // Initialize state
    updateSlider();
});