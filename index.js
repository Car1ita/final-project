// Add JavaScript below
let currentIndex = 0;
const slides = document.querySelectorAll('#slideshow .slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}


setInterval(NextSlide, 3000); 
showNextSlide(); 



function goToStep(step) {
    document.querySelectorAll('.form-step').forEach(step => step.classList.add('hidden'));

    document.getElementById('step${step}').classList.remove('hidden');
}

function goHome() {
    window.location.href="index.html";

}

const selectedItems =["Custom Set - $100"]

function updateOrderList() {
    const orderList = document.getElementById("order-list");
    orderList.innerHTML = '';

    selectedItems.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        orderList.appendChild(listItem);
    });
}

updateOrderList();


document.addEventListener("DOMContentLoaded", () => {
    const imageUpload = document.getElementById("image-upload");
    const imagePreview = document.getElementById("image-preview");
    const previewContainer = document.getElementById("preview-container");
    const modal = document.getElementById("order-modal");
    const closeModalBtn = document.getElementById("close-modal");
    const orderMoreBtn = document.getElementById("order-more");
    const proceedToOrderBtn = document.getElementById("proceed-to-order");
    const doneEditingBtn = document.getElementById("done-editing");

    // Display uploaded image preview
    imageUpload.addEventListener("change", () => {
        const file = imageUpload.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                imagePreview.src = e.target.result;
                imagePreview.hidden = false;
                previewContainer.querySelector("p").hidden = true;
            };
            reader.readAsDataURL(file);
        }
    });

    // Show modal after clicking Done Editing
    doneEditingBtn.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default form submission
        modal.hidden = false;
    });

    // Close modal when the close button is clicked
    closeModalBtn.addEventListener("click", () => {
        modal.hidden = true;
    });

    // Handle modal actions
    orderMoreBtn.addEventListener("click", () => {
        modal.hidden = true;
        window.location.href = "index.html"; // Redirect to home
    });

    proceedToOrderBtn.addEventListener("click", () => {
        modal.hidden = true;
        window.location.href = "orders.html"; // Redirect to orders page
    });
});
