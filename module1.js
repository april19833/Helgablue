class FlipBook {
    constructor(bookElem) {
        this.elems = {
            book: bookElem,
            leaves: bookElem.querySelectorAll(".leaf"),
            buttons: {
                next: document.getElementById("nextPage"),
                prev: document.getElementById("prevPage")
            }
        };

        if (!this.elems.book || !this.elems.buttons.next || !this.elems.buttons.prev) {
            console.error("Не удалось найти один или несколько элементов. Проверьте HTML и идентификаторы.");
            return;
        }

        this.setupEvents();
        this.currentPagePosition = 0;
        this.turnPage(0);
    }

    setPagePosition(page, position, index) {
        var transform = "";
        transform = "translate3d(0,0," + ((position < 0 ? 1 : -1) * Math.abs(index)) + "px)";

        if (position < 0) {
            transform += "rotate3d(0,1,0,-180deg)";
            page.classList.add("turned");
        } else {
            page.classList.remove("turned");
        }

        if (page.style.transform != transform) {
            page.style.transform = transform;
        }
    }

    turnPage(delta) {
        this.currentPagePosition += delta;
        if (this.currentPagePosition < 0) {
            this.currentPagePosition = 0;
            return;
        }
        if (this.currentPagePosition > this.elems.leaves.length) {
            this.currentPagePosition = this.elems.leaves.length;
            return;
        }

        this.elems.leaves.forEach((page, index) => {
            var pageNumber = index;
            this.setPagePosition(page, pageNumber - this.currentPagePosition, index);
        });

        if (this.currentPagePosition == 0) {
            this.elems.buttons.prev.setAttribute("disabled", "disabled");
        } else if (this.currentPagePosition == this.elems.leaves.length) {
            this.elems.buttons.next.setAttribute("disabled", "disabled");
        } else {
            this.elems.buttons.next.removeAttribute("disabled");
            this.elems.buttons.prev.removeAttribute("disabled");
        }
    }

    setupEvents() {
        if (this.elems.buttons.next && this.elems.buttons.prev) {
            this.elems.buttons.next.addEventListener("click", () => {
                this.turnPage(1);
            });

            this.elems.buttons.prev.addEventListener("click", () => {
                this.turnPage(-1);
            });
        }
    }
}

var flipBook = new FlipBook(document.getElementById("flipbook"));
