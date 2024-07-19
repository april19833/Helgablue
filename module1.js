document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-container', {
        effect: 'cube',
        grabCursor: true,
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Initialize tsParticles
    tsParticles.load('tsparticles', {
        particles: {
            number: {
                value: 50,
            },
            size: {
                value: 3,
            },
            move: {
                enable: true,
                speed: 1,
            },
        },
        interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse',
                },
            },
        },
    });
});
