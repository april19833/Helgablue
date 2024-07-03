document.getElementById('themeToggleBtn').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

const modal = document.getElementById('donateModal');
const openModalBtn = document.getElementById('openDonateModal');
const closeModalBtn = document.querySelector('.modal .close');

openModalBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

// Функция для увеличения изображений
document.querySelectorAll('.gallery-item img, .gallery-item video').forEach(item => {
    item.addEventListener('click', function() {
        if (this.requestFullscreen) {
            this.requestFullscreen();
        } else if (this.mozRequestFullScreen) { // Firefox
            this.mozRequestFullScreen();
        } else if (this.webkitRequestFullscreen) { // Chrome, Safari and Opera
            this.webkitRequestFullscreen();
        } else if (this.msRequestFullscreen) { // IE/Edge
            this.msRequestFullscreen();
        }
    });
});

// Функция для записи данных "Water with Lemon"
function recordWater() {
    const cupsCount = document.getElementById('cupsCount').value;
    const timeOfDay = document.getElementById('timeOfDay').value;
    
    if (cupsCount && timeOfDay) {
        const record = document.createElement('div');
        record.textContent = `You drank ${cupsCount} cup(s) of water with lemon at ${timeOfDay}`;
        document.getElementById('waterRecords').appendChild(record);
    }
}
