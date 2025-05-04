// Image slider functionality
document.addEventListener('DOMContentLoaded', () => {
    initializeSliders();
    setupSmoothScroll();
    setupAnimations();
});

function initializeSliders() {
    document.querySelectorAll('.slider-controls').forEach(controls => {
        const slider = controls.parentElement;
        const images = slider.querySelectorAll('.slide-image');
        const dots = controls.querySelectorAll('.slider-dot');
        let currentSlide = 0;

        function showSlide(index) {
            images.forEach(img => img.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            images[index].classList.add('active');
            dots[index].classList.add('active');
            currentSlide = index;
        }

        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const index = parseInt(dot.dataset.slide);
                showSlide(index);
            });
        });

        // Auto-slide every 5 seconds
        let slideInterval = setInterval(() => {
            currentSlide = (currentSlide + 1) % images.length;
            showSlide(currentSlide);
        }, 5000);

        // Pause on hover
        slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
        slider.addEventListener('mouseleave', () => {
            slideInterval = setInterval(() => {
                currentSlide = (currentSlide + 1) % images.length;
                showSlide(currentSlide);
            }, 5000);
        });
    });
}

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

function setupAnimations() {
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.bento-card').forEach(card => {
        observer.observe(card);
    });

    // Add parallax effect to header
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const header = document.querySelector('.header');
        if (header) {
            header.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// Add animation class to CSS
const style = document.createElement('style');
style.textContent = `
    .bento-card {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }
    
    .bento-card.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);
