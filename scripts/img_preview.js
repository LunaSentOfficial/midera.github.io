// Get elements
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");
const screenshots_panelImages = document.querySelectorAll(".screenshots_panel img");

// Open modal when clicking an image
screenshots_panelImages.forEach(img => {
   img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImage.src = img.src;
        modalImage.alt = img.alt;
    });
});

// Close modal when clicking the close button
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside the image
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});