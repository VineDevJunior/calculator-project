

function insert(num) {
    let numbers = document.querySelector(".paragraph").innerHTML;
    document.querySelector(".paragraph").innerHTML = numbers + num;
}

function clean() {
    document.querySelector(".paragraph").innerHTML = "";
}

function back() {
    let result = document.querySelector(".paragraph").innerHTML;
    document.querySelector(".paragraph").innerHTML = result.substring(0, result.length - 1)
}

function calc() {
    let paragraph = document.querySelector(".paragraph").innerHTML;
    if (paragraph) {
        document.querySelector(".paragraph").innerHTML = eval(paragraph)
    }
}

