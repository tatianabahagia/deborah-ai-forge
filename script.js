// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const nav = document.getElementById('navigation');

    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        
        if (mobileMenu.classList.contains('active')) {
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'inline';
        } else {
            menuIcon.style.display = 'inline';
            closeIcon.style.display = 'none';
        }
    });

    // Close mobile menu when clicking on a link
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            menuIcon.style.display = 'inline';
            closeIcon.style.display = 'none';
        });
    });

    // Navigation scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 20) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Smooth scroll function for buttons
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// Testimonial toggle functionality
const testimonialData = {
    2: {
        short: "I highly recommend Deborah Tatia, a dynamic team of young entrepreneurs specializing in mobile application and website development. Their swift, efficient, and customized approach to digital solutions...",
        full: `I highly recommend Deborah Tatia, a dynamic team of young entrepreneurs specializing in mobile application and website development. Their swift, efficient, and customized approach to digital solutions has proven to be a game-changer for my client, and I am confident they can bring the same value to your business.

Through remarkable speed and efficiency. They are able to deliver well within the agreed-upon timelines, showcasing not only technical capability but a genuine commitment to client satisfaction.

What really sets them apart is their ability to tailor solutions to specific business needs. They took the time to understand my client's goals, ensuring a personalized development approach. This flexibility turns the project into a strategic partnership focused on achieving tangible outcomes. Their transparent and reasonable fees also offers a clear understanding of the value receive, contributing significantly to a positive return on investment.

I recently introduced Deborah Tatia to our partners, and the results have exceeded expectations. The application they developed not only met but surpassed our initial expectations. I am also equally impressed with their professionalism and dedication. Clear and consistent communication, coupled with a proactive approach to address concerns, has fostered a collaborative and transparent working relationship crucial for the client's successful project outcome.

If you are in search of a team that can deliver fast, efficient, and customized digital solutions at reasonable (inexpensive) fees, Deborah Tatia is the ideal choice. They have consistently provided exceptional value for money, and I believe they will continue to elevate businesses through their innovative approach.

In conclusion, if you ever need services for website & mobile app development, Deborah Tatia & team should be in your shortlist for consideration! Highly recommended!

Best regards, Andrew`
    }
};

function toggleTestimonial(index) {
    const content = document.getElementById(`testimonial-${index}-content`);
    const toggle = document.getElementById(`testimonial-${index}-toggle`);
    const data = testimonialData[index];
    
    if (!data) return;
    
    const isExpanded = toggle.textContent.trim() === 'Read less';
    
    if (isExpanded) {
        content.innerHTML = `"${data.short}"`;
        toggle.textContent = 'Read more';
    } else {
        const formattedText = data.full.split('\n').map(line => line.trim()).join('<br><br>');
        content.innerHTML = `"${formattedText}"`;
        toggle.textContent = 'Read less';
    }
}

// Add scroll animations
function addScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    // Animate cards and sections on scroll
    const animatedElements = document.querySelectorAll('.service-card, .project-card, .testimonial-card, .achievement-card, .contact-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize scroll animations when DOM is loaded
document.addEventListener('DOMContentLoaded', addScrollAnimations);

// Add dynamic background effects
function createFloatingParticles() {
    const particles = document.createElement('div');
    particles.className = 'floating-particles';
    particles.style.position = 'fixed';
    particles.style.top = '0';
    particles.style.left = '0';
    particles.style.width = '100%';
    particles.style.height = '100%';
    particles.style.pointerEvents = 'none';
    particles.style.zIndex = '1';
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.backgroundColor = `hsl(${221 + Math.random() * 60}, 100%, 70%)`;
        particle.style.borderRadius = '50%';
        particle.style.opacity = '0.3';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${3 + Math.random() * 4}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 2 + 's';
        particles.appendChild(particle);
    }
    
    document.body.appendChild(particles);
}

// Initialize floating particles
document.addEventListener('DOMContentLoaded', createFloatingParticles);