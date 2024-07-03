document.getElementById('themeToggleBtn').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});

const donateModal = document.getElementById("donateModal");
const donateBtn = document.getElementById("openDonateModal");
const closeBtn = document.getElementsByClassName("close")[0];

donateBtn.onclick = function() {
    donateModal.style.display = "block";
}

closeBtn.onclick = function() {
    donateModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == donateModal) {
        donateModal.style.display = "none";
    }
}
