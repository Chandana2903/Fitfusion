// workouts.js

document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-button");
    const videoLinks = document.querySelectorAll(".video-gallery a");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");

            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // Show or hide videos based on category
            videoLinks.forEach(link => {
                const type = link.getAttribute("data-type");

                if (category === "all" || type === category) {
                    link.style.display = "inline-block";
                } else {
                    link.style.display = "none";
                }
            });
        });
    });
});