const buttonsControl = document.querySelectorAll("a.font-size");
const colorsControl = document.querySelectorAll("div.book__control_color a.color");
const colorsBGControl = document.querySelectorAll("div.book__control_background a.color");


const funcFS = function(el) {
    let reg = /^book_fs-/;
    for (let i of document.querySelector("#book").classList) {
        if (reg.test(i)) {
           document.querySelector("#book").classList.remove(i) 
        };
    };

    buttonsControl.forEach((button) => {button.classList.remove("font-size_active")});
    el.classList.add("font-size_active");
    if (el.dataset.size != null) {
        document.querySelector("#book").classList.add(`book_fs-${el.dataset.size}`)
    }
}

const funcColor = function(el) {
    let reg = /^book_color-/;
    for (let i of document.querySelector("#book").classList) {
        if (reg.test(i)) {
           document.querySelector("#book").classList.remove(i) 
        };
    };
    colorsControl.forEach((color) => {color.classList.remove("color_active")});
    el.classList.add("color_active");
    document.querySelector("#book").classList.add(`book_color-${el.dataset.textColor}`)
}

const funcBG = function(el) {
    let reg = /^book_bg-/;
    for (let i of document.querySelector("#book").classList) {
        if (reg.test(i)) {
           document.querySelector("#book").classList.remove(i) 
        };
    };
    colorsBGControl.forEach((color) => {color.classList.remove("color_active")});
    el.classList.add("color_active");
    document.querySelector("#book").classList.add(`book_bg-${el.dataset.bgColor}`)
}

buttonsControl.forEach((btn) => {btn.addEventListener("click", (event) => {
    event.preventDefault();
    funcFS(btn);
    });
})

colorsControl.forEach((btn) => {btn.addEventListener("click", (event) => {
    event.preventDefault();
    funcColor(btn);
    });
})

colorsBGControl.forEach((btn) => {btn.addEventListener("click", (event) => {
    event.preventDefault();
    funcBG(btn);
    });
})