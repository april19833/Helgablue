// Dark mode toggle
const toggleButton = document.querySelector(".toggle-dark-mode");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Modal
const modal = document.getElementById("myModal");
const btn = document.querySelector(".donate");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Notifications
function showNotification(type, message) {
  const notification = document.getElementById("notification");
  notification.className = `notification ${type}`;
  notification.innerText = message;
  notification.style.display = "block";
  setTimeout(() => {
    notification.style.display = "none";
  }, 3000);
}

// Record Water Function
function recordWater() {
  const cupsCount = document.getElementById('cupsCount').value;

  if (!cupsCount || cupsCount < 1) {
    showNotification('error', 'Please enter a valid number of cups.');
    return;
  }

  const currentDate = new Date();
  const date = currentDate.toLocaleDateString();
  const time = currentDate.toLocaleTimeString();

  const newRow = document.createElement('tr');
  const dateCell = document.createElement('td');
  const timeCell = document.createElement('td');
  const cupsCell = document.createElement('td');

  dateCell.textContent = date;
  timeCell.textContent = time;
  cupsCell.textContent = cupsCount;

  newRow.appendChild(dateCell);
  newRow.appendChild(timeCell);
  newRow.appendChild(cupsCell);

  const tableBody = document.querySelector('#waterRecords tbody');
  tableBody.appendChild(newRow);

  showNotification('success', 'Water with lemon successfully recorded!');

  document.getElementById('cupsCount').value = '';
}

// Notification Function
function showNotification(type, message) {
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.classList.remove('error', 'success'); // Remove both error and success classes
  notification.classList.add(type);
  notification.style.display = 'block';

  setTimeout(function() {
    notification.style.display = 'none';
  }, 5000);
}
/* Flower Widget Styles */
.flower-widget {
    position: fixed;
    bottom: 20px;
    right: 20px;
    cursor: pointer;
}

.flower-icon {
    width: 50px;
    height: 50px;
    transition: transform 0.3s ease;
}

.flower-icon:hover {
    transform: scale(1.1);
}

/* Add necessary dark mode styles */
.dark-mode {
    background-color: #333;
    color: #fff;
}

.dark-mode header {
    background-color: #555;
}

.dark-mode .section {
    background-color: #444;
    border-color: #666;
}

.dark-mode .gallery-section {
    background-color: #666;
    border-color: #888;
}

.dark-mode .gallery-section a {
    color: #fff;
    border-color: #fff;
}

.dark-mode footer {
    background-color: #555;
    color: #ccc;
}

.dark-mode .modal-content {
    background-color: #222;
    border-color: #444;
    color: #fff;
}

.dark-mode .close {
    color: #ccc;
}
