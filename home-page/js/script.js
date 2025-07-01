   const tl = gsap.timeline();
    const video = document.getElementById('heroVideo');

    // Animate loader line
    tl.to('.loader-line', {
      duration: 1.2,
      width: '100%',
      ease: 'power2.inOut',
      onUpdate: function() {
        const progress = Math.round(this.progress() * 100);
        document.querySelector('.loader-text').textContent = `Loading ${progress}%`;
      }
    })
    // Expand video vertically and start playback
    .to('#heroVideo', {
      duration: 1.3,
      height: '100%',
      ease: 'power4.inOut',
      onStart: function() {
        video.play();
      }
    })
    // Hide loader line and text
    .to('.loader-line, .loader-text', {
      duration: 0.5,
      opacity: 0,
      ease: 'power2.out'
    }, "-=1")
    // Reveal hero text
    .to('.hero-text', {
      duration: 1.2,
      opacity: 1,
      y: -20,
      ease: 'power3.out'
    }, "-=0.5")



       window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };






//cursorArrow


     const cursorArrow = document.getElementById("cursorArrow");
    const cursorDot = document.getElementById("cursorDot");

    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (!isTouchDevice) {
      document.addEventListener("mousemove", (e) => {
        const x = e.clientX;
        const y = e.clientY;

        cursorArrow.style.left = `${x}px`;
        cursorArrow.style.top = `${y}px`;
        cursorDot.style.left = `${x}px`;
        cursorDot.style.top = `${y}px`;

        const hovered = document.elementFromPoint(x, y);
        const isMedia = hovered && (hovered.tagName === 'IMG' || hovered.tagName === 'VIDEO');

        const bgColor = window.getComputedStyle(hovered)?.backgroundColor || "rgb(255,255,255)";
        const rgb = bgColor.match(/\d+/g)?.map(Number);
        const brightness = rgb ? (rgb[0]*0.299 + rgb[1]*0.587 + rgb[2]*0.114) : 255;

        cursorDot.style.background = brightness < 128 ? "white" : "black";

        if (isMedia) {
          cursorArrow.style.opacity = 1;
          cursorArrow.style.transform = "translate(-50%, -50%) scale(1.4)";
          cursorDot.style.opacity = 0;
        } else {
          cursorArrow.style.opacity = 0;
          cursorArrow.style.transform = "translate(-50%, -50%) scale(1)";
          cursorDot.style.opacity = 1;
        }
      });

      document.addEventListener("click", () => {
        if (cursorArrow.style.opacity == 1) {
          cursorArrow.classList.add("animate-up");
          setTimeout(() => cursorArrow.classList.remove("animate-up"), 500);
        }
      });
    } else {
      // Ensure cursors are hidden on mobile/tablet
      cursorArrow.style.display = "none";
      cursorDot.style.display = "none";
    }


    
 
  gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(".text",
      { x: -100, opacity: 0 , scale: 0.8},
      {
        x: 0,
        opacity: 1,
        duration: 1,
         scale: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".scroll-section",
          start: "top -120%",
          end: "top 90%",
          toggleActions: "play none none reverse",
          pin: true,
          markes: true
        }
      }
    );

    gsap.fromTo(".image-wrapper",
      { x: 0, y: 100, opacity: 0 ,scale: 0.8 },
      {
        x: 100,
        y: -100,
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".scroll-section",
          start: "top -90%",
          end: "top 90%",
          pin: true,
          markes: true,
          toggleActions: "play none none reverse",
        }
      }
    );