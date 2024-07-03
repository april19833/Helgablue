// Theme Toggle
document.getElementById('themeToggleBtn').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Modal Open/Close
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('donateModal');
    const openModalBtn = document.getElementById('openDonateModal');
    const closeModalBtn = document.querySelector('.modal .close');

    if (openModalBtn && closeModalBtn && modal) {
        openModalBtn.addEventListener('click', function() {
            modal.style.display = 'block';
        });

        closeModalBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Close notification on close button click
    const closeButton = document.querySelector('.notification .close');
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            const notification = document.getElementById('notification');
            notification.style.display = 'none';
        });
    }
});

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

    const tableBody = document.getElementById('waterRecords');
    tableBody.appendChild(newRow);

    showNotification('Water with lemon successfully recorded!', false);

    document.getElementById('cupsCount').value = '';
}

// Notification Function
function showNotification(message, isError) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.remove('error');
    if (isError) {
        notification.classList.add('error');
    }
    notification.style.display = 'block';

    setTimeout(function() {
        notification.style.display = 'none';
    }, 5000);
}
