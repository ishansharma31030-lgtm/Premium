/* ==========================================================================
   DATUM SYNC | GLOBAL ANIMATIONS
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    // Check if GSAP and ScrollTrigger loaded correctly via CDN
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
        
        // Register the ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Find all elements across the entire website that need to animate
        const animatedElements = gsap.utils.toArray('.gsap-reveal, .gsap-fade-up');

        animatedElements.forEach((elem) => {
            gsap.to(elem, {
                scrollTrigger: {
                    trigger: elem,
                    start: "top 85%", // Triggers when the element is 85% down the screen
                    toggleActions: "play none none none" // Play once, don't reverse
                },
                autoAlpha: 1, // Handles both opacity and visibility
                y: 0,         // Moves it to its original position
                duration: 0.8,
                ease: "power3.out",
                delay: 0.1    // Slight delay for a smoother feel
            });
        });

    } else {
        // BULLETPROOF FALLBACK: 
        // If the user has a strict ad-blocker or slow internet that blocks GSAP,
        // this immediately shows all text so they don't see a blank black screen.
        console.warn("GSAP CDN blocked or failed. Applying fallback visibility.");
        const fallbackElements = document.querySelectorAll('.gsap-reveal, .gsap-fade-up');
        
        fallbackElements.forEach(el => {
            el.style.visibility = 'visible';
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
    }
});
