/**
 * Dynamic Scroll Navbar & Mobile Submenu Controller
 * Handles scroll-based background effects, mobile toggles, and smooth anchor routing.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Navbar Background Scroll Effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(0, 0, 0, 0.9)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.1)'; 
            }
        }
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    function resetSubmenus() {
        const submenuUls = document.querySelectorAll('#mobile-menu ul.pl-4'); 
        const submenuArrows = document.querySelectorAll('#mobile-menu button span');
        
        submenuUls.forEach(ul => ul.classList.add('hidden'));
        submenuArrows.forEach(span => span.textContent = '▼');
    }

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isOpening = mobileMenu.classList.contains('hidden');
            mobileMenu.classList.toggle('hidden');
            if (isOpening) resetSubmenus();
        });
    }

    // Submenu Toggles
    const submenuToggleButtons = document.querySelectorAll('#mobile-menu > div > button');
    submenuToggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const submenuUl = button.nextElementSibling;
            const submenuArrow = button.querySelector('span');

            if (submenuUl && submenuArrow) {
                submenuUl.classList.toggle('hidden');
                submenuArrow.textContent = submenuUl.classList.contains('hidden') ? '▼' : '▲';
            }
        });
    });

    // Outside Click Handler
    document.addEventListener('click', (event) => {
        if (mobileMenu && mobileMenuBtn) {
            const isClickInsideMenu = mobileMenu.contains(event.target) || mobileMenuBtn.contains(event.target);
            if (!isClickInsideMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });

    // Smooth Scroll & Auto-Close Menu
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            const offset = 80; 

            if (target) {
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }

            if (mobileMenu) {
                mobileMenu.classList.add('hidden');
                resetSubmenus();
            }
        });
    });
});