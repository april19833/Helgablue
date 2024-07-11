document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality
    const modal = document.getElementById('donateModal');
    const btn = document.getElementById('openDonateModal');
    const span = document.querySelector('.close');

    btn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    span.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Water with Lemon functionality
    const waterRecords = [];
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
        showNotification(`Recorded ${cupsCount} cups successfully!`);
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
        notification.innerHTML = `<div class="alert">${message}</div>`;
        notification.style.display = 'block';

        setTimeout(() => {
            notification.style.display = 'none';
        }, 5000); // Hide after 5 seconds
    }

    // Handling data-image attribute for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            const imageUrl = this.getAttribute('data-image');
            if (imageUrl) {
                console.log(`Displaying image: ${imageUrl}`);
                // You can preload or handle the image display as needed
            }
        });
    });
});
