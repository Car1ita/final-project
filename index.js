// Add JavaScript below
let currentIndex = 0; 
const slides = document.querySelectorAll('#slideshow .slide'); 

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index); 
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; 
    showSlide(currentIndex); 
}

setInterval(nextSlide, 3000);

showSlide(currentIndex);




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
  const modal = document.getElementById("order-modal");
  const closeModalBtn = document.getElementById("close-modal");
  const orderMoreBtn = document.getElementById("order-more");
  const proceedToOrderBtn = document.getElementById("proceed-to-order");
  const doneEditingBtn = document.getElementById("done-editing");

  modal.hidden = true;

  doneEditingBtn.addEventListener("click", () => {
    modal.hidden = false;
  });

  closeModalBtn.addEventListener("click", () => {
    modal.hidden = true; 
  });

  orderMoreBtn.addEventListener("click", () => {
    modal.hidden = true;
    window.location.href = "index.html"; 
  });

  proceedToOrderBtn.addEventListener("click", () => {
    modal.hidden = true;
    window.location.href = "orders.html";  
  });
});


document.addEventListener("DOMContentLoaded", () => {
    const doneEditingBtn = document.getElementById("done-editing");
    const modal = document.getElementById("order-modal");
    const closeModalBtn = document.getElementById("close-modal");
    const saveDesignBtn = document.getElementById("save-design");
    const finishDesignBtn = document.getElementById("finish-design");
  
    doneEditingBtn.addEventListener("click", () => {
      modal.hidden = false;
    });
  
    closeModalBtn.addEventListener("click", () => {
      modal.hidden = true;
    });
  
    saveDesignBtn.addEventListener("click", () => {
      alert("Design saved!");
      modal.hidden = true;
    });
  
    finishDesignBtn.addEventListener("click", () => {
      alert("Finished design!");
      modal.hidden = true;
    });
  });