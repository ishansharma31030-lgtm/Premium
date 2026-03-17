/* ==========================================================================
   DATUM SYNC | CORE LOGIC
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. DYNAMIC NAVIGATION HIGHLIGHTING
    // This automatically adds the 'active' style to the current page link
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        const linkPath = link.getAttribute("href");
        if (linkPath === currentPath) {
            link.classList.add("text-white", "border-b-2", "border-[#38bdf8]", "pb-1");
            link.classList.remove("text-gray-400");
        }
    });

    // 2. STICKY NAVBAR BEHAVIOR
    // Adds a background blur/shadow when the user scrolls down
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("premium-glass", "shadow-2xl");
            navbar.classList.remove("border-transparent");
        } else {
            // Keep it transparent at the very top for that 'airy' look
            if (!navbar.classList.contains('doc-nav')) {
                navbar.classList.remove("premium-glass", "shadow-2xl");
            }
        }
    });

    // 3. FORM SUBMISSION MOCKUP
    // Prevents the contact/newsletter forms from refreshing the page
    const forms = document.querySelectorAll("form");
    forms.forEach(form => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const button = form.querySelector("button[type='submit']");
            const originalText = button.innerHTML;
            
            // Premium Feedback: Change button state
            button.innerHTML = "Sending...";
            button.disabled = true;

            setTimeout(() => {
                button.innerHTML = "Message Sent!";
                button.style.backgroundColor = "#22c55e"; // Success Green
                button.style.color = "#ffffff";
                
                setTimeout(() => {
                    button.innerHTML = originalText;
                    button.disabled = false;
                    button.style.backgroundColor = "";
                    button.style.color = "";
                    form.reset();
                }, 3000);
            }, 1500);
        });
    });
});
