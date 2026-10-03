// ===== SELECTED IMPACT — COUNT-UP ANIMATION =====
(function () {
    function initImpact() {
        const values = document.querySelectorAll('.impact-value');
        if (!values.length) return;

        const prefersReducedMotion =
            window.matchMedia &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        function animateValue(el) {
            const target = parseInt(el.dataset.target, 10);
            const prefix = el.dataset.prefix || '';
            const suffix = el.dataset.suffix || '';

            if (isNaN(target)) return;

            if (prefersReducedMotion) {
                el.textContent = prefix + target + suffix;
                return;
            }

            const duration = 2500;
            const start = performance.now();

            function tick(now) {
                const progress = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = Math.round(target * eased);
                el.textContent = prefix + current + suffix;
                if (progress < 1) {
                    requestAnimationFrame(tick);
                } else {
                    el.textContent = prefix + target + suffix;
                }
            }

            requestAnimationFrame(tick);
        }

        if (!('IntersectionObserver' in window)) {
            values.forEach(animateValue);
            return;
        }

        const observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        animateValue(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
        );

        values.forEach(function (el) {
            observer.observe(el);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initImpact);
    } else {
        initImpact();
    }
})();

// ===== FLOATING RESUME BUBBLE (hide on scroll, show when idle) =====
document.addEventListener('DOMContentLoaded', function () {
    const resumeFloat = document.querySelector('.resume-float');

    if (!resumeFloat) {
        console.warn('Resume bubble not found on this page');
        return;
    }

    let scrollTimeout;
    let isScrolling = false;

    // Start visible
    resumeFloat.style.opacity = '1';
    resumeFloat.style.pointerEvents = 'auto';

    window.addEventListener('scroll', () => {
        // Only hide once when scrolling starts
        if (!isScrolling) {
            isScrolling = true;
            resumeFloat.style.opacity = '0';
            resumeFloat.style.pointerEvents = 'none';
        }

        // Reset the timer on every scroll event
        clearTimeout(scrollTimeout);

        // Show again after scrolling has stopped for 1 second
        scrollTimeout = setTimeout(() => {
            isScrolling = false;
            resumeFloat.style.opacity = '1';
            resumeFloat.style.pointerEvents = 'auto';
        }, 1000); // ← increased from 400ms to 1000ms
    });
});