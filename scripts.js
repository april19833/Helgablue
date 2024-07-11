// JavaScript for modal and water with lemon functionality

// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('donateModal');
    const btn = document.getElementById('openDonateModal');
    const span = document.getElementsByClassName('close')[0];

    btn.onclick = function() {
        modal.style.display = 'block';
    }

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
});

// Water with Lemon functionality
let waterRecords = [];
let totalCups = 0;

function recordWater() {
    const cupsCount = parseInt(document.getElementById('cupsCount').value);
    if (isNaN(cupsCount) || cupsCount <= 0) {
        alert('Please enter a valid number of cups.');
        return;
    }

    const now = new Date();
    const record = {
        date: now.toLocaleDateString(),
        time: now.toLocaleTimeString(),
        cups: cupsCount
    };

    waterRecords.push(record);
    totalCups += cupsCount;

    updateRecordsTable();
    updateProgress();
}

function updateRecordsTable() {
    const tableBody = document.getElementById('waterRecords');
    let tableHtml = '';

    waterRecords.forEach(record => {
        tableHtml += `<tr><td>${record.date}</td><td>${record.time}</td><td>${record.cups}</td></tr>`;
    });

    tableBody.innerHTML = tableHtml;
}

function updateProgress() {
    const progress = document.getElementById('waterProgress');
    const progressText = document.getElementById('progressText');

    progress.value = totalCups;
    progressText.textContent = `${totalCups} / 10 cups`;

    if (totalCups >= 10) {
        showNotification('Congratulations! You have achieved your daily water intake goal.');
    }
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';

    setTimeout(() => {
        notification.style.display = 'none';
    }, 5000); // Hide after 5 seconds
}
// Script for Donation Modal
document.getElementById('openDonateModal').addEventListener('click', function() {
    document.getElementById('donateModal').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('donateModal').style.display = 'none';
});

// Script for Water with Lemon Section
function recordWater() {
    const cupsCount = document.getElementById('cupsCount').value;
    const waterRecords = document.getElementById('waterRecords');
    const waterProgress = document.getElementById('waterProgress');
    const progressText = document.getElementById('progressText');

    // Display notification
    const notification = document.getElementById('notification');
    notification.innerHTML = `<div class="alert">Recorded ${cupsCount} cups successfully!</div>`;
    setTimeout(function() {
        notification.innerHTML = '';
    }, 3000);

    // Update progress
    let currentProgress = parseInt(waterProgress.value);
    currentProgress += parseInt(cupsCount);
    waterProgress.value = currentProgress;

    progressText.textContent = `${currentProgress} / 10 cups`;

    // Display recorded cups
    const recordRow = document.createElement('div');
    recordRow.classList.add('record-row');
    recordRow.innerHTML = `<p>Recorded: ${cupsCount} cups</p>`;
    waterRecords.appendChild(recordRow);
}

// Script for Theme Toggle
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}
// Example JavaScript for handling data-image attribute
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            const imageUrl = this.getAttribute('data-image');
            if (imageUrl) {
                // Preload or display the image as needed
                console.log(`Displaying image: ${imageUrl}`);
            }
        });
    });
});
