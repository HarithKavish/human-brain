document.addEventListener('DOMContentLoaded', function() {
    // Active navigation link with dark theme support
    const navLinks = document.querySelectorAll('.main-nav a');
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // Dark theme toggle functionality
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            const isDark = document.body.classList.contains('dark-theme');
            localStorage.setItem('darkMode', isDark);
        });
    }

    // Load saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
        document.body.classList.add('dark-theme');
    }

    // Add hover effects to brain diagram with dark theme support
    const brainDiagram = document.querySelector('.brain-diagram-image');
    if (brainDiagram) {
        brainDiagram.addEventListener('mouseenter', () => {
            brainDiagram.style.transform = 'scale(1.05)';
            brainDiagram.style.filter = document.body.classList.contains('dark-theme') ? 'none' : 'grayscale(10%)';
        });
        brainDiagram.addEventListener('mouseleave', () => {
            brainDiagram.style.transform = 'scale(1)';
            brainDiagram.style.filter = document.body.classList.contains('dark-theme') ? 'none' : 'grayscale(10%)';
        });
    }

    // Add animation to facts and regions with dark theme support
    const facts = document.querySelectorAll('.fact');
    const regions = document.querySelectorAll('.region');

    facts.forEach(fact => {
        fact.addEventListener('mouseenter', () => {
            fact.style.transform = 'translateY(-5px)';
            fact.style.transition = 'transform 0.3s ease';
            fact.style.filter = document.body.classList.contains('dark-theme') ? 'none' : 'grayscale(5%)';
        });
        fact.addEventListener('mouseleave', () => {
            fact.style.transform = 'translateY(0)';
            fact.style.filter = document.body.classList.contains('dark-theme') ? 'none' : 'grayscale(0)';
        });
    });

    regions.forEach(region => {
        region.addEventListener('mouseenter', () => {
            region.style.transform = 'translateY(-5px)';
            region.style.transition = 'transform 0.3s ease';
            region.style.filter = document.body.classList.contains('dark-theme') ? 'none' : 'grayscale(5%)';
        });
        region.addEventListener('mouseleave', () => {
            region.style.transform = 'translateY(0)';
            region.style.filter = document.body.classList.contains('dark-theme') ? 'none' : 'grayscale(0)';
        });
    });

    // Add a brief intro animation on page load with dark theme support
    const introSection = document.querySelector('.intro-section');
    if (introSection) {
        introSection.style.opacity = '0';
        introSection.style.transform = 'translateY(20px)';
        introSection.style.filter = document.body.classList.contains('dark-theme') ? 'none' : 'grayscale(5%)';

        setTimeout(() => {
            introSection.style.transition = 'opacity 0.5s ease, transform 0.5s ease, filter 0.5s ease';
            setTimeout(() => {
                introSection.style.opacity = '1';
                introSection.style.transform = 'translateY(0)';
                introSection.style.filter = document.body.classList.contains('dark-theme') ? 'none' : 'grayscale(0)';
            }, 10);
        }, 100);
    }

    // Dark theme CSS class
    document.body.classList.add('light-theme');
});