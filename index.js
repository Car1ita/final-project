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



// JavaScript to handle form inputs and display the order
document.getElementById("upload-form").addEventListener("submit", function(event) {
    event.preventDefault();
    handleFileUpload();
});

function handleFileUpload() {
    const fileInput = document.getElementById('file-upload');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const fileContent = e.target.result;
            const fileExtension = file.name.split('.').pop().toLowerCase();

            if (fileExtension === 'csv') {
                // Handle CSV parsing
                parseCSV(fileContent);
            } else if (fileExtension === 'json') {
                // Handle JSON parsing
                parseJSON(fileContent);
            }
        };

        reader.readAsText(file);
    }
}

function parseCSV(csvContent) {
    const rows = csvContent.split('\n');
    const items = rows.map(row => row.trim()).filter(row => row.length > 0);
    updateOrderList(items);
}

function parseJSON(jsonContent) {
    try {
        const items = JSON.parse(jsonContent);
        updateOrderList(items);
    } catch (e) {
        alert('Invalid JSON file');
    }
}

function updateOrder() {
    const selectedItems = Array.from(document.getElementById('item-selection').selectedOptions)
                                .map(option => option.value);
    updateOrderList(selectedItems);
}

function updateOrderList(items) {
    const orderList = document.getElementById('order-list');
    orderList.innerHTML = ''; // Clear existing list

    if (items.length === 0) {
        orderList.innerHTML = '<li>No items selected</li>';
    } else {
        items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            orderList.appendChild(listItem);
        });
    }
}


