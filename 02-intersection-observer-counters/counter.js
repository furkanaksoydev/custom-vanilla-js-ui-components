/**
 * Intersection Observer Dynamic Counters
 * Triggers number counting animation only when elements enter the viewport.
 */
document.addEventListener('DOMContentLoaded', () => {
    
    function animateCounter(elementId, targetValue, duration = 2000) {
        const element = document.getElementById(elementId);
        if (!element) return;

        const startValue = 0;
        const increment = targetValue / (duration / 16);
        let currentValue = startValue;
        
        const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= targetValue) {
                element.textContent = targetValue + '+';
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(currentValue) + '+';
            }
        }, 16);
    }

    // Performance-friendly viewport tracking
    const observerOptions = { threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Example IDs - configurable based on HTML structure
                animateCounter('counter1', 500);
                animateCounter('counter2', 1200);
                animateCounter('counter3', 25);
                animateCounter('counter4', 81);
                
                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const targetElement = document.getElementById('counter1');
    if (targetElement) {
        observer.observe(targetElement);
    }
});