// Theme toggle functionality
const themeToggleBtn = document.getElementById('themeToggleBtn');
themeToggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Donate modal functionality
const openDonateModalBtn = document.getElementById('openDonateModal');
const donateModal = document.getElementById('donateModal');
const closeModalBtn = document.querySelector('.close');

openDonateModalBtn.addEventListener('click', function() {
    donateModal.style.display = 'block';
});

closeModalBtn.addEventListener('click', function() {
    donateModal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == donateModal) {
        donateModal.style.display = 'none';
    }
});

// Water with Lemon functionality
const waterRecordsTable = document.getElementById('waterRecordsTable');
const progressText = document.getElementById('progressText');
const notification = document.getElementById('notification');

function recordWater(amount) {
    const currentDate = new Date();
    const dateFormatted = currentDate.toLocaleDateString();
    const timeFormatted = currentDate.toLocaleTimeString();

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${dateFormatted}</td>
        <td>${amount}</td>
    `;
    waterRecordsTable.querySelector('tbody').appendChild(newRow);

    updateProgress(amount);
    showNotification();
}

function updateProgress(amount) {
    let totalAmount = 0;
    const rows = waterRecordsTable.getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
        const cups = parseInt(rows[i].getElementsByTagName('td')[1].innerText);
        totalAmount += cups;
    }

    const goal = 1000; // Adjust the daily goal amount here
    const percentage = Math.min((totalAmount / goal) * 100, 100);
    progressText.textContent = `${totalAmount} ml out of ${goal} ml`;

    const waterProgress = document.getElementById('waterProgress');
    waterProgress.value = percentage;

    if (totalAmount >= goal) {
        alert('Congratulations! You have reached your daily goal.');
    }
}

function showNotification() {
    notification.classList.add('show-notification');
    setTimeout(function() {
        notification.classList.remove('show-notification');
    }, 3000); // Notification disappears after 3 seconds
}

// GIFs for sidebar links
const sidebarLinks = document.querySelectorAll('.sidebar a');

sidebarLinks.forEach(link => {
    link.addEventListener('mouseover', function() {
        const imageUrl = this.getAttribute('data-image');
        if (imageUrl) {
            themeToggleBtn.style.backgroundImage = `url(${imageUrl})`;
        }
    });

    link.addEventListener('mouseout', function() {
        themeToggleBtn.style.backgroundImage = `url('images/illuminati.gif')`;
    });
});

// Modal functions
function openModal() {
    donateModal.style.display = 'block';
}

function closeModal() {
    donateModal.style.display = 'none';
}

// Initial setup for the GIF on theme toggle button
themeToggleBtn.style.backgroundImage = `url('images/illuminati.gif')`;
// Example of modal functionality
const modal = document.getElementById('donation-modal');
const donateBtn = document.querySelector('.donate-btn');
const closeBtn = document.querySelector('.modal-close-btn');

donateBtn.addEventListener('click', function() {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});
