document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll(".question")
    questions.forEach((question) => question.addEventListener("click", () => {

        if (question.parentNode.classList.contains("active")) {
            question.parentNode.classList.toggle("active")
        }
        else {
            questions.forEach(question => question.parentNode.classList.remove("active"))
            question.parentNode.classList.add("active")
        }

    }))
})

let btn = document.querySelector(".red-btn");
btn.addEventListener("click", () => {
    let input = document.querySelector(".input");
    if (input.parentNode.parentNode.classList.contains("wrong")) {
        input.parentNode.parentNode.classList.remove("wrong");
    }
    if (input.value.trim() === "") {
        input.parentNode.parentNode.classList.add("wrong");
    }
    if (input.value !== "") {
        ValidateEmail(input);
    }
})

function ValidateEmail(email) {
    let emailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.value.match(emailformat)) {
        email.parentNode.parentNode.classList.add("wrong");
    };

};

document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
        resetTabs();
        resetBorders();
        if (tab.classList.contains("tab1")) {
            document.getElementById("tab-1").style.display = "flex";
            tab.style.borderBottom = "2px solid #FA5959";
        }
        if (tab.classList.contains("tab2")) {
            document.getElementById("tab-2").style.display = "flex";
            tab.style.borderBottom = "2px solid #FA5959";
        }
        if (tab.classList.contains("tab3")) {
            document.getElementById("tab-3").style.display = "flex";
            tab.style.borderBottom = "2px solid #FA5959";
        }
    })
})
window.addEventListener("load", () => {
    document.querySelector(".tab1").style.borderBottom = "2px solid #FA5959"
})
function resetTabs() {
    document.getElementById("tab-1").style.display = "none";
    document.getElementById("tab-2").style.display = "none";
    document.getElementById("tab-3").style.display = "none";
}
function resetBorders() {
    document.querySelectorAll(".tab").forEach(tab => {
        tab.style.borderBottom = "";
    })
}

let btnHamb = document.querySelector(".hamb");
let btnClose = document.querySelector(".close");

btnHamb.addEventListener("click", () => {
    document.querySelector(".header-menu").parentNode.classList.add("mobile-menu");
})
btnClose.addEventListener("click", () => {
    document.querySelector(".header-menu").parentNode.classList.remove("mobile-menu");
})