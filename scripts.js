document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');

    darkModeToggle.addEventListener('change', function() {
        document.body.classList.toggle('dark-theme');
        
        // Сохранение выбора пользователя
        localStorage.setItem('darkModeEnabled', this.checked);
    });

    // Проверка состояния при загрузке страницы
    if (localStorage.getItem('darkModeEnabled') === 'true') {
        document.body.classList.add('dark-theme');
        darkModeToggle.checked = true;
    } else {
        document.body.classList.remove('dark-theme');
        darkModeToggle.checked = false;
    }

    // Функция записи воды с лимоном
    window.recordWater = function() {
        const cupsCount = document.getElementById('cupsCount').value;
        const timeOfDay = document.getElementById('timeOfDay').value;

        if (cupsCount && timeOfDay) {
            const waterRecords = document.getElementById('waterRecords');
            const recordDiv = document.createElement('div');
            recordDiv.className = 'waterRecord';
            recordDiv.innerHTML = `<strong>${timeOfDay}:</strong> ${cupsCount} cup(s) of water with lemon`;
            waterRecords.appendChild(recordDiv);
        }
    };
});
