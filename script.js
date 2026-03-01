document.addEventListener('DOMContentLoaded', function() {
    // Active navigation link
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

    // Add hover effects to brain diagram
    const brainDiagram = document.querySelector('.brain-diagram-image');
    if (brainDiagram) {
        brainDiagram.addEventListener('mouseenter', () => {
            brainDiagram.style.transform = 'scale(1.05)';
        });
        brainDiagram.addEventListener('mouseleave', () => {
            brainDiagram.style.transform = 'scale(1)';
        });
    }

    // Add animation to facts and regions
    const facts = document.querySelectorAll('.fact');
    const regions = document.querySelectorAll('.region');

    facts.forEach(fact => {
        fact.addEventListener('mouseenter', () => {
            fact.style.transform = 'translateY(-5px)';
            fact.style.transition = 'transform 0.3s ease';
        });
        fact.addEventListener('mouseleave', () => {
            fact.style.transform = 'translateY(0)';
        });
    });

    regions.forEach(region => {
        region.addEventListener('mouseenter', () => {
            region.style.transform = 'translateY(-5px)';
            region.style.transition = 'transform 0.3s ease';
        });
        region.addEventListener('mouseleave', () => {
            region.style.transform = 'translateY(0)';
        });
    });

    // Add a brief intro animation on page load
    const introSection = document.querySelector('.intro-section');
    if (introSection) {
        introSection.style.opacity = '0';
        introSection.style.transform = 'translateY(20px)';
        setTimeout(() => {
            introSection.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            setTimeout(() => {
                introSection.style.opacity = '1';
                introSection.style.transform = 'translateY(0)';
            }, 10);
        }, 100);
    }
});