// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const body = document.body;
    themeToggleBtn.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
    });

    // Initial setup for the GIF on theme toggle button
    themeToggleBtn.style.backgroundImage = `url('images/illuminati.gif')`;
});
// Donate modal functionality
document.addEventListener('DOMContentLoaded', function() {
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
});
// Water with Lemon functionality
const waterRecordsTable = document.getElementById('waterRecordsTable');
const progressText = document.getElementById('progressText');
const notification = document.getElementById('notification');

function recordWater(amount) {
    // Function implementation here
}

function updateProgress(amount) {
    // Function implementation here
}

function showNotification() {
    // Function implementation here
}
// GIFs for sidebar links
document.addEventListener('DOMContentLoaded', function() {
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
});
// Modal functions
function openModal() {
    // Function implementation here
}

function closeModal() {
    // Function implementation here
}
// Example of modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('donation-modal');
    const donateBtn = document.querySelector('.donate-btn');
    const closeBtn = document.querySelector('.modal-close-btn');

    donateBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
});
// Opening modal on button click
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('donateCourseBtn').addEventListener('click', function() {
        document.getElementById('donationModal').style.display = "block";
    });

    // Closing modal on close button click or outside click
    const modalCloseBtn = document.querySelector('.close');

    modalCloseBtn.addEventListener('click', function() {
        document.getElementById('donationModal').style.display = "none";
    });

    window.addEventListener('click', function(event) {
        if (event.target == document.getElementById('donationModal')) {
            document.getElementById('donationModal').style.display = "none";
        }
    });
});
