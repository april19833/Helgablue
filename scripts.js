// Dark mode toggle
const themeToggleButton = document.getElementById('theme-toggle');

themeToggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Modal
const modal = document.getElementById("donateModal");
const donateFlowerButton = document.querySelector(".donate-flower-button");
const closeModalButton = document.querySelector(".close");

donateFlowerButton.addEventListener("click", function() {
    modal.style.display = "block";
});

closeModalButton.addEventListener("click", function() {
    modal.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Notifications
function showNotification(message, isError) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.remove('error', 'success');
    if (isError) {
        notification.classList.add('error');
    } else {
        notification.classList.add('success');
    }
    notification.style.display = 'block';

    setTimeout(function() {
        notification.style.display = 'none';
    }, 5000);
}

// Record Water Function
function recordWater() {
    const cupsCount = document.getElementById('cupsCount').value;

    if (!cupsCount || cupsCount < 1) {
        showNotification('Please enter a valid number of cups.', true);
        return;
    }

    const currentDate = new Date();
    const date = currentDate.toLocaleDateString();
    const time = currentDate.toLocaleTimeString();

    const newRow = document.createElement('tr');
    const dateCell = document.createElement('td');
    const timeCell = document.createElement('td');
    const cupsCell = document.createElement('td');

    dateCell.textContent = date;
    timeCell.textContent = time;
    cupsCell.textContent = cupsCount;

    newRow.appendChild(dateCell);
    newRow.appendChild(timeCell);
    newRow.appendChild(cupsCell);

    const tableBody = document.getElementById('waterRecords').getElementsByTagName('tbody')[0];
    tableBody.appendChild(newRow);

    showNotification('Water with lemon successfully recorded!', false);

    document.getElementById('cupsCount').value = '';
}

// Adding event listener to the flower widget for theme toggle
const flowerWidget = document.querySelector(".flower-widget");
if (flowerWidget) {
    flowerWidget.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });
}

// Adding event listener to the donate button in the gallery section
const donateButton = document.querySelector(".donate-button");
if (donateButton) {
    donateButton.addEventListener("click", function() {
        modal.style.display = "block";
    });
}
