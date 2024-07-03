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

// Функция для записи данных о потреблении воды с лимоном
function recordWater() {
    // Получаем данные из формы
    let cupsCount = document.getElementById('cupsCount').value;
    let timeOfDay = document.getElementById('timeOfDay').value;

    // Проверяем, что оба поля заполнены
    if (cupsCount.trim() === '' || timeOfDay.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Создаем новую строку для таблицы
    let newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${timeOfDay}</td>
        <td>${cupsCount}</td>
    `;

    // Добавляем новую строку в таблицу
    let tableBody = document.getElementById('waterRecords');
    tableBody.appendChild(newRow);

    // Показываем уведомление
    showNotification('Water with lemon recorded successfully.');
}

// Функция для показа уведомления
function showNotification(message) {
    let notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';

    // Скрываем уведомление через 3 секунды
    setTimeout(function() {
        notification.style.display = 'none';
    }, 3000);
}

// Скрипт для кнопки Toggle Theme (если нужно)
document.getElementById('themeToggleBtn').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Скрипт для модального окна Donate (если нужно)
let modal = document.getElementById('donateModal');
let openModalBtn = document.getElementById('openDonateModal');
let closeModalBtn = document.getElementsByClassName('close')[0];

openModalBtn.onclick = function() {
    modal.style.display = 'block';
}

closeModalBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
