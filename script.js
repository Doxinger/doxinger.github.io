$(document).ready(function() {
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        gsap.to(cursorFollower, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.6,
            ease: 'power2.out'
        });
    });
    
    document.querySelectorAll('a, button, .project-card, .script-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
            cursorFollower.classList.add('active');
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
            cursorFollower.classList.remove('active');
        });
    });
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.header').addClass('scrolled');
        } else {
            $('.header').removeClass('scrolled');
        }
    });
    
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#6c5ce7" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#6c5ce7", opacity: 0.3, width: 1 },
            move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" }
            }
        }
    });
    
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate(
            { scrollTop: $($(this).attr('href')).offset().top - 80 },
            600,
            'easeInOutExpo'
        );
    });
    
    gsap.from('.hero-title', { opacity: 0, y: -50, duration: 1, delay: 0.2 });
    gsap.from('.hero-subtitle', { opacity: 0, y: 50, duration: 1, delay: 0.4 });
    gsap.from('.hero-buttons', { opacity: 0, y: 50, duration: 1, delay: 0.6 });
    
    const animateOnScroll = () => {
        $('.animate__animated').each(function() {
            const elementPosition = $(this).offset().top;
            const windowHeight = $(window).height();
            const scrollPosition = $(window).scrollTop();
            
            if (scrollPosition > elementPosition - windowHeight + 100) {
                const animation = $(this).attr('class').split(' ').find(cls => cls.startsWith('animate__'));
                $(this).addClass(animation);
            }
        });
    };
    
    $(window).on('scroll', animateOnScroll);
    animateOnScroll();
});
