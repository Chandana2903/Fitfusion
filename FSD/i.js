document.addEventListener("DOMContentLoaded", function () {
    // Select all sections to animate
    const sections = document.querySelectorAll('.section');
    let delay = 1000;  // Start after the About section
  
    // Function to trigger the sliding animation for each section
    function revealSections() {
      sections.forEach((section, index) => {
        if (section.classList.contains("about")) {
          return; // Skip "About" since it's already revealed
        }
        setTimeout(() => {
          section.classList.add('reveal'); // Add reveal class to trigger slide-in
        }, delay);
        delay += 800; // Delay each section's appearance
      });
    }
  
    // Call the function to reveal the sections after About is shown
    revealSections();
  });
  