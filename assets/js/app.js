// Modal

let modalContainer = document.querySelector(".modal__container");
let modalBtn = document.querySelector(".modal__container button.modalBtn");
let modalCloseBtn = modalContainer.querySelector(".close__icon");

modalBtn.addEventListener("click", function () {
    modalContainer.classList.add("active");
})

modalCloseBtn.addEventListener("click", function () {
    modalContainer.classList.remove("active");
    modalContainer.classList.add("prompt");

    modalContainer.querySelector(".modal__cancel").addEventListener("click", () => {
        modalContainer.classList.remove("prompt");
        modalContainer.classList.add("active");
    })

    modalContainer.querySelector(".modal__continue").addEventListener("click", () => {
        modalContainer.classList.remove("prompt");
    })

})

// Accordian

let accItems = document.querySelectorAll(".accordian .item")
let accTitles = document.querySelectorAll(".accordian .item .title");

accTitles.forEach(accTitle => accTitle.addEventListener("click", function () {

    accItems.forEach(accItem => accItem != this.parentElement ? accItem.classList.remove("active") : null);

    this.parentElement.classList.toggle("active");
    this.querySelector("i.arrow").classList.toggle("down__arow");

}))