const buttonsControl = document.querySelectorAll("a.font-size");


const func = function(el) {
    document.querySelector("#book").className = "book";
    buttonsControl.forEach((button) => {button.classList.remove("font-size_active")});
    el.classList.add("font-size_active");
    if (el.dataset.size != null) {
        document.querySelector("#book").classList.add(`book_fs-${el.dataset.size}`)
    }
}


buttonsControl.forEach((btn) => {btn.addEventListener("click", (event) => {
    event.preventDefault();
    func(btn);
    });
})