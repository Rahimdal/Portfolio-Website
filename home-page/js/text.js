 gsap.registerPlugin(ScrollTrigger);

    const title = document.getElementById("main-title");
    const text = "What  &nbsp Im  &nbsp Do......?";
    const words = text.split(" ");

    title.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(" ");

    gsap.timeline({
      scrollTrigger: {
        trigger: ".reveal-section",
        start: "center center",
        end: "+=1500",
        scrub: true,
        pin: true,
        markers: false
      }
    })
    .to(".word", {
      opacity: 1,
      y: 0,
      color: "#fff",
      stagger: 0.5,
      ease: "power3.out"
    })
    .to("#main-title", {
      color: "#ff0055",
      ease: "none"
    });