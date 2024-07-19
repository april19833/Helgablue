document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('myModal');
    var modalTitle = document.getElementById('modalTitle');
    var modalImage = document.getElementById('modalImage');
    var span = document.getElementsByClassName("close")[0];

    document.querySelectorAll('.item').forEach(function(item) {
        item.addEventListener('click', function() {
            modalTitle.innerHTML = this.getAttribute('data-title');
            modalImage.src = this.getAttribute('data-src');
            modal.style.display = "block";
        });
    });

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
