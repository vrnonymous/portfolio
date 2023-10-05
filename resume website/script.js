document.addEventListener("DOMContentLoaded", function() {
    // Get the header element
    const header = document.querySelector("header");

    // Add the "visible" class to the header after a delay (e.g., 1 second)
    setTimeout(function() {
        header.classList.add("visible");
    }, 200);
});
