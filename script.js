document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }

            // Update active navigation link
            const navLinks = document.querySelectorAll('.main-nav a');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (this.getAttribute('href') === link.getAttribute('href')) {
                    link.classList.add('active');
                }
            });
        });
    });

    // Highlight current section in navigation
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('.brain-content section');
        const navLinks = document.querySelectorAll('.main-nav a');

        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 100) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    });

    // Add hover effects to brain diagram
    const diagramImage = document.querySelector('.brain-diagram-image');
    if (diagramImage) {
        diagramImage.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });

        diagramImage.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1.0)';
        });
    }

    // Add hover effects to content sections
    const contentSections = document.querySelectorAll('.region, .function-item, .neuro-concept, .health-topic');
    contentSections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.1)';
        });

        section.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
        });
    });

    // Add animation delay for mobile responsiveness
    if (window.innerWidth <= 768) {
        const sections = document.querySelectorAll('.brain-content section');
        sections.forEach((section, index) => {
            section.style.animationDelay = `${index * 0.2}s`;
        });
    }

    // Add fact card animations
    const factCards = document.querySelectorAll('.fact');
    factCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});