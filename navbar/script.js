const to = gsap.timeline();


 to.to('nav', {
      duration: 1.5,
      width: '500',
      delay: 2,
      ease: 'power2.inOut'
    }, "-=0.8")
    
    .to('nav a', {
      duration: 0.5,
      opacity: 1,
      stagger: 0.2,
      ease: 'power2.out'
    });

// Toggle mobile menu
    const toggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    let isOpen = false;


    toggle.addEventListener('click', () => {
      isOpen = !isOpen;
      mobileMenu.classList.toggle('show');
      toggle.textContent = isOpen ? '✖' : '☰';
    });
