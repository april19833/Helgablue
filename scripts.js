// Переключение темы
document.getElementById('themeToggleBtn').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Открытие и закрытие модального окна
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
});

// Функция для записи воды с лимоном
function recordWater() {
    const cupsCount = document.getElementById('cupsCount').value;
    const timeOfDay = document.getElementById('timeOfDay').value;

    if (!cupsCount || cupsCount < 1) {
        showNotification('Пожалуйста, введите правильное количество чашек.', true);
        return;
    }

    // В данном примере просто показываем успешное уведомление через 1 секунду
    setTimeout(function() {
        showNotification('Вода с лимоном успешно записана!', false);
        // Очистить поля формы или обновить UI при необходимости
        document.getElementById('cupsCount').value = '';
        document.getElementById('timeOfDay').value = '';
    }, 1000); // 1
