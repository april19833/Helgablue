// Определяем модальное окно
const modal = document.getElementById('donateModal');

// Определяем кнопку, которая открывает модальное окно
const openModalBtn = document.getElementById('openDonateModal');

// Определяем элемент <span>, который закрывает модальное окно
const closeModalBtn = document.getElementsByClassName('close')[0];

// Когда пользователь кликает на кнопку, открываем модальное окно
openModalBtn.onclick = function() {
    modal.style.display = 'block';
};

// Когда пользователь кликает на <span> (x), закрываем модальное окно
closeModalBtn.onclick = function() {
    modal.style.display = 'none';
};

// Когда пользователь кликает в любое место вне модального окна, закрываем его
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Функция для записи количества выпитых стаканов воды
function recordWater() {
    const cupsCount = document.getElementById('cupsCount').value;
    const timeOfDay = document.getElementById('timeOfDay').value;

    // Создаем элемент для записи данных
    const recordElement = document.createElement('div');
    recordElement.classList.add('water-record');
    recordElement.innerHTML = `<strong>${cupsCount}</strong> cups at ${timeOfDay}`;

    // Добавляем запись в список
    const waterRecords = document.getElementById('waterRecords');
    waterRecords.appendChild(recordElement);

    // Очищаем поля ввода
    document.getElementById('cupsCount').value = '';
    document.getElementById('timeOfDay').value = '';

    // Показываем уведомление
    const notification = document.getElementById('notification');
    notification.innerHTML = `Water intake recorded for ${timeOfDay}`;
    notification.classList.add('show');

    // Закрываем уведомление через 3 секунды
    setTimeout(function() {
        notification.classList.remove('show');
    }, 3000);
}
