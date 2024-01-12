
function display(value) {
    document.getElementById("box").value += value
}

function calculate() {
    if (document.getElementById("box").value == 0) {
        document.getElementById("box").value = 0
    } else {
        let result = eval(document.getElementById("box").value)
        document.getElementById("box").value = result
    }
}

function reset() {
    document.getElementById("box").value = ""
}

function del() {
    document.getElementById("box").value = document.getElementById("box").value.substring(0, document.getElementById("box").value.length - 1)
}