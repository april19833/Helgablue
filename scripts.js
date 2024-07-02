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
    const cupsCountInput = document.getElementById('cupsCount');
    const timeOfDayInput = document.getElementById('timeOfDay');
    
    const cupsCount = parseInt(cupsCountInput.value);
    const timeOfDay = timeOfDayInput.value;

    if (isNaN(cupsCount) || cupsCount <= 0) {
        alert('Please enter a valid number of cups (greater than zero).');
        return;
    }

    // Создаем объект записи
    const waterRecord = {
        cups: cupsCount,
        time: timeOfDay,
        timestamp: new Date().toISOString()
    };

    // Получаем текущие записи из localStorage, если они есть
    let records = JSON.parse(localStorage.getItem('waterRecords')) || [];

    // Добавляем новую запись
    records.push(waterRecord);

    // Сохраняем записи обратно в localStorage
    localStorage.setItem('waterRecords', JSON.stringify(records));

    // Создаем элемент для отображения новой записи
    const recordElement = document.createElement('div');
    recordElement.classList.add('water-record');
    recordElement.innerHTML = `<strong>${waterRecord.cups}</strong> cups at ${waterRecord.time}`;

    // Добавляем запись в список
    const waterRecords = document.getElementById('waterRecords');
    waterRecords.appendChild(recordElement);

    // Очищаем поля ввода
    cupsCountInput.value = '';
    timeOfDayInput.value = '';

    // Показываем уведомление
    const notification = document.getElementById('notification');
    notification.innerHTML = `Water intake recorded for ${timeOfDay}`;
    notification.classList.add('show');

    // Закрываем уведомление через 3 секунды
    setTimeout(function() {
        notification.classList.remove('show');
    }, 3000);
}

// Проверяем, есть ли записи в localStorage при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    const records = JSON.parse(localStorage.getItem('waterRecords')) || [];

    // Выводим записи, если они есть
    const waterRecords = document.getElementById('waterRecords');
    records.forEach(function(record) {
        const recordElement = document.createElement('div');
        recordElement.classList.add('water-record');
        recordElement.innerHTML = `<strong>${record.cups}</strong> cups at ${record.time}`;
        waterRecords.appendChild(recordElement);
    });
});
