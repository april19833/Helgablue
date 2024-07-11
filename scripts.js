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
const waterForm = document.getElementById('waterForm');
const waterRecordsTable = document.getElementById('waterRecords');
const waterProgress = document.getElementById('waterProgress');
const progressText = document.getElementById('progressText');

function recordWater() {
    const cupsCount = parseInt(document.getElementById('cupsCount').value);
    if (isNaN(cupsCount) || cupsCount < 0) {
        alert('Please enter a valid number of cups.');
        return;
    }

    const currentDate = new Date();
    const dateFormatted = currentDate.toLocaleDateString();
    const timeFormatted = currentDate.toLocaleTimeString();

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${dateFormatted}</td>
        <td>${timeFormatted}</td>
        <td>${cupsCount}</td>
    `;
    waterRecordsTable.appendChild(newRow);

    updateProgress(cupsCount);
}

function updateProgress(cupsCount) {
    let totalCups = 0;
    const rows = waterRecordsTable.getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
        const cups = parseInt(rows[i].getElementsByTagName('td')[2].innerText);
        totalCups += cups;
    }

    waterProgress.value = totalCups;
    progressText.textContent = `${totalCups} out of 10 cups`;

    if (totalCups >= 10) {
        alert('Congratulations! You have reached your daily goal.');
    }
}
